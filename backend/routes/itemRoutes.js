const express = require("express");
const router = express.Router();
const Item = require("../models/item")

// GET all items
router.get("/" , async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST new item
router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// PUT update item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.json(updatedItem);
  } catch (err) {
    console.log("Update error:", err.message); 
    res.status(500).json({ message: err.message });
  }
});

// DELETE item
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;