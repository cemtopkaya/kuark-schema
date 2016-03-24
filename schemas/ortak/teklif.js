module.exports = {
    "id": "/node/schema/ortak/teklif",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Teklif",
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
     * @class Teklif
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
            "type": "integer",
            "description": "teklifin verildi�i kalem"
        },
        /** @type {integer} */
        "Ihale_Id": {
            "type": "integer",
            "description": "teklifin verildi�i ihale"
        },
        /** @type {integer} */
        "ParaBirim_Id": {
            "type": "integer"
            /*"enum": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ]*/
        },
        /** @type {number} */
        "Fiyat": {
            "type": "number"
        },
        /** @type {Array} */
        "Urun_Idler": {
            "type": "array",
            "items": {"type": "integer"},
            "default": []
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