var Ajv = require('ajv'),
    _ = require('lodash'),
    ajvFilter = Ajv({removeAdditional: true}), // options can be passed
    ajv = Ajv({removeAdditional: false}), // options can be passed
// Tüm schemalar
    /** @type {Schema_Sabitler} */
    sema = require('../schemas'),
    // defaults ile nesne yaratırken tüm şemaları bu objede toplayacağız.
    defaults = require('json-schema-defaults'),
    // tüm şemaların ID bilgilerini bu objenin propertysi gibi topluyoruz
    definitons = {};

sema.DOSYA_YOLLARI.forEach(function (_elm) {
    // defaults için definitions tanımlanmış olsun
    var schema = require(_elm);
    definitons[schema.title] = schema;

    // ajv'ye ekleyelim
    ajv.addSchema(schema);
    ajvFilter.addSchema(schema);
});

function f_dogrula(_tipi, _obj) {
    var valid = ajv.validate(_tipi, _obj);
    if (!valid) {
        console.error(ajv.errors);
    }
    return ajv.errors;
}

function f_suz_dogrula_cevapla(_q, _r, _next, _tipi, _inObject) {
    var valErrs = f_suz_dogrula(_tipi, _inObject);
    if (valErrs) {
        _next({
            code: 400,
            title: "Veri hatalı",
            message: "Geçersiz istek!",
            data: valErrs
        });
    }
    return valErrs;
}

function f_suz_dogrula(_tipi, _inObject, _bProtectSource) {

    if (_bProtectSource) return f_dogrula(_tipi, _inObject);

    var valid = ajvFilter.validate(_tipi, _inObject);

    if (!valid) console.error(ajvFilter.errors);

    return ajvFilter.errors;
}

function f_suz_klonla(_tipi, _inObject) {
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
}

/**
 * ID li şemayı getirecek
 * @param {SCHEMA_ID} _tipi
 * @returns {Object}
 */
function f_get_schema(_tipi) {
    var tipinSemasi = ajv.getSchema(_tipi);

    if (tipinSemasi.errors) {
        console.error("/////////////// Şema bulunamadı. Yine mi harf hatası var acaba \\\\\\\\\\\\\\");
    } else {
        return tipinSemasi.schema;
    }
}

/**
 * ID li şemadan default object yaratacak
 * @param {SCHEMA_ID} _tipi
 * @returns {Object}
 */
function f_create_default_object(_tipi) {

    return (typeof  _tipi === "string")
        ? defaults(f_get_schema(_tipi), definitons)
        : defaults(_tipi, definitons);
}

//console.log(JSON.stringify(f_create_default_object("/node/schema/ortak/ihale_es")))
//console.log(JSON.stringify(f_get_schema("/node/schema/ortak/ihale_es")))


