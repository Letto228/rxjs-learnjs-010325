import { filter, interval, map, MonoTypeOperatorFunction, Observable, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { source } from '@angular-devkit/schematics';

// const stream$ = interval(1000);

// // const filterEven = filter<number>(value => value % 2 === 0);
// // const double = map<number, number>(value => value * 2);

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // map<number, number>(value => value * 2)(
// //     filter<number>(value => value % 2 === 0)(
// //         stream$,
// //     ),
// // ).subscribe(terminalLog);

// // function pipe(
// //     ...operators: Array<OperatorFunction<any, any>>
// // ): OperatorFunction<unknown, unknown> {
// //     return source$ => operators.reduce(
// //         (prevChildStream$, operator) => operator(prevChildStream$),
// //         source$,
// //     );
// // }

// // const resultOperatorFunction = pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map<number, number>(value => value * 2),
// // );

// // resultOperatorFunction(stream$).subscribe(terminalLog);

// // pipe<Observable<number>, Observable<number>, Observable<number>>(
// //     filter(value => value % 2 === 0),
// //     map(value => value * 2),
// // )(stream$).subscribe(terminalLog);

// stream$.pipe(
//     filter(value => value % 2 === 0),
//     map(value => value * 2),
// ).subscribe(terminalLog);
