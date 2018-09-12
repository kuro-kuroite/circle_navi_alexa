import ConcreteComponent from './ConcreteComponent';

export default class Composite extends ConcreteComponent {
  constructor() {
    // HACK: Expected to call 'super()'              constructor-super
    super();
    this.components = [];
  }

  // operation() {
  //   this.components.forEach(component => {
  //     component.operation();
  //   });
  // }

  addCsomponent(component) {
    this.components.push(component);
  }

  removeComponent(component) {
    this.components.filter(element => element !== component);
  }
}
