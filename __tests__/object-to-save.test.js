const SimpleDb = require('../lib/SimpleDb.js');
const { rm, mkdir } = require('fs/promises');
const { rmdir } = require('fs');

describe('test', () => {
  const rootDir = './__tests__/store';
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      mkdir(rootDir, { recursive: true });
    });
  });

  it('should save to an object id', () => {
    const saving = new SimpleDb(rootDir);
    const file = { hello: 'world' };

    return saving
      .save(file)
      .then(() => saving.getById(file.id))
      .then((actualSecret) => expect(actualSecret).toEqual(file));
  });

});
