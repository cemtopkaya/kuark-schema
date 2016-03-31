module.exports = {
    "id": "/node/schema/ortak/kurum_db",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Tüm alanlarda geçerli temel kurum bilgisi. İhale açan kurum bilgisi, ya da diğerleri için geçerli olacaktır.",
    "type": "object",
    "title": "KurumDB",
    "definitions": {},
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    /**
     * @class KurumDB
     */
    "properties": {
        /** @type {integer} */
        "Id": {
            "type": "integer",
            "default": 0
        },
        /** @type {integer} */
        "IhaleDunyasiKurumId": {
            "type": "integer",
            "default": 0
        },
        /** @type {string} */
        "Adi": {
            "type": "string",
            "default": ""
        },
        /** @type {string} */
        "TicariUnvan": {
            "type": "string"
        },
        /** @type {string} */
        "Statu": {
            "type": "string"
        },
        /** @type {string} */
        "VD": {
            "type": "string"
        },
        /** @type {string} */
        "VN": {
            "type": "string"
        },
        /** @type {string} */
        "EPosta": {
            "type": "string"
        },
        /** @type {string} */
        "Web": {
            "type": "string"
        },
        /** @type {string} */
        "Tel1": {
            "type": "string"
        },
        /** @type {string} */
        "Tel2": {
            "type": "string"
        },
        /** @type {string} */
        "Faks": {
            "type": "string"
        },
        /** @type {string} */
        "AcikAdres": {
            "type": "string"
        },
        /** @type {string} */
        "UlkeAdi": {
            "type": "string"
        },
       /* /!** @type {string} *!/
        "IlAdi": {
            "type": "string"
        },
        /!** @type {string} *!/
        "BolgeAdi": {
            "type": "string"
        },*/
        /** @type {integer} */
        "Sehir_Id": {
            "type": "integer"
        },
        /** @type {integer} */
        "Bolge_Id": {
            "type": "integer"
        },
        /** @type {integer} */
        "Kurumdur": {
            "type": "integer"
        }
    }
};