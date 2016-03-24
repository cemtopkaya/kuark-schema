module.exports = {
    "id": "/node/schema/providers/login/providerFacebook",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "FB",
    "type": "object",
    "required": [
        "id"
    ],
    "default": {"id": 0},
    /**
     * @class FB
     */
    "properties": {
        "id": {
            "type": "integer",
            "default": 0
        },
        "token": {
            "type": "string"
        },
        "displayName": {
            "type": "string"
        },
        "name": {
            "type": "object",
            "properties": {
                "familyName": {
                    "type": "string"
                },
                "givenName": {
                    "type": "string"
                },
                "middleName": {
                    "type": "string"
                }
            }
        },
        "provider": {
            "type": "string"
        },
        "gender": {
            "type": "string"
        },
        "raw": {
            "type": "string"
        }
    }
};