import readline from 'readline';

export default class ReadlineStrategy {
  constructor(inputStrategy, outputStrategy) {
    this.rl = readline.createInterface({
      input: inputStrategy.strategy(),
      output: outputStrategy.strategy()
    });
  }

  strategy(callback) {
    // TODO: 一般化
    this.rl.question('Enter the code from that page here: ', code => {
      console.log('qqqqqq');
      console.log(code);
      this.rl.close();
      callback(code);
    });
  }
}
