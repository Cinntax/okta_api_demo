var url = 'https://' + org;

var oktaSignIn = new OktaSignIn({
    baseUrl: url
});

oktaSignIn.session.get(function (res) {
  console.log(res);
  if (res.status === 'ACTIVE') {
    console.log('have session');
    console.log('user_id = ' + res.userId);
    if (oktaSignIn.tokenManager.get('idToken')) {
        var id_token = oktaSignIn.tokenManager.get('idToken').idToken;
        var id_token_parts = id_token.split('.');
        document.getElementById('id_token').innerHTML = id_token;
        document.getElementById('id_token_header').innerHTML = prettyPrint(window.atob(id_token_parts[0]));
        document.getElementById('id_token_decoded').innerHTML = prettyPrint(window.atob(id_token_parts[1]));
    }
    if (oktaSignIn.tokenManager.get('accessToken')) {
        var access_token = oktaSignIn.tokenManager.get('accessToken').accessToken;
        var access_token_parts = access_token.split('.');
        document.getElementById('access_token').innerHTML = access_token;
        document.getElementById('access_token_header').innerHTML = prettyPrint(window.atob(access_token_parts[0]));
        document.getElementById('access_token_decoded').innerHTML = prettyPrint(window.atob(access_token_parts[1]));

    }
  }
});


function prettyPrint(ugly) {
    var obj = JSON.parse(ugly);
    return JSON.stringify(obj, undefined, 4);
}



