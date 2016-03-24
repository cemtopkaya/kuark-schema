module.exports = {
  "id": "/node/schema/ortak/siralama",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Siralama",
  "description": "Verileri sıralamak için kullanacağımız taşıyıcı. { Alan:'tarih', Asc:true }",
  "type": "object",
  "definitions": {},
  "required": [
    "Alan",
    "Asc"
  ],
  "additionalProperties": false,
  /**
   * @class Siralama
   */
  "properties": {
    /** @type {string} */
    "Alan": {
      "type": "string"
    },
    /** @type {boolean} */
    "Asc": {
      "type": "boolean"
    }
  }
};