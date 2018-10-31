export default class StdinStrategy {
  strategy() {
    return process.stdin;
  }
}
