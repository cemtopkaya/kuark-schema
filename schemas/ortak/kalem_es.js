module.exports = {
  "id": "/node/schema/ortak/kalem_es",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "KalemES",
  "description": "İhalenin kalemi",
  "type": "object",
  "definitions": {
    "OnayDurumu": {"$ref": "/node/schema/ortak/onayDurumu"},
    "TeklifDB": {"$ref": "/node/schema/ortak/teklif_db"}
  },
  "required": ["Id"],
  "additionalProperties": false,
  /**
   * @class KalemES
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
    "BransKodu": {"type": "string"},
    "Miktar": {"type": "string"},
    "Birim": {"type": "string"},
    "OnayDurumu": {"$ref": "#/definitions/OnayDurumu"},
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