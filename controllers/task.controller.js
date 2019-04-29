const Task = require('../models/task.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
//creatin task
exports.task_create = function (req, res) {
    let task = new Task({
        title: req.body.title,
        tags: req.body.tags,
    });

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Task Added successfully')
    })
};

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res) {
   Task.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, product) {
        if (err) return next(err);
        res.send('Task gets udpated.');
    });
};

exports.task_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Task is done. Well Done!');
    })
};