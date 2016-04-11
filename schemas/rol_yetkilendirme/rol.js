module.exports = {
    "id": "/node/schema/rol_yetkilendirme/rol",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "İhale bilgisi",
    "type": "object",
    "title": "Rol",
    "definitions": {
        "Yetki": {
            "$ref": "/node/schema/rol_yetkilendirme/yetki"
        }
    },
    "required": [
        "Id",
        "Adi",
        "Yetki"
    ],
    "additionalProperties": false,
    /**
     * @class Rol
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {string} */
        "Adi": {
            "type": "string",
            "default": "",
            "minLength": 2,
            "maxLength": 100
        },
        /** @type {Yetki} */
        "Yetki": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/Yetki"
            }
        }
    }
};