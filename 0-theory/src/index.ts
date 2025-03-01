import { asapScheduler, asyncScheduler, combineLatest, from, interval, observeOn, of, scheduled, subscribeOn, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

// console.log('Start');

// from(Array.from({length: 10}, (_, i) => i))
//     .subscribe(console.log);

// interval(1000)
//     .subscribe(console.log);

// from(Array.from({length: 10}, (_, i) => i), asyncScheduler)
    // .subscribe(console.log);
// from(Array.from({length: 10}, (_, i) => i), asapScheduler)
//     .subscribe(console.log);

// scheduled(Array.from({length: 10}, (_, i) => i), asapScheduler)
//     .subscribe(console.log);

// console.log('End');

// -----------------------------------------------------------------------------

// console.log('Start');

// from(Array.from({length: 10}, (_, i) => i))
//     .pipe(
//         tap(() => {
//             console.log('default scheduler')
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before async scheduler')
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(value => {
//         console.log(`Async - ${value}`)
//     });

// from([1,2,3]).subscribe(value => {
//     console.log(`Sync - ${value}`)
// })

// console.log('End');

// -----------------------------------------------------------------------------

// const stream1$ = of(1,2);
// const stream2$ = of(10);
const stream1$ = scheduled([1,2], asyncScheduler);
const stream2$ = scheduled([10], asyncScheduler);

const stream$ = combineLatest([
    stream1$,
    stream2$,
]);

stream$.subscribe(value => {
    console.log(value);
})
