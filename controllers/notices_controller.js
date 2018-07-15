const Noti = require('../models/notices_model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.crear = function (req, res) {
  let notice = new Notices (
    {
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      category: req.body.category,
      date: Date.now()
    }
  );

  notice.save (function (err) {
    if(err) {
      return next (err);
    }
    res.send('Notice created successfully');
  });
}
