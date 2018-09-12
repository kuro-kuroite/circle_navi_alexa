import Module from '../module/Module';
import Builder from './Builder';
import Product from './Product';
import { aggregation } from '../utils/utils';

export default class ConcreteBuilder extends aggregation(Module, Builder) {
  constructor(...args) {
    super(new Product(...args));
  }
}
