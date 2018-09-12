import Creator from './Creator';
import ConcreteProduct from './ConcreteProduct';

export default class ConcreteProductCreator extends Creator {
  // HACK: Expected 'this' to be used by class method 'factoryMethod'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  factoryMethod() {
    return new ConcreteProduct();
  }
}
