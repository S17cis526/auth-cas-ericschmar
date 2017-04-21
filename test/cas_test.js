var assert = require('assert');
var authCAS = require('./lib/auth-cas');
var http = require('http');
var config = require('./config.json');

it('A CAS host must be specified', function(){
  assert.throws(
    () => {
      new authCAS();
    }, /CAS Host must be supplied/
  );

  assert.throws( () => { new authCAS(undefined)}, "CAS Host must be supplied");
});

it('A CAS host must be specified', function(){
  assert.throws(
    () => { new authCAS('https://casHost.com')},
    /CAS host must be specified/
  )
});


it('visiting the login page should redirect to the CAS server login', function(done){
  http.get(config.host + '/login', function(res){
    assert.equal(res.statusCode, 302);
    var redirect = url.parse(res.headers.location);
    var expected = url.parse(config.casHost)
    var service = encodeURIComponent(config.host + '/login');
    assert.equal(redirect.protocol, expected.protocol);
    assert.equal(redirect.port, expected.port);
    assert.equal(redirect.pathname, '/login');
  })
})
