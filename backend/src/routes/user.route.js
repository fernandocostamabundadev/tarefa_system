const { Router } = require("express");
const router = Router();

const userController = require("../controller/user.controller");

router.get("/user", userController.findAll);
router.post("/user", userController.createUser);
router.get("/user/email/:email", userController.findByEmail);
router.get("/user/:id", userController.findById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
