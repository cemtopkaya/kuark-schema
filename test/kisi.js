exports.kisi = {
    name: "kisi",
    type: "object",
    additionalProperties: false,
    required: ["adiSoyadi", "cinsiyeti"],
    properties: {
        adiSoyadi: {type: "string", default: "Duygu akmaz"},
        eposta: {type: "string"},
        cinsiyeti: {type: "string", enum: ["kadin", "erkek"], default: "kadin"},
        fatura_adresi: {$ref: "#/definitions/address"},
        kargo_adresi: {
            type: "Array",
            items: [
                {$ref: "#/definitions/address"}
            ]
        }
    },
    definitions: {
        address: require('./address').address
    }
};