import Module from '../module/Module';
import Singleton from '../singleton/Singleton';
import { aggregation } from '../utils/utils';

export default class AbstractFactory extends aggregation(Module, Singleton) {}
