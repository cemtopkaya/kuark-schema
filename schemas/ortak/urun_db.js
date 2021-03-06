module.exports = {
    "id": "/node/schema/ortak/urun_db",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "UrunDB",
    "description": "Tüm alanlarda geçerli temel ürün bilgisi.",
    "type": "object",
    "definitions": {},
    "required": [
        "Id",
        "Adi",
        "UreticiKurum_Id"
    ],
    "additionalProperties": false,
    /**
     * @class UrunDB
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
        },
        /** @type {string} */
        "Kodu": {
            "type": "string"
        },
        /** @type {string} */
        "m2": {
            "type": "string",
            "description": "metrekare değerini gösterir"
        },
        /** @type {string} */
        "Aciklama": {
            "type": "string"
        },
        /** @type {string} */
        "Birim": {
            "type": "string"
        },
        /** @type {number} */
        "Fiyat": {
            "type": "number"
        },
        /** @type {integer} */
        "UreticiKurum_Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {integer} */
        "ParaBirim_Id": {
            "type": "integer"
        }
    }
};