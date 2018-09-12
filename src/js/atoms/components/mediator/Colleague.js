import Module from '../module/Module';

export default class Colleague extends Module {
  // NOTE: mediator 仲介者の登録
  //       Obserber パターンの add_observer に近い
  setMediator(mediator) {
    this.mediator = mediator;
  }

  // NOTE: bool の値に従って，on/off を切り替える
  //       Obserber パターンの update に近い
  // HACK: Expected 'this' to be used by class method 'createColleagues'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  controlColleague() {}
}
