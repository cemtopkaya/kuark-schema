module.exports = {
  "id": "/node/schema/ortak/ihale_db",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "İhale bilgisi",
  "type": "object",
  "title": "IhaleDB",
  "definitions": {
    "DosyaEki": {
      "$ref": "/node/schema/ortak/dosyaEki"
    }
  },
  "required": [
    "Id"
  ],
  "additionalProperties": false,
  /**
   * @class IhaleDB
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "IhaleNo": {
      "type": "string"
    },
    "Orjinal_Id": {
      "description": "Genel ihale değiştirildiğinde eski ihale id si",
      "type": "integer"
    },
    "Konusu": {
      "type": "string"
    },
    "IhaleTarihi": {
      "type": "integer"
    },
    "IsTerminTarihi": {
      "type": "integer"
    },
    "SozlesmeTarihi": {
      "type": "integer"
    },
    "DuzenlemeTarihi": {
      "type": "integer"
    },
    /** @type {string} */
    "IhaleUsul": {
      "type": "string"
    },
    /** @type {string} */
    "YapilacagiAdres": {
      "type": "string"
    },
    /** @type {string} */
    "IlgiliKisi": {
      "type": "string"
    },
    /** @type {string} */
    "IhaleNotu": {
      "type": "string"
    },
    /** @type {string} */
    "IlAdi": {
      "type": "string"
    },
    /** @type {string} */
    "BolgeAdi": {
      "type": "string"
    },
    /** @type {string} */
    "SartnameAdres": {
      "type": "string"
    },
    "SistemeEklenmeTarihi": {
      "type": "integer"
    },
    "Kurum_Id": {
      "type": "integer"
    },
    "DosyaEkleri": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/DosyaEki"
      },
      "default": []
    }
  }
};