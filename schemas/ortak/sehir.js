module.exports = {
    "id": "/node/schema/ortak/sehir",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Sehir",
    "description": "Tüm alanlarda geçerli Sehir bilgisi.",
    "type": "object",
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    /**
     * @class Sehir
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
            "default": ""
        }
    }
};