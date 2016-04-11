module.exports = {
  "id": "/node/schema/ortak/ihale_es",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "IhaleES",
  "description": "İhale bilgisi",
  "type": "object",
  "definitions": {
    "IhaleProviders": {
      "$ref": "/node/schema/providers/ihale/index"
    },
    "KurumDB": {
      "$ref": "/node/schema/ortak/kurum_db"
    },
    "KalemDB": {
      "$ref": "/node/schema/ortak/kalem_db"
    },
    "DosyaEki": {
      "$ref": "/node/schema/ortak/dosyaEki"
    }
  },
  "required": [
    "Id"
  ],
  "additionalProperties": false,
  /**
   * @class IhaleES
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "IhaleProviders": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/IhaleProviders"
      }
    },
    "IhaleNo": {
      "type": "string"
    },
    "Orjinal_Id": {
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
    "Kurum": {
      "$ref": "#/definitions/KurumDB"
    },
    "Kalemler": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/KalemDB"
      },
      "default": []
    },
    "DosyaEkleri": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/DosyaEki"
      },
      "default": []
    }
  }
}