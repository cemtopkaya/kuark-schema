module.exports = {
  "id": "/node/schema/kullanici/kullanici_db",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Session içinde kullanılacak kullanıcı",
  "type": "object",
  "title": "KullaniciDB",
  "definitions": {
    "LoginProviders": {
      "$ref": "/node/schema/providers/login/index"
    }
  },
  "required": [
    "Id"
  ],
  /**
   * @class KullaniciDB
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "Avatar": {
      "type": "string"
    },
    "AdiSoyadi": {
      "type": "string"
    },
    "EPosta": {
      "type": "string",
      "format": "email"
    },
    "Cinsiyet": {
      "type": "string"
    },
    "Gorevi": {
      "type": "string"
    },
    "FBAdresi": {
      "type": "string"
    },
    "TWAdi": {
      "type": "string"
    },
    "Tel1": {
      "type": "string"
    },
    "Tel2": {
      "type": "string"
    },
    "GSM": {
      "type": "string"
    },
    "Sifre": {
      "type": "string"
    },
    /** @type {LoginProviders} */
    "Providers": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/LoginProviders"
      },
      "default": {}
    }
  },
  "additionalProperties": false
};