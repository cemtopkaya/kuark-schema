module.exports = {
  "id": "/node/schema/kullanici/uye",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Tahtanın üye bilgieri",
  "type": "object",
  "title": "Uye",
  "definitions": {
    "LoginProviders": {
      "$ref": "/node/schema/providers/login/index"
    }
  },
  "required": [
    "Id"
  ],
  /**
   * @class Uye
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    /** @type {string} */
    "Avatar": {
      "type": "string"
    },
    /** @type {string} */
    "Cinsiyet": {
      "type": "string"
    },
    /** @type {string} */
    "AdiSoyadi": {
      "type": "string"
    },
    /** @type {string} */
    "Gorevi": {
      "type": "string"
    },
    /** @type {string} */
    "EPosta": {
      "type": "string",
      "format": "email"
    },
    /** @type {integer[]} */
    "Roller": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "default": []
    },
    /** @type {LoginProviders} */
    "Providers": {
      "$ref": "#/definitions/LoginProviders",
      "default": {}
    }
  },
  "additionalProperties": false
};