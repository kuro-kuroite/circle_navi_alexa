import ConcreteAbstractComponent from './ConcreteAbstractComponent';
import { aggregation } from '../utils/utils';
import Decorator from './Decorator';

export default class ConcreteComponentDecorator extends aggregation(
  Decorator,
  ConcreteAbstractComponent
) {
  // operation() {
  //   // pre hook
  //   this.component.operation(); // decorate original operation
  //   // post hook
  // }
}
