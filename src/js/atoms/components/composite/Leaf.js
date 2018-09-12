import ConcreteComponent from './ConcreteComponent';

export default class Leaf extends ConcreteComponent {
  // operation() {}
  addCsomponent(component) {
    return new Error(`${this}: Leaf is not called. parmas ${component}`);
  }

  removeComponent(component) {
    return new Error(`${this}: Leaf is not called. params ${component}`);
  }
}
