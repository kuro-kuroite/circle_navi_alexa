import Module from '../module/Module';

export default class Command extends Module {
  constructor(reciever) {
    // HACK:  Expected to call 'super()'              constructor-super
    super();
    this.reciever = reciever;
  }

  execute() {
    throw new Error(`${this}: You have to implement the method doSomething!`);
  }

  unexecute() {
    throw new Error(`${this}: You have to implement the method doSomething!`);
  }
}
