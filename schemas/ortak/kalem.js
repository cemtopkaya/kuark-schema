module.exports = {
  "id": "/node/schema/ortak/kalem",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "İhalenin kalemi",
  "type": "object",
  "title": "Kalem",
  "definitions": {
    "OnayDurumu": {"$ref": "/node/schema/ortak/onayDurumu"},
    "TeklifDB": {"$ref": "/node/schema/ortak/teklif_db"},
    "IhaleDB": {"$ref": "/node/schema/ortak/ihale_db"}
  },
  "required": ["Id"],
  "additionalProperties": false,
  /**
   * @class Kalem
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    "SiraNo": {"type": "string"},
    /** @type {string} */
    "Aciklama": {"type": "string"},
    /** @type {string} */
    "BransKodu": {"type": "string"},
    /** @type {string} */
    "Miktar": {"type": "string"},
    /** @type {string} */
    "Birim": {"type": "string"},
    /** @type {OnayDurumu} */
    "OnayDurumu": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/OnayDurumu"
      }
    },
    /** @type {TeklifDB[]} */
    "Teklifler": {
      "type": "array",
      "items":  {"$ref": "#/definitions/TeklifDB"},
      "default": []
    },
    /** @type {integer} */
    "Takip": {
      "type": "integer",
      "description": "Kalemin takip edilip edilmeme durumu",
      "default": 0
    }
  }
};