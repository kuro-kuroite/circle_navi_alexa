import Creator from './Creator';

export default class ConcreteProductCreator extends Creator {
  // HACK: Expected 'this' to be used by class method 'factoryMethod'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  // factoryMethod() {}

  // HACK: Expected 'this' to be used by class method 'factoryMethod'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  operation() {
    // pre program
    // HACK: the method is implement in sub class
    /* eslint-disable-next-line no-unused-vars, no-undef */
    const product = factoryMethod(); // template for sub class
    // post program
  }
}
