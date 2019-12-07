"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const guideSchema = new mongoose_1.Schema({
    subject: {
        type: String,
        required: true,
    },
    numberLab: {
        type: Number
    },
    semester: {
        type: String,
        required: true
    },
    docent: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Guide', guideSchema);
//# sourceMappingURL=Guide.js.map