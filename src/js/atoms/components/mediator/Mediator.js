import Module from '../module/Module';

export default class Mediator extends Module {
  // HACK: Expected 'this' to be used by class method 'createColleagues'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  createColleagues() {}

  // HACK: Expected 'this' to be used by class method 'createColleagues'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  colleagueChanged() {}
}
