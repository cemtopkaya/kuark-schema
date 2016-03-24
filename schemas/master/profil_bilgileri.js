module.exports = {
  "id": "/node/schema/master/profil_bilgileri",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Kullanıcının paylaşmak isteyeceği bilgileri seçtiği şema",
  "type": "object",
  "title": "KullaniciProfil",
  "additionalProperties": false,
  /**
   * @class KullaniciProfil
   */
  "properties": {
    "Id": {},
    "AdiSoyadi":{},
    "Tel1": {},
    "Tel2": {},
    "GSM": {},
    "FacebookAdresi": {},
    "TwitterAdi": {}
  }
}

/*
tahtanın üyelerini çek > 1,4,9
hmget semalar kullanici:1:profil kullanici:4:profile kullanici:9:profil
hmget kullanici 1 4 9

ajv.validate(arrReplySemalar[0], arrReplyKullanicilar[0])
res.json(arrReplyKullanicilar)
*/

/*
ajv.complie({id:"kullanici:4:profile"})


ajv.validate("kullanici:4:profile",{})

*/