module.exports = {
  "id": "/node/schema/providers/login/providerGooglePlus",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "GP",
  "type": "object",
  "required": [
    "name"
  ],
  "default": {
    "id": 0
  },
  /**
   * @class GP
   */
  "properties": {
    "id": {
      "type": "integer"
    },
    "displayName": {
      "type": "string"
    },
    "provider": {
      "type": "string",
      "default": "google"
    },
    "token": {
      "type": "string"
    },
    "refreshToken": {
      "type": "string"
    },
    "name": {
      "type": "object",
      "properties": {
        "familyName": {
          "type": "string"
        },
        "givenName": {
          "type": "string"
        }
      }
    },
    "gender": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "photo": {
      "type": "string"
    },
    "raw": {
      "type": "string"
    }
  }
}