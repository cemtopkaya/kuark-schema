module.exports = {
    "id": "/node/schema/ortak/teklif_es",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "TeklifES",
    "description": "Kalemin teklifi",
    "type": "object",
    "definitions": {
        "KurumDB": {
            "$ref": "/node/schema/ortak/kurum_db"
        },
        "KalemDB": {
            "$ref": "/node/schema/ortak/kalem_db"
        },
        "IhaleDB": {
            "$ref": "/node/schema/ortak/ihale_db"
        },
        "UrunDB": {
            "$ref": "/node/schema/ortak/urun_db"
        }
    },
    "required": [
        "Id"
    ],
    "additionalProperties": false,
    /**
     * @class TeklifES
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {string} */
        "Aciklama": {
            "type": "string"
        },
        /** @type {integer} */
        "TeklifDurumu_Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {integer} */
        "Kurum_Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {integer} */
        "Kalem_Id": {
            "description": "teklifin verildi�i kalem",
            "type": "integer"
        },
        /** @type {integer} */
        "Ihale_Id": {
            "description": "teklifin verildi�i ihale",
            "type": "integer"
        },
        /** @type {integer} */
        "ParaBirim_Id": {
            "type": "integer"
        },
        /** @type {number} */
        "Fiyat": {
            "type": "number"
        },
        /** @type {UrunDB[]} */
        "Urunler": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/UrunDB"
            },
            "default": []
        },
        /** @type {KurumDB} */
        "Kurum": {
            "$ref": "#/definitions/KurumDB"
        },
        /** @type {KalemDB} */
        "Kalem": {
            "$ref": "#/definitions/KalemDB"
        },
        /** @type {IhaleDB} */
        "Ihale": {
            "$ref": "#/definitions/IhaleDB"
        }
    }
};