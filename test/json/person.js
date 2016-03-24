var a= require('./def_address').def_address;
exports.person = {
  "type": "object","title": "object",

  "properties": {
    "kendi":{ "type":"string","default":"ozelliği"},
    "billing_address": { "$ref": "#/definitions/address" },
    "shipping_address": { "$ref": "#/definitions/address" }
  }
};