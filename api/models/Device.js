/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'device',
  attributes: {
  name: {
    type: 'string'
  },
  uuid: {
    type: 'string'
  },
  cbj_tag: {
    type: 'string'
  },
  access: {
    type: 'integer'
  }
  }
}


