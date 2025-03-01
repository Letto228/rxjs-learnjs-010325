// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { error } from 'jquery';

// // ------------------Promise------------------

// // const sequence = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         resolve(count);
// //     }, 1000);
// // });

// // sequence.then(count => {
// //     terminalLog(count);
// // });

// // setTimeout(() => {
// //     sequence.then(count => {
// //         terminalLog(count);
// //     });
// // }, 3000);

// // ------------------generators------------------

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         yield count;
// //     }
// // })()

// // // terminalLog(sequence.next().value);
// // // terminalLog(sequence.next().value);
// // // terminalLog(sequence.next().value);
// // // terminalLog(sequence.next().value);
// // // terminalLog(sequence.next().value);

// // setInterval(() => {
// //     terminalLog(sequence.next().value)
// // }, 1000);

// // ------------------ReactiveX------------------

// // const sequence = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         resolve(count);
// //     }, 1000);
// // });

// // const stream$: Observable<number> = new Observable<number>();
// // const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
// const stream$ = new Observable<number>(subscriber => {
//     console.log('Start');

//     let count = 0;

//     const interalId = setInterval(() => {
//         count += 1;

//         subscriber.next(count);
//         console.log('Next count', count);

//         if (count === 5) {
//             // subscriber.complete();
//             subscriber.error(new Error('Is error'));

//             // clearInterval(interalId);
//         }
//     }, 1000);

//     // Destroy hook
//     return () => {
//         console.log('Destroy');
//         clearInterval(interalId);
//     };
// });

// const subscription: Subscription = stream$.subscribe({
//     next: value => {
//         terminalLog(value);
//     },
//     error: error => {
//         terminalLog(error);
//     },
//     complete: () => {
//         terminalLog('Completed');
//     },
// });

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000);

// // setTimeout(() => {
// //     stream$.subscribe(value => {
// //         terminalLog(value);
// //     });
// // }, 3000);
