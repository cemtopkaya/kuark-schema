module.exports = {
  "id": "/node/schema/ortak/dovizKuru",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Döviz kur bilgisi",
  "type": "object",
  "title": "DovizKuru",
  "definitions": {},
  "required": [
    "Id"
  ],
  "additionalProperties": false,
  /**
   * @class DovizKuru
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "KurTipi_Id": {
      "type": "integer"
    },
    "ParaBirim_Id": {
      "type": "integer"
    },
    "KurDegeri": {
      "type": "string"
    },
    "KurTarihi": {
      "type": "integer"
    }
  }
}