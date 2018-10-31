import fs from 'fs';

export default class JSONFileStrategy {
  constructor(jsonFilePath) {
    this.filePath = jsonFilePath;
  }

  // getStrategySync() {
  // return await new Promise((resolve, reject) => {
  //   fs.readFile(this.filePath, (err, content) => {
  //     if (err) {
  //       reject(`Error: can not loading ${this.filePath} json file, ${err}`);
  //     }
  //     resolve(JSON.parse(content));
  //   });
  // });

  // return JSON.parse(fs.readFileSync(this.filePath));
  // }

  getStrategy(callback) {
    fs.readFile(this.filePath, (err, content) => {
      if (err) {
        console.error(
          `Error: can not loading ${this.filePath} json file, ${err}`
        );
        callback(err, null);
      }
      try {
        const json = JSON.parse(content);
        callback(null, json);
      } catch (e) {
        console.log('catch syntax err');
        callback(e, null);
      }
    });
  }

  setStrategy(obj) {
    fs.writeFile(this.filePath, JSON.stringify(obj), err => {
      if (err) {
        console.error(err);
      }
    });
  }
}
