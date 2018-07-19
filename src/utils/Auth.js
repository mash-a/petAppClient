import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'mash-a.auth0.com',
        clientID: 'FGyvququx8Zf8uU451YElo6qEt9EBNrb',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://mash-a.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    login() {
        this.auth0.authorize();
      }
}

export default Auth;