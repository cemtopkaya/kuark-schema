module.exports = {
  "id": "/node/schema/ortak/kurum",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Tüm alanlarda geçerli temel kurum bilgisi. İhale açan kurum bilgisi, ya da diğerleri için geçerli olacaktır.",
  "type": "object",
  "title": "Kurum",
  "definitions": {},
  "required": [
    "Id",
    "Adi"
  ],
  "additionalProperties": false,
  /**
   * @class Kurum
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "IhaleDunyasiKurumId": {
      "type": "integer",
      "default": 0
    },
    "Adi": {
      "type": "string",
      "default": ""
    },
    "TicariUnvan": {
      "type": "string"
    },
    "Statu": {
      "type": "string"
    },
    "VD": {
      "type": "string"
    },
    "VN": {
      "type": "string"
    },
    "EPosta": {
      "type": "string"
    },
    "Web": {
      "type": "string"
    },
    "Tel1": {
      "type": "string"
    },
    "Tel2": {
      "type": "string"
    },
    "Faks": {
      "type": "string"
    },
    "AcikAdres": {
      "type": "string"
    },
    "UlkeAdi": {
      "type": "string"
    },
    "IlAdi": {
      "type": "string"
    },
    "BolgeAdi": {
      "type": "string"
    },
    "Kurumdur": {
      "type": "integer",
      "default": 0
    }
  }
}