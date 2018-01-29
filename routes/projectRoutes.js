const Project = require('../models/Project');
const requireLogin = require('../middlewares/requireLogin');
const isAdmin = require('../middlewares/isAdmin'); 

module.exports = app => {
    app.get('/api/projects', async (req, res) => {
        const projects = await Project.find({});
        res.send(projects);
    });

    app.post('/api/projects', requireLogin, isAdmin, async (req, res) => {
        const project = new Project({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            githubUrl: req.body.githubUrl
        });
        await project.save();
        
        const projects = await Project.find({});
        res.send(projects);
    });

    app.get('/api/projects/:id', async (req, res) => {
        const project = await Project.findOne({_id: req.params.id});
        res.send(project);
    });

    app.put('/api/projects/:id', requireLogin, isAdmin, async (req, res) => {
        console.log(req.body);
        await Project.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                    githubUrl: req.body.githubUrl
                }
            }
        );

        const projects = await Project.find({});
        res.send(projects);
    });

    app.delete('/api/projects/:id', requireLogin, isAdmin, async (req, res) => {
        await Project.remove({ _id: req.params.id });
        const projects = await Project.find({});
        res.send(projects);    
    });
};

