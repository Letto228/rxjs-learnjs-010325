

// const stream$ = interval(1000);
// // const stream$ = new Observable<number>(subscriber => {
// //     console.log('Start');

// //     let count = 0;

// //     const interalId = setInterval(() => {
// //         count += 1;

// //         subscriber.next(count);
// //         console.log('Next count', count);
// //     }, 1000);

// //     // Destroy hook
// //     return () => {
// //         console.log('Destroy');
// //         clearInterval(interalId);
// //     };
// // });

// // const hotStream$ = interval(1000).pipe(
// const hotStream$ = stream$.pipe(
//     share({
//         // connector: () => new Subject(),
//         // connector: () => new ReplaySubject(),
//         // resetOnComplete: ,
//         // resetOnError: ,
//         resetOnRefCountZero: false,
//     }),
// );

// // const hotStream$ = new BehaviorSubject(0);

// // setInterval(() => {
// //     const newValue = hotStream$.value + 1;

// //     hotStream$.next(newValue);
// // }, 1000);

// const subscription = hotStream$.subscribe(value => { 
//     terminalLog(`S1: ${value}`);
// });

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 4000);

// setTimeout(() => {
//     hotStream$.subscribe(value => { 
//         terminalLog(`S1: ${value}`);
//     });
// }, 7000);

// // setTimeout(() => {
// //     hotStream$.subscribe(value => { 
// //         terminalLog(`S2: ${value}`);
// //     });
// // }, 4000);

// // setTimeout(() => {
// //     hotStream$.subscribe(value => { 
// //         terminalLog(`S3: ${value}`);
// //     });
// // }, 10000);
