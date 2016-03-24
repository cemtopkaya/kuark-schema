var defaults = require('json-schema-defaults');

var tumu = {
    "$schema": "http://json-schema.org/draft-04/schema#",

    "definitions": {
        "kisi": {
            "type": "object","title": "object",
            "properties": {
                "adiSoyadi": {"type": "string", default: "Duygu akmaz"},
                "eposta": {"type": "string"},
                "cinsiyeti": {"type": "string", enum:["kadin","erkek"], default: "kadin"},
                "fatura_adresi":{"$ref": "#/definitions/address"}
            },
            "required": ["adiSoyadi","cinsiyeti"]
        },
        "address": {
            "type": "object","title": "object",
            "properties": {
                "street_address": {"type": "string", default: "street name"},
                "city": {"type": "string"},
                "state": {"type": "string", default: "state name"}
            },
            "required": ["street_address", "city", "state"]
        }
    },

    "type": "object","title": "object",
    "properties": {
        "KISI": {"$ref": "#/definitions/kisi"},
        "billing_address": {"$ref": "#/definitions/address"},
        "shipping_address": {
            "allOf": [
                {"$ref": "#/definitions/address"},
                {
                    "properties": {
                        "type": {"enum": ["residential", "business"], "default": "business"}
                    },
                    "required": ["type"]
                }
            ]
        }

    }
};

var def = {
    "address": {
        "type": "object","title": "object",
        "properties": {
            "street_address": {"type": "string", default: "cadde"},
            "city": {"type": "string"},
            "state": {"type": "string"}
        },
        "required": ["street_address", "city", "state"]
    }
};

var adres = defaults(tumu.definitions.kisi,tumu.definitions);
console.log(adres);
var validator = require('is-my-json-valid');
var validate = validator(tumu);

console.log(validate(adres));
//console.log(adres);