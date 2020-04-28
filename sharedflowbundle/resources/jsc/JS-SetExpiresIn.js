var exp = context.getVariable( 'response_exp');
var iat = context.getVariable( 'response_iat');
var currentTimeMilliSeconds = context.getVariable( 'system.timestamp');
var expMilliSeconds = exp * 1000;
// Make sure to use current time, as original JWT may have been gotten some time before.
// expire Edge token 2 seconds after or before JWT?
// After, then Edge token will be valid but JWT will be expired and invalid on backend (check token expired on request)
// Before, then Edge token will be invalid but JWT will be valid for 2 more seconds (bad situation)
var expiresInMilliSeconds = Number(expMilliSeconds - currentTimeMilliSeconds + 2000);
context.setVariable( 'expiresInMilliSeconds', expiresInMilliSeconds.toString());
