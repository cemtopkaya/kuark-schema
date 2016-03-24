module.exports = {
  "id": "/node/schema/providers/ihale/saglikbank",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "SaglikBank",
  "descriptipn": "SaglikBank Ihale Bilgileri",
  "type": "object",
  "required": [
    "SaglikBankId",
    "raw"
  ],
  "additionalProperties": false,
  /**
   * @class SaglikBank
   */
  "properties": {
    "SaglikBankId": {
      "type": "string",
      "default": ""
    },
    "RssAdresi": {
      "type": "string",
      "default": ""
    },
    "WebAdresi": {
      "type": "string",
      "default": ""
    },
    "SartnameAdresi": {
      "type": "string",
      "default": ""
    },
    "raw": {
      "type": "string",
      "default": ""
    }
  }
}