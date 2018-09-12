import Module from '../module/Module';

export default class Director extends Module {
  constructor(builder) {
    // HACK:  Expected to call 'super()'              constructor-super
    super();
    this.builder = builder;
  }

  construct() {
    this.builder.build_part1();
    this.builder.build_part2();
    return this.builder;
  }
}
