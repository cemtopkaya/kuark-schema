/**
 * Created by cem.topkaya on 16.03.2016.
 */
var expect = require('chai').expect,
    /** @type {Schema} */
    schema = require('../index');

describe('Şemalar ulaşılabilir', function () {

    it('Şema objesine erişilebilir', function () {
        expect(schema.SCHEMA.DB.KURUM).to.eql("/node/schema/ortak/kurum_db");
    });

    it('Şemadan yeni kurum nesnesi yaratılır', function () {
        var kurum =schema.f_create_default_object(schema.SCHEMA.DB.KURUM);
        expect(kurum).to.have.property('Id');
    });

    it('Tüm schema idlerinden schema bilgisi döner ve schema da tanımlı id ile aynı isimdedirler', function () {

        function getDeepProperty(obj) {
            if (typeof obj === "object") {
                for (var prop in obj) {
                    return getDeepProperty(obj[prop]);
                }
            } else {
                return obj;
            }
        }

        for (var prop in schema.SCHEMA_IDS) {
            var schema_id = getDeepProperty(schema.SCHEMA_IDS[prop]);
            //console.log("schema_id > ",schema_id);
            var sch = schema.f_get_schema(schema_id);
            expect(sch).to.be.ok;
            expect(sch.id).to.eql(schema_id);
        }
    })

    it('SABITlerden birine ulaşabilmek', function () {
        expect(schema.SABIT.URL_QUERY).to.be.an('object');
    })
});

describe("Şemadan doğru nesne oluşturuluyor mu",function(){


    it('Ihale Dünyası nesnesi oluşturmak', function () {
        var ihaleD = schema.f_create_default_object(schema.SCHEMA.IHALE_DUNYASI);
        console.log(ihaleD);
        expect(ihaleD).to.have.property('raw');
        expect(ihaleD).to.have.property('IhaleDunyasiId');
    });

    it('Ihale nesnesi oluşturmak', function () {
        var ihale = schema.f_create_default_object(schema.SCHEMA.IHALE);
        expect(ihale).to.have.property('Id');
        expect(ihale).to.have.property('Kalemler');
        expect(ihale).to.have.property('Takip');
        expect(ihale).to.have.property('DosyaEkleri');
        expect(ihale).to.have.property('IhaleProviders');
    });

    it('Ihale DB nesnesi oluşturmak', function () {
        var ihale = schema.f_create_default_object(schema.SCHEMA.DB.IHALE);
        expect(ihale).to.have.property('Id');
        expect(ihale).to.have.property('DosyaEkleri');

    });

    it('Ihale ES nesnesi oluşturmak', function () {
        var ihale = schema.f_create_default_object(schema.SCHEMA.ES.IHALE);
        expect(ihale).to.have.property('Id');
        expect(ihale).to.have.property('Kalemler');
        expect(ihale).to.have.property('DosyaEkleri');
        expect(ihale).to.have.property('IhaleProviders');

    });

    it('Ürün nesnesi oluşturmak', function () {
        var urun = schema.f_create_default_object(schema.SCHEMA.URUN);
        console.log(urun);
        expect(urun).to.have.property('Id');
        expect(urun).to.have.property('Adi');
        expect(urun).to.have.property('Uretici');

    });

    it('Ürün DB nesnesi oluşturmak', function () {
        var urun = schema.f_create_default_object(schema.SCHEMA.DB.URUN);
        expect(urun).to.have.property('Id');
        expect(urun).to.have.property('Adi');
        expect(urun).to.have.property('UreticiKurum_Id');

    });

    it('Ürün ES nesnesi oluşturmak', function () {
        var urun = schema.f_create_default_object(schema.SCHEMA.ES.URUN);
        expect(urun).to.have.property('Id');
        expect(urun).to.have.property('Adi');
        expect(urun).to.have.property('Uretici');

    });
})