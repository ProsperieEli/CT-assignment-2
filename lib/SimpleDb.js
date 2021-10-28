
const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDb {
  constructor(rootDir) {
    const creation = `${shortid.generate()}.txt`;
    this.secretfile = path.join(rootDir, creation);
  }

  objectToSave(id) {

    return writeFile(this.secretfile, JSON.stringify(this.objectToSave(id)));

  }

  getById(id) {
    return readFile(this.secretfile, 'utf8').catch((error) => {
      if(error === JSON.parse(this.objectToSave(id))){
        return null;
      }
      throw error;
    });
  }
}

module.exports =  SimpleDb;
