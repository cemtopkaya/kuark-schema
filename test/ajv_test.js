
var sch = require('./index');
/*var Ajv = require('ajv'),
    ajv = Ajv({removeAdditional: true}); // options can be passed
var defaults = require('../public/js/plugins/jsonSchemaDefaults/defaults');
var valRes = ajv.validate({
    properties: {
        id: {type: "number", minimum: 1}
    }
}, {id: 0});*/

/*arrSchemas.forEach(function (path) {
    var schema = require(path),
        title = schema.title;
    ajv.addSchema(schema);
    definitons[title] = schema;
});*/


//console.log("valRes: %s",valRes);
//console.log("valErrs: %s", JSON.stringify(ajv.errors));

var a = sch.f_suz_klonla("/node/schema/tahta/index", {
    "Genel": {
        "Id": 0,
        "Adi": "ssss",
        "Kurum_Id": 0,
        "Kullanici_Id": 1
    },
    "Roller": [
        {
            "Id": 0,
            "Adi": ""
        }
    ],
    "Uyeler": [
        {
            "Id": 1
        }
    ]
});
console.log("burada > "+ JSON.stringify(a))

var tahtaSch = sch.AJV.ajv.getSchema("/node/schema/tahta/index");
for(var key in tahtaSch){
    console.log(key," ----------- ",tahtaSch[key]);
}
//console.log("Tahta G:" + tahtaSch);
return;
for (var a in definitons) {
    var k = defaults(definitons[a], definitons);
    console.log(JSON.stringify(k));
}


var js = require('./kullaniciDavet');
var obj = {UID: "", EPosta: "cem.topkaya@hotmail.com", Roller: ["1,2"]};
sonuc = ajv.validate("/node/schema/kullaniciDavet", obj);
console.log(ajv.errors);
return;
arrSchemas.forEach(function (path) {
    var schema = require(path),
        title = schema.title;
    definitons[title] = schema;
});

for (var a in definitons) {
    var k = defaults(definitons[a], definitons);
    console.log(JSON.stringify(k));
}


return;
var defs_obj = {
    "cem": {
        "id": "cemm",
        "type": "object", "title": "object",
        "properties": {
            "bir": {"type": "string", "default": "bir"},
            "iki": {"type": "string", "default": "iki"}
        }
    },
    "cenk": {
        "id": "cemm",
        "type": "object", "title": "object",
        "properties": {
            "uc": {"type": "integer", "default": 3},
            "dort": {"type": "integer", "default": 4}
        }
    }
};
var o = {
    "description": "Any validation failures are shown in the right-hand Messages pane.",
    "type": "object", "title": "object",
    "id": "test",
    "definitions": defs_obj,
    "properties": {
        "cemo": {
            "description": "geyik",
            "$ref": "#/definitions/cem"
        },
        "cengo": {
            "description": "geyik",
            "$ref": "#/definitions/cenk"
        }
    }
};
var vdor = ajv.compile(o);
var sonuc = vdor({cemo: {bir: "bir"}});
ajv.compile(o);
//sonuc = ajv.validate(o,{cemo:{bir:"bir"}})
sonuc = ajv.validate("kullanici:1:profil", {cemo: {bir: "bir"}});
sonuc = ajv.compileAsync("tahta:401:rol:23:teklif", {cemo: {bir: "bir"}});
console.log(ajv.getSchema("test").schema);
console.log("Sonuc: " + sonuc);
console.log(ajv.errors);

return;
var a = [
    'http://localhost:3000/node/schema/providers/login/ActiveDirectory.json',
    'http://localhost:3000/node/schema/providers/login/providerFacebook.json',
    'http://localhost:3000/node/schema/providers/login/providerGooglePlus.json',
    'http://localhost:3000/node/schema/providers/login/providerTwitter.json',
    'http://localhost:3000/node/schema/providers/login/index.json'
];


var e = defaults(require('./providers/login/index.json'));
console.log(JSON.stringify(e));

return;
var defs_obj = {
    "cem": {
        "id": "cemm",
        "type": "object", "title": "object",
        "properties": {
            "bir": {"type": "string", "default": "bir"},
            "iki": {"type": "string", "default": "iki"}
        }
    },
    "cenk": {
        "id": "cemm",
        "type": "object", "title": "object",
        "properties": {
            "uc": {"type": "integer", "default": 3},
            "dort": {"type": "integer", "default": 4}
        }
    }
};
var defs_ref = {
    "cem": {"$ref": "http://localhost:3000/node/schema/providers/login/test.json"},
    "cenk": {"$ref": "http://localhost:3000/node/schema/providers/login/test.json"}
}
var o = {
    "description": "Any validation failures are shown in the right-hand Messages pane.",
    "type": "object", "title": "object",
    "id": "test",
    "definitions": defs_ref,
    "properties": {
        "cemo": {
            "description": "geyik",
            "$ref": "#/definitions/cem"
        },
        "cengo": {
            "description": "geyik",
            "$ref": "#/definitions/cenk"
        }
    }
};
var e = defaults(o);
console.log(JSON.stringify(e));

return;

