// load the user model
var User = require('./models/user.js');

// expose the routes to our app with module.exports
module.exports = function(app) {
	// api ---------------------------------------------------------------------
    // get all users
    app.get('/api/users', function(req, res) {
		// use mongoose to get all users in the database
		User.find(function(err, users) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all users in JSON format
		});
    });

    // get a user
    app.post('/api/user', function(req, res) {
    	User.find({email: req.body.email, password: req.body.password}, function(err, user) {
    		if(err) 
    			res.send(err);

    		res.json(user);
    	});
    	// res.json(req.body);
    });

    // create user and send back all users after creation
    app.post('/api/users', function(req, res) {
    	User.create({

    	}, function(err, user) {
    		if(err)
    			res.send(err);

    		User.find(function(err, users) {
    			if(err)
    				res.send(err);
    			res.json(users);
    		})
    	});
    });

    // delete a user
    app.delete('/api/users/:user_id', function(req, res) {

    });

    // application -------------------------------------------------------------
    // app.get('*', function(req, res) {
    //     res.sendfile('../../app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
};