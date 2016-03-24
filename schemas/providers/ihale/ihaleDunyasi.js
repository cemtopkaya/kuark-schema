module.exports = {
  "id": "/node/schema/providers/ihale/ihaleDunyasi",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "IhaleDunyasi",
  "description": "Ihale Dunyasi Ihale Bilgileri",
  "type": "object",
  "required": [
    "IhaleDunyasiId",
    "raw"
  ],
  "additionalProperties": false,
  /**
   * @class IhaleDunyasi
   */
  "properties": {
    "IhaleDunyasiId": {
      "type": "number",
      "default": 0
    },
    "raw": {
      "type": "string",
      "default": ""
    }
  }
}