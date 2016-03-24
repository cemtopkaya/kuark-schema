module.exports = {
  "id": "/node/schema/kullanici/kullanici_es",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Session içinde kullanılacak kullanıcı",
  "type": "object",
  "title": "KullaniciES",
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
   * @class KullaniciES
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
    "Gorevi": {
      "type": "string"
    },
    "EPosta": {
      "type": "string",
      "format": "email"
    },
    "Sifre": {
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
    "FBAdresi": {
      "type": "string"
    },
    "TWAdi": {
      "type": "string"
    },
    "Providers": {
      "$ref": "#/definitions/LoginProviders",
      "default": {}
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