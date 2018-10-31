import '@babel/polyfill';
// import JSONFileStrategy from './atoms/components/strategy/JSONFileStrategy';

// (async () => {
//   let json = await new JSONFileStrategy('client_secret.json').getStrategy();
//   console.log('test');
//   console.log(json);
// })();

// class B {
//   constructor(b) {
//     this.b = b;
//   }
// }

// function sample() {
//   console.log('ssss');
//   return 'ssss';
// }
// class C extends B {
//   constructor(b, c) {
//     const s = sample();
//     super(b);
//     this.c = c;
//     console.log('C');
//     console.log(this.c);
//     console.log(this.b);
//   }
// }

// const c = new C('b', 'c');

// console.log(c.b);

import oauth_authorize from './atoms/components/googlecalendar/oauth_client';

import authorize, {
  listEvents
} from './atoms/components/googlecalendar/googlecalendar';

oauth_authorize();
