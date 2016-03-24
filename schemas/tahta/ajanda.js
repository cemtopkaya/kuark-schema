module.exports = {
    "id": "/node/schema/tahta/ajanda",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "TahtaAjanda",
    "description": "Tahtanın Ajanda bilgileri",
    "type": "object",
    "additionalProperties": false,
    /**
     * @class TahtaAjanda
     */
    "properties": {
        "GC": {
            "type": "object",
            "properties": {
                /** @type {integer} */
                "Id": {
                    "type": "string",
                    "default": ""
                },
                /** @type {string} */
                "Adi": {
                    "type": "string",
                    "description": "ajanda başlığı(summary)",
                    "default": ""
                }
            }
        },
        "FB": {
            "type": "object",
            "properties": {
                "Id": {
                    "type": "string",
                    "default": ""
                },
                "Adi": {
                    "type": "string",
                    "description": "ajanda başlığı(summary)",
                    "default": ""
                }
            }
        }
    }
};