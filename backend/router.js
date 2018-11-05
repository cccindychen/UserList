'use strict';
const express    = require('express');  
const app = express();      
const router = express.Router();     
const bodyParser = require('body-parser');

const models = require('./db');
const User = models.User;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to our api!' });   
});

router.get('/users', (req, res) => {
    getAllUsers(req, res);
});

router.get('/users/:userId', (req, res) => {
    getOneUser(req, res, req.params.userId);
});

router.post('/users', (req, res) => {
    createOneUser(req, res);
});

router.put('/users/:userId', (req, res) => {
    editOneUser(req, res, req.params.userId);
});

router.delete('/users/:userId', (req, res) => {
    deleteOneUser(req, res, req.params.userId);
});


const getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({users});
    });
};

const getOneUser = (req, res, id) => {
    User.findById(id, (err, user) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({user});
    });
}

const createOneUser = (req, res) => {
    const user = new User(req.body);
    user.save(err => {
        if (err) res.status(500).send(err);
        else res.status(200).json({user});
    });
};

const editOneUser = (req, res, id) => {
    User.findByIdAndUpdate(id, req.body, {new: true}, 
    (err, user) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({user});
    });
};

const deleteOneUser = (req, res, id) => {
    User.findByIdAndRemove(id, err => {
        if (err) res.status(500).send(err);
        else {
            const response = {
                message: "User successfully deleted",
                id: id
            };
            res.status(200).send(response);
        }
    });
};


module.exports = router;