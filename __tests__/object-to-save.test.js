const SimpleDb = require('../lib/SimpleDb.js');
const { rm, mkdir } = require('fs/promises');
const { rmdir } = require('fs');

describe('test', () => {
  const rootDir = './__tests__';
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      rmdir(rootDir, { recursive: true });
    });
  });

  it('should save to an object id', () => {
    const saving = new SimpleDb(rootDir);
    const file = 'saved';

    return saving
      .save(file)
      .then(() => saving.tell())
      .then((actualSecret) => expect(actualSecret).toEqual(file));
  });

});
