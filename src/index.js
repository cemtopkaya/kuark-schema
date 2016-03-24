var Ajv = require('ajv'),
    ajvFilter = Ajv({removeAdditional: true}), // options can be passed
    ajv = Ajv({removeAdditional: false}), // options can be passed
// Tüm schemalar
    schemas = require('../schemas'),
// defaults ile nesne yaratırken tüm şemaları bu objede toplayacağız.
    definitons = {},
    yuklenen_schema_sayisi = 0,
    toplam_schema_sayisi = schemas.arr.length;

schemas.arr.forEach(function (path) {
    // defaults için definitions tanımlanmış olsun
    var schema = require(path);
    definitons[schema.title] = schema;

    // ajv'ye ekleyelim
    ajv.addSchema(schema);
    ajvFilter.addSchema(schema);
    yuklenen_schema_sayisi++;
});

if (yuklenen_schema_sayisi != toplam_schema_sayisi) {
    ssr = [{"yuklenen_schema_sayisi": yuklenen_schema_sayisi}, {"toplam_schema_sayisi": toplam_schema_sayisi}];
}

//require('../log/winstonConfig').error(JSON.stringify(definitons, null, '\t'))


var f_dogrula = function (_tipi, _obj) {
    var valid = ajv.validate(_tipi, _obj);
    if (!valid) {
        console.error(ajv.errors);
    }
    return ajv.errors;
};

var f_suz_dogrula_cevapla = function (_q, _r, _next, _tipi, _inObject) {
    var valErrs = f_suz_dogrula(_tipi, _inObject);
    if (valErrs) {
        _next(mesaj.POST._400(valErrs, "Veri hatalı", "Bad request"));
    }
    return valErrs;
};

var f_suz_dogrula = function (_tipi, _inObject, _bProtectSource) {


    //ssg = [{"_tipi":_tipi},{"_inObject":_inObject}];

    if (_bProtectSource) {
        return f_dogrula(_tipi, _inObject);
    }

    var valid = ajvFilter.validate(_tipi, _inObject);

    if (!valid) {
        console.error(ajvFilter.errors);
    }

    /*else{
     _inObject._ajvFiltered = _outObject;
     }*/
    return ajvFilter.errors;
};

var f_suz_klonla = function (_tipi, _inObject) {
    var out;
    if (typeof _ !== "undefined") {
        out = _.clone(_inObject);
    } else {
        out = JSON.parse(JSON.stringify(_inObject));
    }
    var valid = ajvFilter.validate(_tipi, out);

    if (!valid) {
        console.error(ajvFilter.errors);
        return null;
    }

    return out;
};

var f_get_schema = function (_tipi) {
    var tipinSemasi = ajv.getSchema(_tipi);
    if (tipinSemasi.errors) {
        console.log("/////////////// Şema bulunamadı. Yine mi harf hatası var acaba \\\\\\\\\\\\\\");
    } else {
        return tipinSemasi.schema;
    }
};

var f_create_default_object = function (_tipi) {

    return (typeof  _tipi === "string")
        ? defaults(f_get_schema(_tipi), definitons)
        : defaults(_tipi, definitons);
};

//console.log(JSON.stringify(f_create_default_object("/node/schema/ortak/ihale_es")))
//console.log(JSON.stringify(f_get_schema("/node/schema/ortak/ihale_es")))

/**
 * @class schema
 */
var result = {
    f_get_schema: f_get_schema,
    f_create_default_object: f_create_default_object,
    f_dogrula: f_dogrula,
    f_suz_dogrula: f_suz_dogrula,
    f_suz_klonla: f_suz_klonla,
    f_suz_dogrula_cevapla: f_suz_dogrula_cevapla,
    AJV: {
        ajv: ajv,
        ajvFilter: ajvFilter
    },
    SCHEMA:schemas.SCHEMA
};

module.exports = result;