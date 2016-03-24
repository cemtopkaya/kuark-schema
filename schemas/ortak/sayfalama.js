module.exports = {
  "id": "/node/schema/ortak/sayfalama",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Sayfa bilgisini ve sayfada ka� sat�r olaca��n� tutar. Elde etmek istedi�imiz: { Sayfa: 2, SatirSayisi: 10 }",
  "title": "Sayfalama",
  "type": "object",
  "definitions": {},
  "required": [
    "Sayfa",
    "SatirSayisi"
  ],
  "additionalProperties": false,
  /**
   * @class Sayfalama
   */
  "properties": {
    /** @type {integer} */
    "Sayfa": {
      "type": "integer",
      "default": 0
    },
    /** @type {integer} */
    "SatirSayisi": {
      "type": "integer",
      "default": 10
    }
  }
};