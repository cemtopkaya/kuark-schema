module.exports = {
    "id": "/node/schema/kullanici/kullanici",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Session içinde kullanılacak kullanıcı",
    "type": "object",
    "title": "Kullanici",
    "definitions": {
        "LoginProviders": {
            "$ref": "/node/schema/providers/login/index"
        },
        "Tahta": {
            "$ref": "/node/schema/tahta/index"
        }
    },
    "required": [
        "Id"
    ],
    /**
     * @class Kullanici
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {integer} */
        "OturumDurumu": {
            "type": "integer",
            "default": 1
        },
        /** @type {string} */
        "AdiSoyadi": {
            "type": "string"
        },
        /** @type {string} */
        "Cinsiyet": {
            "type": "string"
        },
        /** @type {string} */
        "Avatar": {
            "type": "string"
        },
        /** @type {string} */
        "Gorevi": {
            "type": "string"
        },
        /** @type {string} */
        "Tel1": {
            "type": "string"
        },
        /** @type {string} */
        "Tel2": {
            "type": "string"
        },
        /** @type {string} */
        "GSM": {
            "type": "string"
        },
        /** @type {string} */
        "EPosta": {
            "type": "string",
            "pattern": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$"
        },
        /** @type {string} */
        "FBAdresi": {
            "type": "string"
        },
        /** @type {string} */
        "TWAdi": {
            "type": "string"
        },
        /** @type {string} */
        "Sifre": {
            "type": "string",
            "minLength": 1,
            "maxLength": 10
        },
        /** @type {LoginProviders} */
        "Providers": {
            "$ref": "#/definitions/LoginProviders"
        },
        /** @type {object} */
        "Profil": {
            "type": "object"
        },
        /** @type {Tahta[]} */
        "Tahtalari": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Tahta"
            },
            "default": []
        }
    },
    "additionalProperties": false
};