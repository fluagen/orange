import jwt_decode from 'jwt-decode';

class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */
  static getToken() {
    return localStorage.getItem('token');
  }

  static getPayload() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    let payload = jwt_decode(token);
    return payload;
  }
}

export default Auth;
