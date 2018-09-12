import Mediator from './Mediator';
import ConcreteColleague1 from './ConcreteColleague1';
import ConcreteColleague2 from './ConcreteColleague2';

export default class ConcreteMediator extends Mediator {
  constructor() {
    super();
    this.createColleagues();
  }

  createColleagues() {
    this.concreteColleague1 = new ConcreteColleague1();
    this.concreteColleague2 = new ConcreteColleague2();

    this.concreteColleague1.setMediator(this);
    this.concreteColleague2.setMediator(this);
  }

  // NOTE: この中で，条件に合わせて，this.concreteColleague1.controlColleague(bool)を呼ぶ
  //       Obserber パターンの notify_update に近い
  // HACK: Expected 'this' to be used by class method 'createColleagues'  class-methods-use-this
  /* eslint-disable-next-line class-methods-use-this */
  colleagueChanged(/* status */) {
    // if (status === 1) {
    //   this.concreteColleague1.controlColleague(false);
    //   this.concreteColleague2.controlColleague(true);
    // } else if (status === 2) {
    //   this.concreteColleague1.controlColleague(false);
    //   this.concreteColleague2.controlColleague(false);
    // } else if (status === 3) {
    //   this.concreteColleague1.controlColleague(true);
    //   this.concreteColleague2.controlColleague(true);
    // }
  }
}
