module.exports = {
  "id": "/node/schema/ortak/uyari",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Uyari",
  "description": "Uyarı bilgisi",
  "type": "object",
  "required": [
    "Id",
    "Olay",
    "Elastic",
    "Tahta_Id",
    "Islemler"
  ],
  "definitions": {
    "UyariKriter": {
      "$ref": "http:/node/schema/ortak/uyari_kriter"
    },
    "Uye": {
      "$ref": "http:/node/schema/kullanici/uye"
    },
    "Rol": {
      "$ref": "http:/node/schema/rol_yetkilendirme/rol"
    }
  },
  "additionalProperties": false,
  /**
   * @class Uyari
   */
  "properties": {
    "Id": {
      "type": "integer",
      "default": 0
    },
    "Adi": {
      "type": "string",
      "default": ""
    },
    "GorevAdi": {
      "type": "string",
      "default": ""
    },
    "Olay": {
      "type": "string",
      "default": ""
    },
    "Kriterler": {
      "type": "array",
      "item": {
        "$ref": "#/definitions/UyariKriter"
      },
      "default": []
    },
    "Islemler": {
      "type": "array",
      "default": []
    },
    "Kullanici_Id": {
      "type": "integer"
    },
    "Tahta_Id": {
      "type": "integer"
    },
    "Elastic": {
      "type": "object"
    },
    "Durumu": {
      "description": "Uyarının durumu true ise çalıştırılacak değilse çalıştırılmayacaktır",
      "type": "boolean",
      "default": "true"
    },
    "Rol_Idler": {
      "type": "array",
      "item": {
        "type": "int"
      },
      "default": []
    },
    "Uye_Idler": {
      "type": "array",
      "item": {
        "type": "int"
      },
      "default": []
    },
    "Uyeler": {
      "type": "array",
      "item": {
        "$ref": "#/definitions/Uye"
      },
      "default": []
    },
    "Roller": {
      "type": "array",
      "item": {
        "$ref": "#/definitions/Rol"
      },
      "default": []
    }
  }
}