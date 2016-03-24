exports.def_address = {
  "definitions": {
    "address": {
      "type": "object","title": "object",
      "properties": {
        "street_address": { "type": "string", "default":"caddesi" },
        "city":           { "type": "string" },
        "state":          { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  }
};