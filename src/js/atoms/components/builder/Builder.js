import Module from '../module/Module';
// import Part from './Part';
// import Part1 from './Part1';
// import Part2 from './Part2';
// import Part3 from './Part3';

export default class Builder extends Module {
  constructor(product) {
    // HACK:  Expected to call 'super()'              constructor-super
    super();
    this.product = product;
  }

  // build_part(...args) {
  //   this.product.part1 = new Part(...args);
  //   return this.product;
  // }
  // build_part1(...args) {
  //   this.product.part1 = new Part1(...args);
  //   return this.product;
  // }
  // build_part2(...args) {
  //   this.product.part1 = new Part2(...args);
  //   return this.product;
  // }
  // build_part3(...args) {
  //   this.product.part1 = new Part3(...args);
  //   return this.product;
  // }

  result() {
    return this.product;
  }
}
