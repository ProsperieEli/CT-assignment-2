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

  it('get all', () => {
    const saving = new SimpleDb(rootDir);
    const file1 = { hello: 'world' };
    const file2 = { goodbye: 'world' };

    return saving
      .save(file1)
      .then(() => saving.save(file2))
      .then(() => saving.getAll())
      .then((files) => expect(files).toEqual([file1, file2]));
  });
});
