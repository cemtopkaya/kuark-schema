module.exports = {
    "id": "/node/schema/ortak/bolge",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Bolge",
    "description": "Tüm alanlarda geçerli bölge bilgisi.",
    "type": "object",
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    /**
     * @class Bolge
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