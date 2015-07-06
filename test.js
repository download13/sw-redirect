var compose = require('mw-compose');

var request = require('supertest');

var assert = require('assert');

var mw = require('./redirect');


describe('Middleware', function() {
	it('takes a request, response, and next function', function(done) {
		mw({}, {}, done);
	});

	it('adds a redirect function to res', function() {
		var res = {};
		mw({}, res, function() {});
		assert.equal(typeof res.redirect, 'function');
	});
});

describe('res.redirect()', function() {
	it('defaults to sending a 303 status', function(done) {
		request(compose(mw, function(req, res) {
			res.redirect('/');
		}))
		.get('/')
		.expect(303, done);
	});

	it('sends a Location header', function(done) {
		request(compose(mw, function(req, res) {
			res.redirect('/test');
		}))
		.get('/')
		.expect('Location', '/test')
		.expect(303, done);
	});

	it('can change the status via an option', function(done) {
		request(compose(mw, function(req, res) {
			res.redirect('/', 301);
		}))
		.get('/')
		.expect(301, done);
	});
});
