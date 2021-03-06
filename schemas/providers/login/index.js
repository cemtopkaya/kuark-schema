module.exports = {
  "id": "/node/schema/providers/login/index",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "LoginProviders",
  "description": "Kullanıcı Giriş Sağlayıcıları",
  "type": "object",
  "definitions": {
    "AD": {
      "$ref": "/node/schema/providers/login/ActiveDirectory"
    },
    "TW": {
      "$ref": "/node/schema/providers/login/providerTwitter"
    },
    "FB": {
      "$ref": "/node/schema/providers/login/providerFacebook"
    },
    "GP": {
      "$ref": "/node/schema/providers/login/providerGooglePlus"
    }
  },
  /**
   * @class LoginProviders
   */
  "properties": {
    /** @type {AD} */
    "AD": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/AD"
      }
    },
    /** @type {TW} */
    "TW": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/TW"
      }
    },
    /** @type {FB} */
    "FB": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/FB"
      }
    },
    /** @type {GP} */
    "GP": {
      "type": "object",
      "item": {
        "$ref": "#/definitions/GP"
      }
    }
  }
};