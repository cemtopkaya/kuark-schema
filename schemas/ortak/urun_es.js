module.exports = {
    "id": "/node/schema/ortak/urun_es",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "UrunES",
    "description": "Tüm alanlarda geçerli temel ürün bilgisi.",
    "type": "object",
    "definitions": {
        "KurumDB": {
            "$ref": "/node/schema/ortak/kurum_db"
        },
        "AnahtarKelime": {
            "$ref": "/node/schema/ortak/anahtarKelime"
        }
    },
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    /**
     * @class UrunES
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
            "type": "integer"
        },
        /** @type {integer} */
        "ParaBirim_Id": {
            "type": "integer"
        },
        /** @type {KurumDB} */
        "Uretici": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/KurumDB"
            }
        },
        /** @type {AnahtarKelime[]} */
        "AnahtarKelimeler": {
            "type": "array",
            "allOf": [{
                "$ref": "#/definitions/AnahtarKelime"
            }],
            "default": []
        }
    }
};