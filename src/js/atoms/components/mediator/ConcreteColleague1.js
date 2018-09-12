import Colleague from './Colleague';

export default class ConcreteColleague1 extends Colleague {
  // NOTE: bool の値に従って，on/off を切り替える
  //       Obserber パターンの update に近い
  // HACK: Expected 'this' to be used by class method 'createColleagues'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  controlColleague() {}
}
