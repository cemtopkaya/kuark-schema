/**
 * Created by cem.topkaya on 16.03.2016.
 */
var expect = require('chai').expect,
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