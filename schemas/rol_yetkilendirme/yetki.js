module.exports = {
    "id": "/node/schema/rol_yetkilendirme/yetki",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Yetki",
    "description": "rol yetkilendirme bilgileri",
    "type": "object",
    "additionalProperties": false,
    "definitions": {
        "CRUD": {
            "$ref": "/node/schema/rol_yetkilendirme/CRUD"
        }
    },
    /**
     * @class Yetki
     */
    "properties": {
        /**
         * @type {CRUD}
         */
        "firma": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "urun": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "ihale": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "kalem": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "kalemDurum": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "teklif": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "uye": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "uyeRolleri": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "rol": {
            "$ref": "#/definitions/CRUD"
        },
        /**
         * @type {CRUD} Yetki.davet
         */
        "davet": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "tahta": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "uyari": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "haber": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "ajanda": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "ajandaYetki": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "anahtar": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "bolge": {
            "$ref": "#/definitions/CRUD"
        },
        /** @type {CRUD} */
        "sehir": {
            "$ref": "#/definitions/CRUD"
        }
    }
};