var expiresInSeconds = context.getVariable("token_expires_in");
var currentTimeInMills = Number(expiresInSeconds * 1000).toString();
context.setVariable("token_validation_expires_in", currentTimeInMills);