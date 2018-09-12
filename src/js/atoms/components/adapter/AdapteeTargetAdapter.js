import Target from './Target';
import Adaptee from './Adaptee';
import Module from '../module/Module';
import { aggregation } from '../utils/utils';

export default class AdapteeTargetAdapter extends aggregation(Module, Target) {
  // constructor(...args) {
  //   this.adaptee = new Adaptee(...args)
  // }
  // request(...args) {
  //   adaptee.specific_request(...args)
  // }
}

// HACK: 'Adaptee' is defined but never used  no-unused-vars
export const fakeAdaptee = new Adaptee();
