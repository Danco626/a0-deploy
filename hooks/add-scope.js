/**
@param {object} client - information about the client
@param {string} client.name - name of client
@param {string} client.id - client id
@param {string} client.tenant - Auth0 tenant name
@param {object} client.metadata - client metadata
@param {array|undefined} scope - array of strings representing the scope claim or undefined
@param {string} audience - token's audience claim
@param {object} context - additional authorization context
@param {object} context.webtask - webtask context
@param {function} cb - function (error, accessTokenClaims)
*/
module.exports = function(client, scope, audience, context, cb) {
  var access_token = {};
  access_token.scope = scope;
  console.log(context);
  access_token['https://example.com/claim'] = context.body.userId;
  if(client.id === '1EkfJjqZmb83t2M6p1wbg3Xbjxn931b5' && client.metadata.approve === 'true')
  {
    access_token.scope = scope;
    access_token.scope.push('approve:timesheets');
  }
  cb(null, access_token);
};
