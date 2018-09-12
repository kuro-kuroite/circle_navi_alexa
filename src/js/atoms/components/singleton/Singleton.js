// ref: http://www.adam-bien.com/roller/abien/entry/singleton_pattern_in_es6_and
// TODO: マルチスレッドでは，正しく動作しない場合がある

import Module from '../module/Module';

export default class Singleton extends Module {
  // TODO: Parsing error: Unexpected token ;
  // static instance;
  // constructor() {
  //   if (instance) {
  //     return instance;
  //   }
  //   this.instance = this;
  // }
}
