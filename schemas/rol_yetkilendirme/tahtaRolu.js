module.exports = {
    "id": "/node/schema/rol_yetkilendirme/tahtaRolu",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "TahtaRolu",
    "description": "Tahtanın rollerini içerir >  HS > tahta:401:rol : Tahtanın rolleri > 1 | {adi:'Sahip', Yetki:['Ihale Girişi','Ihaleye Katılım', 'Teklif Girişi'] }",
    "type": "object",
    "additionalProperties": false,
    "required": [
        "Id",
        "Adi"
    ],
    "definitions": {
        "Yetki": {
            "$ref": "/node/schema/rol_yetkilendirme/yetki"
        }
    },
    /**
     * @class TahtaRolu
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
        /** @type {Yetki} */
        "Yetki": {
            "$ref": "#/definitions/Yetki"
        }
    }
};