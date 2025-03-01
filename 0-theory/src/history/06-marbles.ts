import { filter, interval, map, skip, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // 1 frame: - === 1000ms (1s)

// const stream$ = interval(1000).pipe(
//     // tap(value => {
//     //     console.log(value);
//     // }),
//     tap({
//         next: value => {
//             console.log(value);

//             // return ...
//         },
//     }),
//     map(value => value * 2),
//     filter(value => value % 3 === 0),
//     skip(2),
//     take(2),
// );

// stream$.subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('Completed');
//     }
// });

// // -0-1-2-3-4-5 -6 -7 -8 -9 -...
// //      |
// //      V
// // map(value => value * 2),
// // -0-2-4-6-8-10-12-14-16-18-...
// //      |
// //      V
// // fiter(value => value % 3 === 0),
// // -0- - -6- -  -12-  -  -18-...
// //      |
// //      V
// // skip(2),
// // - - - - - -  -12-  -  -18-...
// //      |
// //      V
// // take(2),
// // - - - - - -  -12-  -  -18|
