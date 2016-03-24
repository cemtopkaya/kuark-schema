module.exports = {
  "id": "/node/schema/ortak/teklif_db",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "TeklifDB",
  "description": "Kalemin teklifi",
  "type": "object",
  "definitions": {
    "UrunDB": {
      "$ref": "/node/schema/ortak/urun_db"
    }
  },
  "required": [
    "Id"
  ],
  "additionalProperties": false,
  /**
   * @class TeklifDB
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    /** @type {string} */
    "Aciklama": {
      "type": "string"
    },
    /** @type {integer} */
    "TeklifDurumu_Id": {
      "type": "integer"
    },
    /** @type {integer} */
    "Kurum_Id": {
      "type": "integer"
    },
    /** @type {integer} */
    "Kalem_Id": {
      "description":"teklifin verildiği kalem",
      "type": "integer"
    },
    /** @type {integer} */
    "Ihale_Id": {
      "description":"teklifin verildiği ihale",
      "type": "integer"
    },
    /** @type {integer} */
    "ParaBirim_Id": {
      "type": "integer"
     /* "enum": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]*/
    },
    /** @type {number} */
    "Fiyat": {
      "type": "number"
    },
    /** @type {Array} */
    "Urun_Idler": {
      "type": "array",
      "items": { "type": "integer" },
      "default": []
    }
  }
};