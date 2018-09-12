import Adaptee from './Adaptee';
import AdapteeTargetAdapter from './AdapteeTargetAdapter';

export default class Client {
  constructor(target) {
    this.target = target;
  }

  do() {
    this.target.request();
  }
}

if (require.main === module) {
  console.log('client adapter');
  const client = new Client(new AdapteeTargetAdapter(new Adaptee()));
  console.log(client.do());
}
