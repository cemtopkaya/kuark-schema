module.exports = {
    "id": "/node/schema/tahta/index",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Tahta",
    "description": "Tahta bilgileri",
    "type": "object",
    "definitions": {
        "Uye": {
            "$ref": "/node/schema/kullanici/uye"
        },
        "KurumDB": {
            "$ref": "/node/schema/ortak/kurum_db"
        },
        "AnahtarKelime": {
            "$ref": "/node/schema/ortak/anahtarKelime"
        },
        "CRUD": {
            "$ref": "/node/schema/rol_yetkilendirme/CRUD"
        },
        "TahtaRolu": {
            "$ref": "/node/schema/rol_yetkilendirme/tahtaRolu"
        },
        "TahtaAjanda": {
            "$ref": "/node/schema/tahta/ajanda"
        }
    },
    /**
     * @class Tahta
     */
    "properties": {
        /**
         * @type {TahtaGenel}
         */
        "Genel": {
            "type": "object",
            /**
             * @class TahtaGenel
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
                "Aciklama": {
                    "type": "string"
                },
                /** @type {integer} */
                "Kurum_Id": {
                    "type": "integer"
                },
                /** @type {Kurum} */
                "Kurum": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/KurumDB"
                        },
                        {
                            "type": "null"
                        }
                    ]
                },
                /** @type {integer} */
                "Kullanici_Id": {
                    "type": "integer"
                }
            }
        },
        /** @type {AnahtarKelime[]} */
        "AnahtarKelimeler": {
            "type": "array",
            "items": [{
                "$ref": "#/definitions/AnahtarKelime"
            }],
            "default": []
        },
        /** @type {Uye[]} */
        "Uyeler": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Uye"
            },
            "minItems": 1,
            "default": []
        },
        /** @type {TahtaRolu[]} */
        "Roller": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/TahtaRolu"
            }
        },
        /** @type {TahtaAjanda} */
        "Ajanda": {
            "$ref": "#/definitions/TahtaAjanda"
        }
    }
};