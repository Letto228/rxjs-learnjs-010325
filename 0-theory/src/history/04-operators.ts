import { filter, interval, MonoTypeOperatorFunction, Observable, OperatorFunction, UnaryFunction } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000);

// // function filterStreamValue<T>(filterCb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// // function filterStreamValue<T>(filterCb: (value: T) => boolean): OperatorFunction<T, T> {
// // function filterStreamValue<T>(filterCb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
// //     return (source$: Observable<T>) => new Observable(subscriber => {
// //         const subscription = source$.subscribe({
// //             next: value => {
// //                 if (filterCb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //         });

// //         // return () => {
// //         //     subscription.unsubscribe();
// //         // }
// //         // return {
// //         //     unsubscribe: () => {
// //         //         subscription.unsubscribe();
// //         //     }
// //         // };
// //         return subscription;
// //     });
// // };
// function filterStreamValue<T>(filterCb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
//     return (source$: Observable<T>) => new Observable(subscriber => source$.subscribe({
//         next: value => {
//             if (filterCb(value)) {
//                 subscriber.next(value);
//             }
//         },
//         complete: () => {
//             subscriber.complete();
//         },
//         error: error => {
//             subscriber.error(error);
//         },
//     }));
// };

// const filterStreamByEvenNumbers = filterStreamValue<number>(value => value % 2 === 0);
// // const filterStreamByEvenNumbers = filter<number>(value => value % 2 === 0);

// filterStreamByEvenNumbers(stream$).subscribe(terminalLog);
