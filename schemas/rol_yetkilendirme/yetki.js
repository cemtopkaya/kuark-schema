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
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "urun": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "ihale": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "kalem": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "kalemDurum": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "teklif": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "uye": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "uyeRolleri": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "rol": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /**
         * @type {CRUD} Yetki.davet
         */
        "davet": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "tahta": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "uyari": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "haber": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "ajanda": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "ajandaYetki": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "anahtar": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "bolge": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        },
        /** @type {CRUD} */
        "sehir": {
            "type": "object",
            "item": {
                "$ref": "#/definitions/CRUD"
            }
        }
    }
};