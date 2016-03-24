module.exports ={
    "id": "/node/schema/ortak/haber",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Haber",
  "description": "Uyarı bilgisi.",
  "type": "object",
  "required": [
    "Id",
    "Tipi"
  ],
  "definitions": {},
  "additionalProperties": false,
  /**
   * @class Haber
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "Tipi": {
      "type": "string",
      "default": ""
    },
    "TabloDeger": {
      "type": "string"
    },
    "Sonuc": {
      "type": "object"
    },
    "Icerik": {
      "type": "string"
    }
  }
}