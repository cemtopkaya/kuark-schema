exports.address = {
    "type": "object","title": "object",
    description:"bu da açıklaması",
    "properties": {
        "street_address": {"type": "string", default: "street name"},
        "city": {"type": "string"},
        "state": {"type": "string", default: "state name"}
    },
    "required": ["street_address", "city", "state"]
};