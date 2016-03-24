module.exports = {
  "id": "/node/schema/ortak/paylas_ids",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Tahtalar aras� id payla��m�(�r�n veya kurum i�in)",
  "title": "PaylasIds",
  "type": "object",
  "definitions": {},
  "required": [
    "From",
    "To",
    "Ids"
  ],
  "additionalProperties": false,
  /**
   * @class PaylasIds
   */
  "properties": {
    "From": {
      "type": "integer",
      "description": "Payla�an tahta id",
      "default": 0
    },
    "To": {
      "description": "Payla��lan tahta id ler",
      "type": "array",
      "item": {
        "type": "integer"
      },
      "default": []
    },
    "Ids": {
      "description": "Payla��lan bilginin id leri( �r�n veya kurum id leri)",
      "type": "array",
      "item": {
        "type": "integer"
      },
      "default": []
    }
  }
}