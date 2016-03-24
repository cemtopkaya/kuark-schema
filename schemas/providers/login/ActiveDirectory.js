module.exports = {
    "id": "/node/schema/providers/login/ActiveDirectory",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "AD",
    "type": "object",
    "required": [
        "pager",
        "displayName",
        "mail"
    ],
    "default": {"pager": "", "displayName": "", "mail": ""},
    /**
     * @class AD
     */
    "properties": {
        /** @type {string} */
        "dn": {"type": "string"},
        /** @type {string} */
        "cn": {"type": "string"},
        /** @type {string} */
        "sn": {"type": "string"},
        /** @type {string} */
        "description": {"type": "string"},
        /** @type {string} */
        "givenName": {"type": "string"},
        /** @type {string} */
        "whenCreated": {"type": "string"},
        /** @type {string} */
        "displayName": {
            "type": "string",
            "default": ""
        },
        /** @type {string} */
        "userAccountControl": {"type": "string"},
        /** @type {string} */
        "pwdLastSet": {"type": "string"},
        /** @type {string} */
        "sAMAccountName": {"type": "string"},
        /** @type {string} */
        "userPrincipalName": {"type": "string"},
        /** @type {string} */
        "mail": {
            "type": "string",
            "default": ""
        },
        /** @type {string} */
        "pager": {
            "type": "string",
            "default": ""
        }
    }
};