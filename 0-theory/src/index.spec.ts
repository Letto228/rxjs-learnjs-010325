import { interval, map, of, take } from "rxjs";
import { TestScheduler } from "rxjs/testing";

// describe('Tests block', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     });

//     it('', () => {

//     });
// });

describe('Tests block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Cold test', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const stream$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                },
            );

            const finalStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '-a--b---c---|'
            const expectedMarblesValueMap = {
                a: 2,
                b: 12,
                c: 20,
            };

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });

    it('interval test', () => {
        testScheduler.run(({expectObservable}) => {
            const stream$ = interval(2);
            const finalStream$ = stream$.pipe(
                map(value => value * 3),
                take(4),
            );

            const expectedMarbles = '--a-b-c-(d|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 3,
                c: 6,
                d: 9,
            };

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });

    it('of test', () => {
        testScheduler.run(({expectObservable}) => {
            const stream$ = of(0,1,2,3);
            const finalStream$ = stream$.pipe(
                map(value => value * 3),
            );

            const expectedMarbles = '(abcd|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 3,
                c: 6,
                d: 9,
            };

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });

    it('hot test', () => {
        testScheduler.run(({expectObservable, hot}) => {
            const stream$ = hot(
                '-a--b---c------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                }
            );
            const finalStream$ = stream$.pipe(
                map(value => value * 3),
            );

            const suscriptionMarbles = '---^---------!';

            const expectedMarbles = '   ----b---c----';
            const expectedMarblesValueMap = {
                b: 18,
                c: 30,
                d: 300,
            };

            expectObservable(finalStream$, suscriptionMarbles).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });
});