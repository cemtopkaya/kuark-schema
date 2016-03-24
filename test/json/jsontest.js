var defaults = require('json-schema-defaults');


var personSchema = require('./person');
console.log(personSchema);
var a = defaults(personSchema.person);
console.log(a);
return;


var simpleSchema = require('./sim');
console.log(simpleSchema);
var a = defaults(simpleSchema.simple);
console.log(a);

return;

var json = defaults({
    "title": "Album Options",
    "type": "object","title": "object",
    "properties": {
        "sort": {
            "type": "string",
            "default": "id"
        },
        "per_page": {
            "default": 30,
            "type": "integer"
        }
    }
});

var schema_ata= {
    "title": "Kullanıcı kayıt olurken AD, FB, TW, GP geçişlerindeki hataları taşıyan nesne",
    "type": "object","title": "object",
    "required":true,
    "properties": {
        "hata": {
            "type": "string",
            "required":true
        }
    }
};

var schema_kullaniciKayit ={
    "title": "Kullanıcı kayıt olurken AD, FB, TW, GP geçişlerindeki hataları taşıyan nesne",
    "type": "object","title": "object",
    "properties": {
        "ana":{$ref:'#schema_ata'},
        "user":{
            "type":"object",
            "default":{}
        },
        "mesaj": {
            "type": "string"
        }
    }
};



