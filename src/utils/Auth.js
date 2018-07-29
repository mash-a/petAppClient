/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import { AUTH_CONFIG } from './constants';

const LOGIN_SUCCESS_PAGE = "/profile";
const LOGIN_FAILURE_PAGE = "/"; 

class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.redirectUri,
        audience: AUTH_CONFIG.audience,
        responseType: AUTH_CONFIG.responseType,
        scope: AUTH_CONFIG.scope,
    })

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getUserProfile = this.getUserProfile.bind(this);
    }

    userProfile;

    //takes users to the login page
    login() {
        this.auth0.authorize();
      }
    
    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                // this.setSession(authResult);
                let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResult.accessToken);
                localStorage.setItem("id_token", authResult.idToken);
                localStorage.setItem('expires_at', expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
                
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            } 
        });
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('given_name');
        // navigate to the home route
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    getProfile() {
        if(localStorage.getItem("id_token")){
            return jwtDecode(localStorage.getItem("id_token"))
        } else {
            return {};
        }
    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if(!accessToken){
            throw new Error('No access token found');
        }
        return accessToken;
    }
    //cb
    getUserProfile(cb) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if(profile){
                this.userProfile = profile;
            }
            cb(err, profile);
        })
    }
}

export default Auth;