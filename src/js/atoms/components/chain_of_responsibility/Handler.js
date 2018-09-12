import Module from '../module/Module';

export default class Handler extends Module {
  set setSuccessor(value) {
    this.successor = value;
  }

  // HACK: 本来は実装する予定の abstract method なため
  /* eslint-disable-next-line class-methods-use-this, no-unused-vars */
  resolve(event) {
    // boolean: can solve this class
  }

  // HACK: 本来は実装する予定の abstract method なため
  /* eslint-disable-next-line class-methods-use-this, no-unused-vars */
  done(event) {
    // solve this method using event
  }

  // HACK: 本来は実装する予定の abstract method なため
  /* eslint-disable-next-line class-methods-use-this, no-unused-vars */
  fail(event) {
    // alert exception or other because the chain can not solve event
  }

  requestHandle(event) {
    if (this.resolve(event)) {
      this.done(event);
    } else if (this.successor) {
      this.successor.request_handle(event);
    } else {
      this.fail(event);
    }
  }
}
