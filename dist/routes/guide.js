"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const guide_controller_1 = require("../controllers/guide.controller");
router.route('/guides')
    .get(guide_controller_1.getGuides)
    .post(guide_controller_1.createGuide);
router.route('/guides/:id')
    .get(guide_controller_1.getGuide)
    .delete(guide_controller_1.deleteGuide)
    .put(guide_controller_1.updateGuide);
exports.default = router;
//# sourceMappingURL=guide.js.map