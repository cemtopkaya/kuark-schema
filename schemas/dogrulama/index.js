module.exports = {
  "id": "/node/schema/dogrulama/index",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Dogrulama",
  "description": "Kullanıcı arayüzündeki doğrulama mesajlarını taşır.",
  "definitions": {
    "KullaniciGirisi": {"$ref": "/node/schema/kullanici/kullaniciGiris"}
  },
  "properties": {
    "KullaniciGirisi": {"$ref": "#/definitions/KullaniciGirisi"}
  }
};