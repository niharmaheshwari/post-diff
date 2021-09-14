/**
 * Call wrappers for newman.
 * UNI : nm3223
 * @author Nihar Maheshwari 
 */

const newman = require('newman');

const runCollection = function runCollection() {
  console.log('Stub for calling newman ..');
  newman.run({
    collection: '/path/to/collection.json',
    reporters: ['htmlextra', 'csv']
}, process.exit);
};

exports.runCollection = runCollection;