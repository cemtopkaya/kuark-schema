module.exports = {
  "id": "/node/schema/kullanici/kullaniciBrowser",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Session içinde kullanılacak kullanıcı",
  "type": "object",
  "title": "KullaniciBrowser",
  "definitions": {
    "LoginProviders": {
      "$ref": "/node/schema/providers/login/index"
    }
  },
  "required": [
    "Id"
  ],
  /**
   * @class KullaniciBrowser
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "OturumDurumu": {
      "type": "integer",
      "default": 1
    },
    "Avatar": {
      "type": "string"
    },
    "AdiSoyadi": {
      "type": "string"
    },
    "Cinsiyet": {
      "type": "string"
    },
    "EPosta": {
      "type": "string",
      "pattern": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$"
    },
    "Providers": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/LoginProviders"
      }
    }
  },
  "additionalProperties": false
};