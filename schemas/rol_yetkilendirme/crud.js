module.exports = {
    "id": "/node/schema/rol_yetkilendirme/CRUD",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "CRUD",
    "type": "object",
    "required": [
        "c",
        "r",
        "u",
        "d",
        "s",
        "h"
    ],
    /**
     * @class CRUD
     */
    "properties": {
        /**
         * @type {boolean}
         * @property {boolean} CRUD.c
         */
        "c": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": false,
            "description": "create"
        },
        /** @type {boolean} */
        "r": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": false,
            "description": "read"
        },
        /** @type {boolean} */
        "u": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": false,
            "description": "update"
        },
        /** @type {boolean} */
        "d": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": false,
            "description": "delete"
        },
        /** @type {boolean} */
        "s": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": null,
            "description": "share"
        },
        /** @type {boolean} */
        "h": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "type": "null"
                }
            ],
            "default": null,
            "description": "hide"
        }
    }
};