function ajv_load_schema() {

    ajv = Ajv({
        loadSchema: function (uri, callback) {
            var request = require('request');
            request(uri, function (err, res, body) {
                console.log("request ended");
                console.log(body);

                if (err || res.statusCode >= 400)
                    callback(err || new Error('Loading error: ' + res.statusCode));
                else {
                    callback(null, JSON.parse(body));
                }
            });
        }
    });

    var a = [
        'http://localhost:3000/node/schema/providers/login/ActiveDirectory.json',
        'http://localhost:3000/node/schema/providers/login/providerFacebook.json',
        'http://localhost:3000/node/schema/providers/login/providerGooglePlus.json',
        'http://localhost:3000/node/schema/providers/login/providerTwitter.json',
        'http://localhost:3000/node/schema/providers/login/test.json',
        'http://localhost:3000/node/schema/providers/login/index.json'
    ];

    function compile() {

        var schTest = require('./providers/login/test.json');
        var schIndex = require('./providers/login/index.json');
        ajv.addSchema(schTest);
        var validate = ajv.compile(schIndex);
        console.log(validate.schema);
        var a = validate({TW: {id: 2, name: "cem"}});
        console.log(validate.errors);
        console.log(a);
    }

    //compile();

    function compileAsync() {
        var sch = require('./providers/login/index.json');
        console.log("sch--------------");
        console.log(JSON.stringify(sch));

        ajv.compileAsync(sch, function (err, validate) {
            console.log(validate);
            console.log("neredeyim")
            console.log("err: " + err);
            if (err) return;

            var a = validate({id: 2, name: "cem"})
            console.log(validate.errors)
            console.log(a);

            console.log("buraday�m");
        });
    }

    //compileAsync();

    function addSchema() {

        var schTest = require('./providers/login/test.json');
        var schIndex = require('./providers/login/index.json');
        ajv.addSchema(schTest);
        ajv.addSchema(schIndex);
        var bValid = ajv.validate(schIndex.id, {a: 1, TW: {id: 2, name: "cem"}});
        if (!bValid) {
            console.log("Hatal�ysam ara: ");
            console.log(ajv.errors);
        } else {
            console.log("Herk�l m�s�n karde�im:");
            var sch2 = ajv.getSchema("http://localhost:3000/node/schema/providers/login/index");
            console.log(sch2.schema);
        }
    }

    //addSchema();
}
return;

var aa = ajv.getSchema('http://localhost:3000/node/schema/providers/login/test.json').schema;
console.log("aa : ---------------");
console.log(aa);
var definitions = {}
a.forEach(function (_sPath) {
    //definitions

});
return;

var sch = ajv.getSchema("/node/schema/tahta/index");
console.log("Tahta G:" + sch);
var tahtaG = defaults(sch.schema);
return;
console.log("-------------------")
var f_dogrula = function (_tipi, _obj) {
    console.log("ajv_semali");
    console.log(JSON.stringify(_tipi));
    console.log(JSON.stringify(_obj));
    var valid = ajv.validate(_tipi, _obj);
    if (!valid) l.e(ajv.errors);
    console.log("olu�an>>" + JSON.stringify(_obj));
    return _obj;
};

var f_defaults = function () {
    var sch = ajv.getSchema('/node/schema/ortak/sayfalama');
    var a = defaults(sch.schema);
    console.log("aa:" + JSON.stringify(a))
}

var f_get_schema = function (_tipi) {
    return ajv.getSchema(_tipi).schema;
};
var c = {
    "id": "c",
    "type": "object", "title": "object",
    "additionalProperties": false,
    "properties": {
        "Id": {
            "type": "integer",
            "default": 0
        },
        "Adi": {
            "type": "string"
        }
    }
};

var b = {
    "id": "b",
    "type": "object", "title": "object",
    "default": {a: "aaa"},
    "additionalProperties": false,
    "properties": {
        "Id": {
            "type": "integer",
            "default": 0
        },
        "Adi": {
            "type": "string"
        }
    }
};

var a = {
    "id": "a",
    "type": "object", "title": "object",
    "definitions": {
        "b": b,
        "c": c
    },
    "required": [
        "Id",
        "Adi"
    ],
    "additionalProperties": false,
    "properties": {
        "Id": {
            "type": "integer",
            "default": 0
        },
        "Adi": {
            "type": "string"
        },
        "b": {
            type: {"$ref": "b"}
        },
        "c": {"$ref": "c"}
    }
};
var urun = defaults(f_get_schema("/node/schema/ortak/urun"));

console.log("�r�n : " + JSON.stringify(urun));

return;


return;
var tahta = defaults(f_get_schema("/node/schema/tahta/index"));
console.log("tahta : " + JSON.stringify(tahta));

exports = {
    ajv: ajv,
    f_dogrula: f_dogrula
};


/*
 var urun = {
 "fazla":"silinsin",
 "Id": 12,
 "Adi": "fx70",
 "Kodu": "sdfas",
 "Aciklama": "aciksiz",
 "Birim": "Adet",
 "Fiyat": 12,
 "ParaBirim_Id": 2,
 "Uretici": {
 "Id": 22,
 "Adi": "FMC Antalya",
 "TicariUnvan": "�zel FMC A.�.",
 "Statu": "�zel",
 "VD": "Tuzla",
 "VN": "4474246469",
 "Eposta": "fmc@ozel.net",
 "Kurumdur": 0,
 "buda":"fazla"
 }
 };
 console.log(urun);
 var valid = ajv.validate("/node/schema/ortak/urun", urun);
 if (!valid) console.log(ajv.errors);
 console.log(urun);*/
