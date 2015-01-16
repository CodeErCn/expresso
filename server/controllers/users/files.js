var mongoose = require('mongoose');
var fs = require('fs');
var User = mongoose.model('User');
imgPath = './public/img/person.png'; // path will have to be set during upload process

module.exports = {
	download: 	function(req, res){
		Schema.findOne({ _id: req.body.id }, function (err, doc) {
			// download pre-existing image in the database and write to public/clientviews/img folder if needed
			fs.writeFile('./public/img/people.png', doc.img.data, function (err,data) {
				if (err) { console.log(err); }
				else	 { console.log('successfully wrote to server. Check your img folder to be sure.')}
			});
			// the returned image data (aka doc) is incompatible with html without converting it to base64
			var buffer = doc.img.data;
			buffer = buffer.toString("base64");
			// send the string back to the controller, set the scope and view.
          	res.send(buffer);
		});
	},
	upload: 	function(req, res){
		// create a new schema to save file to DB
		var a = new Schema();
		// fill img data property of the file by reading from the filepath
    	a.img.data = fs.readFileSync(imgPath);
    	// set the contentType of the file, you may have to change this manually
    	a.img.contentType = 'image/png';
    	// save the uploaded image to DB
    	a.save(function (err, a) {
      		if (err) throw err;
      		console.error('saved img to mongo!');
		});
	}
}
