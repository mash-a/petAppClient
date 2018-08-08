export const AUTH_CONFIG = {
    domain: 'mash-a.auth0.com',
    clientId: 'FGyvququx8Zf8uU451YElo6qEt9EBNrb',
    redirectUri: 'https://bkbarkapp.firebaseapp.com/callback' || 'https://bkbarkapp.herokuapp.com/callback',
    audience: 'https://bkbarkapp.herokuapp.com/api/petApp',
    responseType: 'token id_token',
    scope: 'openid profile',
}