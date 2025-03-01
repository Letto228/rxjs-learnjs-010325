// import { catchError, EMPTY, from, NEVER, Observable, tap, throwError } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const streamWithError$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error(new Error('Alarm'));
// });

// // --------------------subscribe--------------------

// // streamWithError$.subscribe({
// //     next: terminalLog,
// //     // error: error => {
// //     //     console.log(error);
// //     // }
// //     error: () => {
        
// //     }
// // });

// // --------------------tap--------------------

// // streamWithError$
// //     .pipe(
// //         tap({
// //             next: terminalLog,
// //             error: error => {
// //                 console.log(error);
// //             }
// //         })
// //     )
// //     .subscribe()

// // --------------------catchError--------------------

// streamWithError$
//     .pipe(
//         catchError((error, originalStream$) => {
//             console.log(`catchError: ${error}`);

//             // return from([1,2,[3,4], {length: 5}]);
//             // return streamWithError$;

//             // return streamWithError$.pipe(catchError(catchCb));
//             // return originalStream$;

//             // return NEVER; // -------------------------...
//             // return EMPTY; // |
//             return throwError(() => new Error('New Error')); // X
//         }),
//     )
//     .subscribe({
//         next: terminalLog,
//         error: error => {
//             console.log(`Subscribe: ${error}`);
//         },
//         complete: () => {
//             terminalLog('Complete');
//         }
//     });
