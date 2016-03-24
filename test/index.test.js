/**
 * Created by cem.topkaya on 16.03.2016.
 */
var expect = require('chai').expect;
var schema = require('../index');

describe('Şemalar ulaşılabilir', function () {
    it('Şema objesine erişilebilir', function () {
        expect(schema.SCHEMA.DB.KURUM).to.eql("/node/schema/ortak/kurum_db");
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
});