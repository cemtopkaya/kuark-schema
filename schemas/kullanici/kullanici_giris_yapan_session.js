module.exports = {
  "id": "/node/schema/kullanici/kullaniciSession",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Session içinde kullanılacak kullanıcı",
  "type": "object",
  "title": "KullaniciSession",
  "definitions": {
    "LoginProviders": {
      "$ref": "/node/schema/providers/login/index"
    },
    "Tahta": {
      "$ref": "/node/schema/tahta/index"
    }
  },
  "required": [
    "Id"
  ],
  /**
   * @class KullaniciSession
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
    "Tel1": {
      "type": "string"
    },
    "Tel2": {
      "type": "string"
    },
    "GSM": {
      "type": "string"
    },
    "GC_Token": {
      "type": "string",
      "description":"GOOGLE CALENDAR ACCESS TOKEN"
    },
    "EPosta": {
      "type": "string",
      "pattern": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$"
    },
    "Sifre": {
      "type": "string",
      "minLength": 1,
      "maxLength": 10
    },
    "Providers": {
      "$ref": "#/definitions/LoginProviders"
    },
    "Tahtalari": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Tahta"
      }
    }
  },
  "additionalProperties": false
}