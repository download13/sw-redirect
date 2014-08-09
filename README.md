# sw-redirect

Convenience middleware for HTTP 3xx redirects. Adds a `.redirect()` method to the `res` object which sends a redirect to the chosen URL.

## Install

`npm install sw-redirect`

## Example

```javascript
var redirect = require('sw-redirect');

// With express
app.use(redirect);

// or use as inline middleware
app.get('/example/moved', redirect, function(req, res) {
	res.redirect('/another/page', 307);
});
```

## API

`res.redirect(url, [code])`

* url - Destination URL
* code - Status code, optional, defaults to 303
