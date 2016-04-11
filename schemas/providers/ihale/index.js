module.exports = {
    "id": "/node/schema/providers/ihale/index",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "IhaleProviders",
    "description": "İhale Sağlayıcılar",
    "type": "object",
    "definitions": {
        "IhaleDunyasi": {"$ref": "/node/schema/providers/ihale/ihaleDunyasi"}
    },
    "required": ["IhaleDunyasi"],
    "additionalProperties": false,
    /** @class IhaleProviders */
    "properties": {
        /** @type {IhaleDunyasi} */
        "IhaleDunyasi": {
            "type": "object",
            "item": {"$ref": "#/definitions/IhaleDunyasi"}
        },
        "cem": {"type": "number", "default": 10}
    }
};