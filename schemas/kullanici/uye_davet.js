module.exports = {
  "id": "/node/schema/kullanici/uyeDavet",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Tahataya yeni �ye davet etti�imizde",
  "title": "UyeDavet",
  "type": "object",
  "definitions": {},
  "required": [
    "UID",
    "Tahta_Id",
    "EPosta",
    "Roller"
  ],
  "additionalProperties": false,
  /**
   * @class UyeDavet
   */
  "properties": {
    "UID": {
      "type": "string",
      "default": ""
    },
    "Tahta_Id": {
      "type": "integer",
      "minimum": 1
    },
    "EPosta": {
      "type": "string"
    },
    "Roller": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "minItems": 1,
      "uniqueItems": true
    }
  },
  "_ornek": {
    "UID": "",
    "Tahta_Id": "2",
    "EPosta": "cem@cem.net",
    "Roller": [
      1,
      2
    ]
  }
};