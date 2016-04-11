module.exports = {
  "id": "/node/schema/providers/ihale/ekap",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Ekap",
  "description": "EKAP K�K Ihale Bilgileri",
  "type": "object",
  "required": [
    "EkapId",
    "raw"
  ],
  "additionalProperties": false,
  /**
   * @class Ekap
   */
  "properties": {
    "EkapId": {
      "type": "number",
      "default": 0
    },
    "WebAdresi": {
      "type": "string"
    },
    "SartnameAdresi": {
      "type": "string"
    },
    "raw": {
      "type": "string",
      "default": ""
    }
  }
};