/** @class Schema */
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
    /** @type {SCHEMA_ID} */
    SCHEMA: sema.SCHEMA_ID,
    SABIT: {
        "OLAY": {
            GOREV_EKLENDI: "OLAYLAR:GOREV:EKLENDI",
            GOREV_SILINDI: "OLAYLAR:GOREV:SILINDI",
            ILETI_EKLENDI: "OLAYLAR:ILETI:EKLENDI",
            ILETI_SILINDI: "OLAYLAR:ILETI:SILINDI",
            DIKKAT_EKLENDI: "OLAYLAR:DIKKAT:EKLENDI",
            DIKKAT_SILINDI: "OLAYLAR:DIKKAT:SILINDI",
            IHALE_GIZLENDI: "OLAYLAR:IHALE:GIZLENDI",
            IHALE_GIZLENDI_IPTAL: "OLAYLAR:IHALE:GIZLENDI:IPTAL",
            KALEM_GIZLENDI: "OLAYLAR:KALEM:GIZLENDI",
            KALEM_GIZLENDI_IPTAL: "OLAYLAR:KALEM:GIZLENDI:IPTAL",
            KURUM_GIZLENDI: "OLAYLAR:KURUM:GIZLENDI",
            KURUM_GIZLENDI_IPTAL: "OLAYLAR:KURUM:GIZLENDI:IPTAL",
            IHALE_TARIHI_X_GUN_KALA: "OLAYLAR:IHALE:TARIHI:X:GUN:KALA",
            IHALE_EKLENDI: "OLAYLAR:IHALE:EKLENDI"
            , IHALE_GUNCELLENDI: "OLAYLAR:IHALE:GUNCELLENDI"
            , IHALE_SILINDI: "OLAYLAR:IHALE:SILINDI"
            , IHALE_TARIHI_ERTELENDI: "OLAYLAR:IHALE:TARIHI:ERTELENDI"
            , KALEM_DURUMU_GUNCELLENDI: "OLAYLAR:KALEM:DURUMU:GUNCELLENDI"
            , KALEM_EKLENDI: "OLAYLAR:KALEM:EKLENDI"
            , KALEM_GUNCELLENDI: "OLAYLAR:KALEM:GUNCELLENDI"
            , KALEM_IPTAL: "OLAYLAR:KALEM:DURUMU:IPTAL_EDILDI"
            , KALEM_ITIRAZ_EDILDI: "OLAYLAR:KALEM:DURUMU:ITIRAZ_EDILDI"
            , KALEM_ITIRAZ_KABUL: "OLAYLAR:KALEM:DURUMU:ITIRAZ_KABUL_EDILDI"
            , KALEM_ITIRAZ_RED: "OLAYLAR:KALEM:DURUMU:ITIRAZ_RED_EDILDI"
            , KALEM_KATILIYORUZ: "OLAYLAR:KALEM:DURUMU:KATILIYORUZ"
            , KALEM_ITIRAZ_EDILECEK: "OLAYLAR:KALEM:DURUMU:ITIRAZ_EDILECEK"
            , KALEM_SILINDI: "OLAYLAR:KALEM:SILINDI"
            , KULLANICI_EKLENDI: "OLAYLAR:KULLANICI:EKLENDI"
            , KULLANICI_GUNCELLENDI: "OLAYLAR:KULLANICI:GUNCELLENDI"
            , KULLANICI_SILINDI: "OLAYLAR:KULLANICI:SILINDI"
            , KURUM_EKLENDI: "OLAYLAR:KURUM:EKLENDI"
            , KURUM_GUNCELLENDI: "OLAYLAR:KURUM:GUNCELLENDI"
            , KURUM_SILINDI: "OLAYLAR:KURUM:SILINDI"
            , ROL_EKLENDI: "OLAYLAR:ROL:EKLENDI"
            , ROL_GUNCELLENDI: "OLAYLAR:ROL:GUNCELLENDI"
            , ROL_SILINDI: "OLAYLAR:ROL:SILINDI"
            , TAHTA_ANAHTAR_EKLENDI: "OLAYLAR:TAHTA:ANAHTAR:EKLENDI"
            , TAHTA_ANAHTAR_SILINDI: "OLAYLAR:TAHTA:ANAHTAR:SILINDI"
            , TEKLIF_DURUMU_GUNCELLENDI: "OLAYLAR:TEKLIF:DURUMU:GUNCELLENDI"
            , TEKLIF_EKLENDI: "OLAYLAR:TEKLIF:EKLENDI"
            , TEKLIF_GUNCELLENDI: "OLAYLAR:TEKLIF:GUNCELLENDI"
            , TEKLIF_IHALEDEN_ATILDI: "OLAYLAR:TEKLIF:DURUMU:IHALEDEN_ATILDI"
            , TEKLIF_REDDEDILDI: "OLAYLAR:TEKLIF:DURUMU:REDDEDILDI"
            , TEKLIF_KAZANDI: "OLAYLAR:TEKLIF:DURUMU:KAZANDI"
            , TEKLIF_SILINDI: "OLAYLAR:TEKLIF:SILINDI"
            , URUN_ANAHTAR_EKLENDI: "OLAYLAR:URUN:ANAHTAR:EKLENDI"
            , URUN_ANAHTAR_SILINDI: "OLAYLAR:URUN:ANAHTAR:SILINDI"
            , URUN_EKLENDI: "OLAYLAR:URUN:EKLENDI"
            , URUN_GUNCELLENDI: "OLAYLAR:URUN:GUNCELLENDI"
            , URUN_SILINDI: "OLAYLAR:URUN:SILINDI"
            , TAHTA_EKLENDI: "OLAYLAR:TAHTA:EKLENDI"
            , TAHTA_GUNCELLENDI: "OLAYLAR:TAHTA:GUNCELLENDI"
            , TAHTA_SILINDI: "OLAYLAR:TAHTA:SILINDI"
            , TAHTA_AYRIL: "OLAYLAR:TAHTA:AYRIL"
        },
        "URL": {
            "LOCAL": "http://127.0.0.1:3000"
        },
        "URL_QUERY": {
            "SORT": {
                "ihale": {
                    "yapilmaTarihi": "IhaleTarihi",
                    "ihaleninSistemeEklenmeTarihi": "SistemeEklenmeTarihi"
                },
                "kurum": {
                    "Adi": "Adi"
                }
            },
            "KRITER": {
                "AKTIFLER": "aktifler",
                "TAKIPTEKILER": "takiptekiler",
                "GIZLENENLER": "gizlenenler",
                "SILINENLER": "silinenler",
                "EZILENLER": "ezilenler"
            }
        },
        "TABLO_ADI": {
            "IHALE": "ihale",
            "IHALE_DUNYASI": "ihale_dunyasi",
            "KALEM": "kalem",
            "TEKLIF": "teklif",
            "KURUM": "kurum",
            "URUN": "urun",
            "YORUM": "yorum",
            "ANAHTAR": "anahtar",
            "KULLANICI": "kullanici"
        },
        "ONAY_DURUM": {
            "teklif": {
                "KAZANDI": 1,
                "TEKLIF": 2,
                "REDDEDILDI": 3,
                "IHALEDEN_ATILDI": 4
            },
            "kalem": {
                "KATILIYORUZ": 1,
                "ILK_KAYIT": 2,
                "ITIRAZ_EDILECEK": 3,
                "ITIRAZ_EDILDI": 4,
                "ITIRAZ_KABUL": 5,
                "ITIRAZ_RED": 6,
                "IPTAL": 7
            }
        },
        "UYARI": {
            "MAIL": "mail",
            "ALERT": "alert",
            "SMS": "sms",
            "TODO": "todo"
        },
        "PARA_BIRIMLERI": [
            {
                "Id": 1,
                "Kodu": "EUR",
                "Adi": "Euro",
                "Sembolu": "€"
            },
            {
                "Id": 2,
                "Kodu": "TRY",
                "Adi": "Türk Lirası",
                "Sembolu": "TL"
            },
            {
                "Id": 3,
                "Kodu": "USD",
                "Adi": "Amerikan Doları",
                "Sembolu": "$"
            },
            {
                "Id": 4,
                "Kodu": "GBP",
                "Adi": "İngiliz Sterlini",
                "Sembolu": "£"
            },
            {
                "Id": 5,
                "Kodu": "JPY",
                "Adi": "Japon Yeni",
                "Sembolu": "¥"
            },
            {
                "Id": 6,
                "Kodu": "CAD",
                "Adi": "Kanada Doları",
                "Sembolu": "C$"
            },
            {
                "Id": 7,
                "Kodu": "AUD",
                "Adi": "Avustralya Doları",
                "Sembolu": "$AU"
            },
            {
                "Id": 8,
                "Kodu": "CHF",
                "Adi": "İsviçre Frangı",
                "Sembolu": "SFr"
            },
            {
                "Id": 9,
                "Kodu": "CNY",
                "Adi": "Yuan",
                "Sembolu": "¥"
            },
            {
                "Id": 10,
                "Kodu": "SGD",
                "Adi": "Singapur Doları",
                "Sembolu": "$S"
            },
            {
                "Id": 11,
                "Kodu": "HKD",
                "Adi": "Hong Kong Doları",
                "Sembolu": "HK$"
            },
            {
                "Id": 12,
                "Kodu": "ZAR",
                "Adi": "Güney Afrika Cum. Randı",
                "Sembolu": "R"
            },
            {
                "Id": 13,
                "Kodu": "NZD",
                "Adi": "Yeni Zelanda Doları",
                "Sembolu": "NZ$"
            },
            {
                "Id": 14,
                "Kodu": "DKK",
                "Adi": "Danimarka Kronu",
                "Sembolu": "DKr"
            },
            {
                "Id": 15,
                "Kodu": "MXN",
                "Adi": "Meksika Pezosu",
                "Sembolu": "N$"
            }
        ],
        "PARA_BIRIM": {
            "EUR": 1,
            "TRY": 2,
            "USD": 3,
            "GBP": 4,
            "JPY": 5,
            "CAD": 6,
            "AUD": 7,
            "CHF": 8,
            "CNY": 9,
            "SGD": 10,
            "HKD": 11,
            "ZAR": 12,
            "NZD": 13,
            "DKK": 14,
            "MXN": 15
        },
        "KUR_TIPLERI": [
            {
                "Id": 1,
                "Adi": "MB Döviz Alış",
                "Kodu": "AL",
                "Aciklama": "Merkez Bankası Döviz Alış"
            },
            {
                "Id": 2,
                "Adi": "MB Döviz Satış",
                "Kodu": "SAT",
                "Aciklama": "Merkez Bankası Döviz Satış"
            },
            {
                "Id": 3,
                "Adi": "MB Döviz Alış",
                "Kodu": "EFAL",
                "Aciklama": "Merkez Bankası Döviz Efektif Alış"
            },
            {
                "Id": 4,
                "Adi": "MB Döviz Satış",
                "Kodu": "EFSAT",
                "Aciklama": "Merkez Bankası Döviz Efektif Satış"
            }
        ]
    }
};

module.exports = result;