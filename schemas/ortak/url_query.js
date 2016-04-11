//noinspection JSValidateTypes
module.exports = {
    "id": "/node/schema/ortak/url_query",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "description": "Genel arama tipi",
    "title": "",
    "definitions": {
        /** @type {Sayfalama} */
        "Sayfalama": {
            "$ref": "/node/schema/ortak/sayfalama"
        },
        /** @type {Siralama} */
        "Siralama": {
            "$ref": "/node/schema/ortak/siralama"
        }
    },
    "additionalProperties": false,
    /**
     * @class URLQuery
     */
    "properties": {
        /** @type {integer} */
        "Kullanici_Id": {
            "type": "integer"
        },
        /** @type {string} */
        "Aranan": {
            "type": "string"
        },
        /** @type {object} */
        "Tarih": {
            "type": "object"
        },
        /** @type {Kriter} */
        "Kriter": {
            "type": "string",
            "description": "seçilen kritere göre kayıtlar çekilir",
          /*  "enum": [
                "aktifler",//tahtanın görebileceği aktifler(silinmemiş/gizlenmemiş/ezilmemiş genel+özel tümü)
                "takiptekiler",
                "gizlenenler",
                "silinenler",
                "ezilenler"
            ],*/
            "default": "aktifler"
        },
        /** @type {array} */
        "Aranacak_Alanlar": {
            "type": "array",
            "default": []
        },
        /** @type {Sayfalama} */
        "Sayfalama": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/Sayfalama"
            }
        },
        /** @type {Siralama} */
        "Siralama": {
            "type": "array",
            "item": {
                "$ref": "#/definitions/Siralama"
            },
            "default": []
        }
    }
};