const express = require("express");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/admin", authenticateToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

router.get(
  "/editor",
  authenticateToken,
  authorizeRoles("editor"),
  (req, res) => {
    res.json({ message: "Welcome to Editor Dashboard" });
  }
);

router.get(
  "/viewer",
  authenticateToken,
  authorizeRoles("viewer"),
  (req, res) => {
    res.json({ message: "Welcome to Viewer Dashboard" });
  }
);

module.exports = router;
