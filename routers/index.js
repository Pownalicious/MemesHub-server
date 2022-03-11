const { Router } = require("express");
const router = new Router();

const { toData } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const Post = require("../models").post;
const Comment = require("../models").comment;
const Like = require("../models").like;
const User = require("../models").user;
const Genre = require("../models").genre;

//GET POST INCLUDING USER DATA
router.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    if (posts) {
      res.send(posts);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (e) {
    next(e);
  }
});

//GET POST
router.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  // find the post
  const onePost = await Post.findByPk(id);
  if (!onePost) {
    return res.status(404).send("Post not found");
  }
  return res.send(onePost);
});

//GET COMMENTS
router.get("/post/:id/comments", async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.findAll({
    where: { postId: id },
  });
  if (comments === null) {
    return res.status(404).send(`Posts not found`);
  }
  return res.send(comments);
});

//GET GENRES
router.get("/genres", async (req, res) => {
  // find the genres
  const genres = await Genre.findAll();
  if (!genres) {
    return res.status(404).send("Genre not found");
  }
  return res.send(genres);
});

//GET LIKES
router.get("/post/:id/likes", async (req, res) => {
  try {
    const { id } = req.params;
    const likes = await Like.findAll({
      where: { postId: id },
    });
    if (likes === null) {
      return res.status(404).send("Likes not found");
    }
    return res.send(likes);
  } catch (error) {
    console.log(error, "error");
  }
});

//POST MEME
router.post("/meme", authMiddleware, async (req, res) => {
  const authHeader = req.headers["authorization"];
  const { userId } = toData(authHeader.replace("Bearer ", ""));
  try {
    const oneUser = await User.findByPk(userId);

    // get request body => title, imageUrl
    const { title, imageUrl, genreId } = req.body;
    if (!oneUser || !title || !imageUrl) {
      return res.status(400).send("No user title and imageURL provided");
    }
    console.log(req.body);
    // Go to DB and create new meme
    const newMeme = await Post.create({ title, imageUrl, genreId, userId });
    // Send new user back
    res.send(newMeme);
  } catch (e) {
    console.log(e.message);
  }
});

//POST COMMENT
router.post("/comment", authMiddleware, async (req, res) => {
  const authHeader = req.headers["authorization"];
  const { userId } = toData(authHeader.replace("Bearer ", ""));
  try {
    const oneUser = await User.findByPk(userId);

    // get request body
    const { comment, postId } = req.body;
    if (!oneUser || !comment) {
      return res.status(400).send("No user or comment provided");
    }

    // Go to DB and create new comment with params
    const newComment = await Comment.create({ comment, userId, postId });
    // Send new user back
    res.send(newComment);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  return res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
