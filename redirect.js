function redirect(url, code) {
	this.writeHead(code || 303, {Location: url});

	this.end();
}


module.exports = function(req, res, next) {
	res.redirect = redirect;

	next();
};
