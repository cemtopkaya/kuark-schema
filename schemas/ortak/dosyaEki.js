module.exports = {
  "id": "/node/schema/ortak/dosyaEki",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "İhalenin dosya eki",
  "type": "object",
  "title": "DosyaEki",
  "required": [
    "Id",
    "Href"
  ],
  "additionalProperties": false,
  /**
   * @class DosyaEki
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "Href": {
      "type": "string"
    },
    "Aciklama": {
      "type": "string"
    },
    "DosyaYolu": {
      "type": "string"
    }
  }
}