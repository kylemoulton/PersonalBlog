const BlogComment = require('../models/BlogComment');
const BlogPost = require('../models/BlogPost');
const requireLogin = require('../middlewares/requireLogin');
const isAdmin = require('../middlewares/isAdmin'); 

module.exports = app => {
    app.get('/api/blog_posts', async (req, res) => {
        const blogs = await BlogPost.find({});
        res.send(blogs);
    });

    app.post('/api/blog_posts', requireLogin, isAdmin, async (req, res) => {
        const post = new BlogPost({
            title: req.body.title,
            content: req.body.content,
            date: Date.now()
        });
        await post.save();
    });

    app.get('/api/blog_posts/:id', async (req, res) => {
        const post = await BlogPost.findOne({_id: req.params.id});
        res.send(post);
    });

    app.put('/api/blog_posts/:id', requireLogin, isAdmin, async (req, res) => {
        await BlogPost.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    lastUpdated: Date.now()
                }
            }
        );

        const blogs = await BlogPost.find({});
        res.send(blogs);
    });

    app.delete('/api/blog_posts/:id', requireLogin, isAdmin, async (req, res) => {
        await BlogPost.remove({ _id: req.params.id });
        const blogs = await BlogPost.find({});
        res.send(blogs);    
    });

    app.post('/api/blog_posts/:id/comments', async (req, res) => {
        const blogPost = await BlogPost.findOne({_id: req.params.id});

        blogPost.comments.push({
            username: req.body.username,
            content: req.body.content,
            date: Date.now()
        });

        await blogPost.save();
      
        const blogs = await BlogPost.find({});
        res.send(blogs);
    });

    app.delete('/api/blog_posts/:id/comments/:comment_id', requireLogin, isAdmin, async (req, res) => {
        await BlogPost.updateOne(
            {
                _id: req.params.id
            },
            {
                $pull: { 
                    comments: {
                        _id: req.params.comment_id
                    }
                }
        });
        
        const blogs = await BlogPost.find({});
        res.send(blogs);
    });
};

