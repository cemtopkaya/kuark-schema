module.exports = {
    "id": "/node/schema/ortak/ulke",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Ulke",
    "description": "Tüm alanlarda geçerli ülke bilgisi.",
    "type": "object",
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    /**
     * @class Ulke
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