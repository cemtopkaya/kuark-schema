module.exports = {
  "id": "/node/schema/providers/login/providerTwitter",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "TW",
  "type": "object",
  "required": [
    "id",
    "username"
  ],
  "default":{"id":0, "username":""},
  /**
   * @class TW
   */
  "properties": {
    "id": {
      "type": "integer",
      "default": 0
    },
    "token": {
      "type": "string"
    },
    "tokenSecret": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "default": ""
    },
    "displayName": {
      "type": "string",
      "default": ""
    },
    "photo": {
      "type": "string"
    },
    "provider": {
      "type": "string"
    },
    "raw": {
      "type": "string"
    }
  }
}