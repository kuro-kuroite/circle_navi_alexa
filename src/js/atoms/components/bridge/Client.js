import ConcreteImplementor from './implements/ConcreteImplementor';
import RefinedAbstraction from './functions/RefinedAbstraction';

export default class Client {
  constructor(impl) {
    this.abstraction = new RefinedAbstraction(impl);
  }

  do(...args) {
    this.abstraction.refinedOperation(...args);
  }
}

if (require.main === module) {
  console.log('client bridge');
  const client = new Client(new ConcreteImplementor());
  console.log(client.do());
}
