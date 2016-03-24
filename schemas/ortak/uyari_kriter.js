module.exports = {
  "id": "/node/schema/ortak/uyari_kriter",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "UyariKriter",
  "description": "Uyarı kriter bilgisi.",
  "type": "object",
  "definitions": {},
  "additionalProperties": false,
  /**
   * @class UyariKriter
   */
  "properties": {
    "Type": {
      "type": "string"
    },
    "Prop": {
      "type": "string"
    },
    "Operator": {
      "type": "string"
    },
    "Value": {
      "type": "string"
    }
  }
};