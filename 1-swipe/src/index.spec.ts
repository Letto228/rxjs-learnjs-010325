import { TestScheduler } from "rxjs/testing";
import { swipe$ } from "./swipe";

function createSubEvent(clientX: number): MouseEvent {
    return new MouseEvent('mousemove', {clientX});
}

describe('Tests block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('swipe test', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const mousedown$ = cold(
                '-a-----------b---------------|',
                {
                    a: createSubEvent(2),
                    b: createSubEvent(30),
                },
            );
            const mouseup$ = cold(
                '--------a------------------b-|',
                {
                    a: createSubEvent(200),
                    b: createSubEvent(20),
                },
            );

            const swipeStream$ = swipe$(
                mousedown$,
                mouseup$,
            );

            const expectedMarbles = '--------a--------------------|';
            const expectedMarblesValueMap = {
                a: -198,
            };

            expectObservable(swipeStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });
});
