module.exports = {
    "id": "/node/schema/ortak/onayDurumu",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "OnayDurumu",
    "description": "Kalemin onay durum bilgisi",
    "type": "object",
    "definitions": {},
    "required": [
        "Id"
    ],
    "additionalProperties": false,
    /**
     * @class OnayDurumu
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 1
        },
        /** @type {string} */
        "Baslik": {
            "type": "string",
            "default": "İlk Kayit"
        },
        /** @type {integer} */
        "Tarih": {
            "type": "integer"
        },
        /** @type {integer} */
        "Kullanici_Id": {
            "type": "integer"
        }
    }
};