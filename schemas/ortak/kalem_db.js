module.exports = {
  "id": "/node/schema/ortak/kalem_db",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "İhalenin kalemi",
  "type": "object",
  "title": "KalemDB",
  "definitions": {  },
  "required": [
    "Id"
  ],
  "additionalProperties": false,
  /**
   * @class KalemDB
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    /** @type {string} */
    "SiraNo": {
      "type": "string"
    },
    /** @type {string} */
    "Aciklama": {
      "type": "string"
    },
    /** @type {string} */
    "BransKodu": {
      "type": "string"
    },
    /** @type {string} */
    "Miktar": {
      "type": "string"
    },
    /** @type {string} */
    "Birim": {
      "type": "string"
    },
    /** @type {integer} */
    "Takip": {
      "type": "integer",
      "description": "Kalemin takip edilip edilmeme durumu",
      "default": 0
    }
  }
};