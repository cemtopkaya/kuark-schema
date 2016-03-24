module.exports = {
    "id": "/node/schema/ortak/lazyLoadingResponse",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "LazyLoadingResponse",
    "description": "D�nen veriyi ve d�nebilecek kay�t say�s�n� tutar. B�ylece lazy load i�in istemci sayfalama yapabilir. Sayfa bilgisi ve sayfada ka� sat�r olaca��na g�re. Elde etmek istedi�imiz: { ToplamKayitSayisi: 1450, Data: [...] }",
    "type": "object",
    "definitions": {},
    "required": [
        "ToplamKayitSayisi",
        "Data"
    ],
    "additionalProperties": false,
    /**
     * @class LazyLoadingResponse
     */
    "properties": {
        /** @type {integer} */
        "ToplamKayitSayisi": {
            "type": "integer",
            "default": 0
        },
        /** @type {Array} */
        "Data": {
            "type": "array",
            "default": []
        }
    }
};