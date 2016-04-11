module.exports = {
  "id": "/node/schema/ortak/grafikDonut_urunTeklifOnay",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "GrafikDonut_UrunTeklifOnay",
  "description": "�r�n tekliflerinin onay durumuna g�re toplamlar�n�n donut grafikle g�sterimi",
  "type": "object",
  "definitions": {},
  "additionalProperties": false,
  /**
   * @class GrafikDonut_UrunTeklifOnay
   */
  "properties": {
    "ToplamKayitSayisi": {
      "type": "integer"
    },
    "Data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "OnayDurum": {
            "type": "string"
          },
          "Toplam": {
            "type": "number"
          }
        }
      },
      "default": []
    }
  }
};