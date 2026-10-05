const express = require("express");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new blog post
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const post = new Post({
            title,
            content,
            author: req.user.userId
        });

        await post.save();

        res.status(201).json({
            message: "Blog post created successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create blog post",
            error: error.message
        });
    }
});

// Get all blog posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        res.json(posts);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blog posts",
            error: error.message
        });
    }
});

// Update a blog post
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Blog post not found"
            });
        }

        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "You can only edit your own post"
            });
        }

        post.title = title || post.title;
        post.content = content || post.content;

        await post.save();

        res.json({
            message: "Blog post updated successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update blog post",
            error: error.message
        });
    }
});


// Delete a blog post
router.delete("/:id", authMiddleware, async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Blog post not found"
            });
        }

        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "You can only delete your own post"
            });
        }

        await Post.findByIdAndDelete(req.params.id);

        res.json({
            message: "Blog post deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete blog post",
            error: error.message
        });
    }
});

// Get a single blog post
router.get("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
            .populate("author", "name email");

        if (!post) {
            return res.status(404).json({
                message: "Blog post not found"
            });
        }

        res.json(post);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch blog post",
            error: error.message
        });

    }
});

module.exports = router;