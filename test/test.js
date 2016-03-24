var defaults = require('json-schema-defaults');
var validator = require('is-my-json-valid');

//var kisiSchema = require('./ortak/kullaniciSession');
//var kisiSchema = require('./ortak/kullanici');

var schema = require('./index');
console.log("------- SCHEMA ---------");
console.log(schema.TahtaKullanici);

console.log("------- OBJECT ---------");
var obj = defaults(schema.TahtaKullanici);
console.log(obj);

console.log("------- VALIDATION ---------");
var validate = validator(schema);
console.log(validate(obj));

return;
var schema = require('./ortak/ihale');
console.log("------- SCHEMA ---------");
console.log(schema);

console.log("------- OBJECT ---------");
var obj = defaults(schema);
console.log(obj);

console.log("------- VALIDATION ---------");
var validate = validator(schema);
console.log(validate(obj));

return;
vara = require('app-root-path'),
path = require('path');
console.log("__dirname");
console.log(path.resolve(__dirname));

console.log("filename");
console.log(path.dirname(require.main.filename));
return;
console.log("---------------- Tüm Schemalar ile -----------");

var schema = require('./tumSchemalar');
console.log(schema);
console.log("----------------");
console.log("schema.properties");
console.log(schema.definitions.IhaleProviders);
console.log("schema.properties");
var obj = defaults(schema.definitions.IhaleProviders);
//obj.Providers.SaglikBank = defaults(schema.SaglikBank);
var validate = validator(schema);
console.log(obj);
console.log(validate(obj));

return;
var scIhale = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "Kullanýcý",
    description: "Session içinde kullanýlacak kullanýcý",
    type: "object",
    definitions: {
        //Providers: require('./ihaleProviders'),
        //SaglikBank: require('./ihaleProviders/saglikbank'),
        tumu: require('./index')
    },
    required: ["Id"],
    additionalProperties: false,
    properties: {
        Id: {type: "integer", default: 0},
        AD: {$ref: "#/definitions/tumu/AD"},
        IhaleProviders: {$ref: "#/definitions/tumu/IhaleProviders"},
        //Providers: {$ref: "#/definitions/tumu/IhaleProviders"},
        SaglikBank: {$ref: "#/definitions/tumu/SaglikBank"},
        IhaleNo: {type: "string"},
        Konusu: {type: "string"}
    }
};
console.log("----------------");
var schema = scIhale;
//schema = require('./index').Ihale;
console.log(schema);
var obj = defaults(schema);
//obj.Providers.SaglikBank = defaults(schema.SaglikBank);
var validate = validator(schema);
console.log(obj);
console.log(validate(obj));

console.log("---------------- REQUIRE ile -----------");

var schema = require('./index');
console.log(schema.IhaleProviders);
console.log("----------------");
var obj = defaults(schema.IhaleProviders);
//obj.Providers.SaglikBank = defaults(schema.SaglikBank);
var validate = validator(schema.IhaleProviders);
console.log(obj);
console.log(validate(obj));


return;
var provSchema = require('./tahta');
console.log(provSchema);
console.log("----------------");
//console.log(kisi);
var obj = defaults(provSchema);
var validate = validator(provSchema);
console.log(obj);
//console.log(validate());
//var kisi = defaults(provSchema);

return;


var scc = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://tender",

    "AD": {
        "id": "http://tender/AD",
        "type": "object","title": "object",
        "properties": {
            "mail": {
                "id": "http://tender/LoginProviders/AD/mail",
                "type": "string"
            },
            "userPrincipalName": {
                "id": "http://tender/LoginProviders/AD/userPrincipalName",
                "type": "string",
                "default": "cem"
            }
        }
    },
    "FB": {
        "id": "http://tender/FB",
        "type": "object","title": "object",
        "properties": {
            "mail": {
                "id": "http://tender/LoginProviders/FB/mail",
                "type": "string"
            },
            "id": {
                "id": "http://tender/LoginProviders/FB/id",
                "type": "integer"
            }
        }
    },
    "LoginProviders": {
        "id": "http://tender/LoginProviders",
        "type": "object","title": "object",
        "properties": {
            "AD": {"$ref": "http://tender/AD"},
            "FB": {"$ref": "http://tender/FB"}
        }
    },
    "kullanici": {
        "type": "object","title": "object",
        "properties": {
            "id": {
                "id": "http://tender/id",
                "type": "integer"
            },
            "AD": {"$ref": "http://tender/AD"},
            "LoginProviders": {"$ref": "http://tender/LoginProviders"}

        },
        "required": [
            "id",
            "LoginProviders"
        ]
    }
};
var schema = scc;
console.log(schema);
console.log("----------------");
var obj = defaults(schema.kullanici);
console.log(obj);
console.log("----------------");
var validate = validator(schema);
console.log(validate(obj));

return;
