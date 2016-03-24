module.exports = {
  "id": "/node/schema/kullanici/kullaniciGiris",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "KullaniciGiris",
  "type": "object",
  "required": [
    "eposta"
  ],
  /**
   * @class KullaniciGiris
   */
  "properties": {
    "eposta": {
      "type": "string"
    },
    "hata": {
      "type": "string"
    }
  }
}