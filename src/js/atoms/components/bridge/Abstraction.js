import Module from '../module/Module';

export default class Abstraction extends Module {
  constructor(impl) {
    // HACK: Expected to call 'super()'                   constructor-super
    super();
    this.impl = impl;
  }

  // operation(...args) {
  //   this.impl.operationImpl(...args);
  // }
}
