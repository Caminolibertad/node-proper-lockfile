'use strict';

const fs = require('fs');
const lockfile = require('../../');

const file = `${__dirname}/../tmp`;

fs.writeFileSync(file, '');

lockfile.lock(file, (err) => {
    if (err) {
        process.exit(25);
    }

    throw new Error('crash');
});
