const express = require("express");
const Comment = require("../models/Comment");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add a comment to a blog post
router.post("/:postId", authMiddleware, async (req, res) => {
    try {
        const { content } = req.body;
        const { postId } = req.params;

        if (!content) {
            return res.status(400).json({
                message: "Comment content is required"
            });
        }

        const comment = new Comment({
            content,
            author: req.user.userId,
            post: postId
        });

        await comment.save();

        res.status(201).json({
            message: "Comment added successfully",
            comment
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add comment",
            error: error.message
        });
    }
});

// Get comments for a blog post
router.get("/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({
            post: req.params.postId
        })
        .populate("author", "name email")
        .sort({ createdAt: -1 });

        res.json(comments);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch comments",
            error: error.message
        });
    }
});

// Delete a comment
router.delete("/:id", authMiddleware, async (req, res) => {
    try {

        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        if (comment.author.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "You can only delete your own comment"
            });
        }

        await Comment.findByIdAndDelete(req.params.id);

        res.json({
            message: "Comment deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to delete comment",
            error: error.message
        });

    }
});

module.exports = router;