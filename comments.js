// Create web server application
// Creator: Ekaterina Kostyleva
// Date: 23.09.2019
const express = require('express');
const router = express.Router();
const comments = require('../models/comments');
// GET
router.get('/', function(req, res) {
    comments.getComments(function(err, rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
    });
});
// GET with id
router.get('/:id', function(req, res) {
    comments.getCommentById(req.params.id, function(err, rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
    });
});
// POST
router.post('/', function(req, res) {
    comments.addComment(req.body, function(err, count) {
        if(err) { res.json(err); }
        else { res.json(req.body); }
    });
});
// PUT
router.put('/:id', function(req, res) {
    comments.updateComment(req.params.id, req.body, function(err, rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
    });
});
// DELETE
router.delete('/:id', function(req, res) {
    comments.deleteComment(req.params.id, function(err, count) {
        if(err) { res.json(err); }
        else { res.json(count); }
    });
});
module.exports = router;