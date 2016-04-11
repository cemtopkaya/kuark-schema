module.exports = {
  "id": "/node/schema/kullanici/kullaniciKayit",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "KullaniciKayit",
  "type": "object",
  "required": [
    "eposta"
  ],
  /**
   * @class KullaniciKayit
   */
  "properties": {
    "eposta": {
      "type": "string"
    },
    "hata": {
      "type": "string"
    }
  }
};