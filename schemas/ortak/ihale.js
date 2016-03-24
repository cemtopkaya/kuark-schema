module.exports = {
  "id": "/node/schema/ortak/ihale",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "İhale bilgisi",
  "type": "object",
  "title": "Ihale",
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
   * @class Ihale
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    /** @type {IhaleProviders} */
    "IhaleProviders": {
      "$ref": "#/definitions/IhaleProviders"
    },
    /** @type {string} */
    "IhaleNo": {
      "type": "string"
    },
    /** @type {integer} */
    "Orjinal_Id": {
      "type": "integer"
    },
    /** @type {string} */
    "Konusu": {
      "type": "string"
    },
    /** @type {integer} */
    "IhaleTarihi": {
      "type": "integer"
    },
    /** @type {integer} */
    "IsTerminTarihi": {
      "type": "integer"
    },
    /** @type {integer} */
    "SozlesmeTarihi": {
      "type": "integer"
    },
    /** @type {integer} */
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
    /** @type {integer} */
    "SistemeEklenmeTarihi": {
      "type": "integer"
    },
    /** @type {integer} */
    "Kurum_Id": {
      "type": "integer"
    },
    /** @type {Kurum} */
    "Kurum": {
      "$ref": "#/definitions/KurumDB"
    },
    /** @type {KalemDB[]} */
    "Kalemler": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/KalemDB"
      },
      "default": []
    },
    /** @type {DosyaEki[]} */
    "DosyaEkleri": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/DosyaEki"
      },
      "default": []
    },
    /** @type {integer} */
    "Takip": {
      "type": "integer",
      "description": "İhalenin takip edilip edilmeme durumu",
      "default": 0
    }
  }
};