import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, map, OperatorFunction, pipe, retry, switchMap, timer } from "rxjs";
import { ajax, AjaxConfig } from "rxjs/ajax";

export function liveSearch<Data>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true}
): OperatorFunction<string, Data> {
    return pipe(
        debounceTime(300),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map(searchParam => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        } as AjaxConfig)),
        switchMap(config => ajax<Data>(config).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                // delay: 3000
                delay: (error, retryCount) => timer(3000 * retryCount),
                resetOnSuccess: false,
            }),
            catchError(error => {
                console.log(error);
    
                return EMPTY;
            }),
        )),
    );
}