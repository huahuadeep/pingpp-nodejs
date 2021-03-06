'use strict';

var PingppResource = require('../PingppResource');
var pingppMethod = PingppResource.method;

module.exports = PingppResource.extend({

  path: 'royalties',

  includeBasic: [
    'list', 'retrieve'
  ],

  batchUpdate: pingppMethod({
    method: 'PUT'
  }),

});
