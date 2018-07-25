export const AUTH_CONFIG = {
    domain: 'mash-a.auth0.com',
    clientId: 'FGyvququx8Zf8uU451YElo6qEt9EBNrb',
    redirectUri: 'http://localhost:3000/callback' || 'http://localhost:3004/callback',
    audience: 'http://localhost:3004/api/petApp',
    responseType: 'token id_token',
    scope: 'openid profile',
}