const SimpleDb = require('../lib/SimpleDb');
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
        
  });

});
