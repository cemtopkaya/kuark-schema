module.exports = {
  "id": "/node/schema/ortak/kurum_es",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Tüm alanlarda geçerli temel kurum bilgisi. İhale açan kurum bilgisi, ya da diğerleri için geçerli olacaktır.",
  "type": "object",
  "title": "KurumES",
  "definitions": {
    "Sehir": {
      "$ref": "/node/schema/ortak/sehir"
    },
    "Bolge": {
      "$ref": "/node/schema/ortak/bolge"
    }
  },
  "required": [
    "Id",
    "Adi"
  ],
  "additionalProperties": false,
  /**
   * @class KurumES
   */
  "properties": {
    /** @type {integer} */
    "Id": {
      "type": "integer",
      "default": 0
    },
    /** @type {integer} */
    "IhaleDunyasiKurumId": {
      "type": "integer",
      "default": 0
    },
    /** @type {string} */
    "Adi": {
      "type": "string",
      "default": ""
    },
    /** @type {string} */
    "TicariUnvan": {
      "type": "string"
    },
    /** @type {string} */
    "Statu": {
      "type": "string"
    },
    /** @type {string} */
    "VD": {
      "type": "string"
    },
    /** @type {string} */
    "VN": {
      "type": "string"
    },
    /** @type {string} */
    "EPosta": {
      "type": "string"
    },
    /** @type {string} */
    "Web": {
      "type": "string"
    },
    /** @type {string} */
    "Tel1": {
      "type": "string"
    },
    /** @type {string} */
    "Tel2": {
      "type": "string"
    },
    /** @type {string} */
    "Faks": {
      "type": "string"
    },
    /** @type {string} */
    "AcikAdres": {
      "type": "string"
    },
    /** @type {string} */
    "UlkeAdi": {
      "type": "string"
    },
    /** @type {integer} */
    "Sehir_Id": {
      "type": "integer"
    },
    /** @type {integer} */
    "Bolge_Id": {
      "type": "integer"
    },
    /** @type {Sehir} */
    "Sehir": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/Sehir"
      }
    },
    /** @type {Bolge} */
    "Bolge": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/Bolge"
      }
    },
    /** @type {integer} */
    "Kurumdur": {
      "type": "integer",
      "default": 0
    }
  }
};