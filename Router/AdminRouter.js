const express = require('express');
const router = express.Router();

const {createPost, getPosts} = require('../Controller/AdminHandler');

router.route('/post').post(createPost);
router.route('/get/getall').get(getPosts);

module.exports = router;