/**!
 * end-or-error - test/index.test.js
 *
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var assert = require('assert');
var fs = require('fs');
var eoe = require('../');

describe('end-or-error.test.js', function () {
  it('should end emitted', function (done) {
    var stream = fs.createReadStream(__filename);
    stream.resume();
    eoe(stream, done);
  });

  it('should error emitted', function (done) {
    eoe(fs.createReadStream(__filename + '-not-exists'), function (err) {
      assert(err);
      done();
    });
  });
});
