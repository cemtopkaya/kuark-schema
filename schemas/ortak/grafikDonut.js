module.exports = {
  "id": "/node/schema/ortak/grafikDonut",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "GrafikDonut",
  "description": "Donut grafik",
  "type": "object",
  "definitions": {},
  "additionalProperties": false,
  /**
   * @class GrafikDonut
   */
  "properties": {
    "Toplam": {"type": "integer"},
    "Gecerli": {"type": "integer"},
    "Gecersiz": {"type": "integer"}
  }
};