import Module from '../module/Module';

export default class Decorator extends Module {
  constructor(component) {
    // HACK: Expected to call 'super()'              constructor-super
    super();
    this.component = component;
  }
}
