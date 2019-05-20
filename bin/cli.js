#! /usr/bin/env node

var ULID = require('../dist/index.js')
process.stdout.write(ULID.ulid())
