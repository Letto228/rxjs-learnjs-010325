import { filter, map, Observable, zip } from "rxjs";

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
): Observable<number> {
    return zip(
        down$,
        up$,
    ).pipe(
        map(([downEvent, upEvent]) => downEvent.clientX - upEvent.clientX),
        filter(diff => Math.abs(diff) > 30),
    )
}