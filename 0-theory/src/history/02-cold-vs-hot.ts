// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { error } from 'jquery';

// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessages$ = new Observable<MessageEvent>(subscriber => {
//     console.log('Created');

//     const messageListener = (message: MessageEvent) => {
//         subscriber.next(message);
//     }
//     const closeListener = () => {
//         subscriber.complete();
//     }
//     const errorListener = (error: Event) => {
//         subscriber.error(error);
//     }

//     ws.addEventListener('message', messageListener);
//     ws.addEventListener('close', closeListener);
//     ws.addEventListener('error', errorListener);

//     return () => {
//         ws.removeEventListener('message', messageListener);
//         ws.removeEventListener('close', closeListener);
//         ws.removeEventListener('error', errorListener);
//     }
// });

// wsMessages$.subscribe(({data}) => {
//     terminalLog(`S1: ${data}`)
// });

// setTimeout(() => {
//     wsMessages$.subscribe(({data}) => {
//         terminalLog(`S2: ${data}`)
//     });
// }, 5000);
