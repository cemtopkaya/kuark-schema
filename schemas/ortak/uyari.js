module.exports = {
    "id": "/node/schema/ortak/uyari",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Uyari",
    "description": "Uyarı bilgisi",
    "type": "object",
    "required": [
        "Id",
        "Olay",
        "Elastic",
        "Tahta_Id",
        "Islemler"
    ],
    "definitions": {
        "UyariKriter": {
            "$ref": "http:/node/schema/ortak/uyari_kriter"
        },
        "Uye": {
            "$ref": "http:/node/schema/kullanici/uye"
        },
        "Rol": {
            "$ref": "http:/node/schema/rol_yetkilendirme/rol"
        }
    },
    "additionalProperties": false,
    /**
     * @class Uyari
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
        "GorevAdi": {
            "type": "string",
            "default": ""
        },
        /** @type {string} */
        "Olay": {
            "type": "string",
            "default": ""
        },
        /** @type {UyariKriter[]} */
        "Kriterler": {
            "type": "array",
            "item": {
                "$ref": "#/definitions/UyariKriter"
            },
            "default": []
        },
        /** @type {string[]} */
        "Islemler": {
            "type": "array",
            "default": []
        },
        /** @type {integer} */
        "Kullanici_Id": {
            "type": "integer"
        },
        /** @type {integer} */
        "Tahta_Id": {
            "type": "integer"
        },
        /** @type {object} */
        "Elastic": {
            "type": "object"
        },
        /** @type {boolean} */
        "Durumu": {
            "description": "Uyarının durumu true ise çalıştırılacak değilse çalıştırılmayacaktır",
            "type": "boolean",
            "default": "true"
        },
        /** @type {integer[]} */
        "Rol_Idler": {
            "type": "array",
            "item": {
                "type": "integer"
            },
            "default": []
        },
        /** @type {integer[]} */
        "Uye_Idler": {
            "type": "array",
            "item": {
                "type": "integer"
            },
            "default": []
        },
        /** @type {Uye[]} */
        "Uyeler": {
            "type": "array",
            "item": {
                "$ref": "#/definitions/Uye"
            },
            "default": []
        },
        /** @type {Rol[]} */
        "Roller": {
            "type": "array",
            "item": {
                "$ref": "#/definitions/Rol"
            },
            "default": []
        }
    }
};