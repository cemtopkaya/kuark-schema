module.exports = {
    "id": "/node/schema/ortak/anahtarKelime",
    "title": "AnahtarKelime",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Anahtar kelimeler dizisi içerir",
    "type": "object",
    "additionalProperties": false,
    /**
     * @class AnahtarKelime
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {string} */
        "Anahtar": {
            "type": "string",
            "default": ""
        }
    }
};