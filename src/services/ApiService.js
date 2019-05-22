

class ApiService {

  constructor() {
    this.api_url = 'https://api.github.com/';
  }

  async apiCall(url, method = 'GET', token = false, params = null) {
    let payload = {
      method,
      mode: 'cors',
      headers: this.buildHeaders(token)
    };
    if (params) {
      payload.body = JSON.stringify(params);
    }
    const response = await fetch(`${this.api_url}${url}`, payload);
    const status = response.status;
    const body = await response.json();
    return { status, body };
  }

  buildHeaders(token = false) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    if (token) {
      headers.append('Authorization', `Token ${token}`);
    }

    return headers;
  }

  handleCommonError(response) {
    if (response.status !== 200 && response.status !== 201) {
      let err = new Error(response.status)
      err.originalResponse = response;
      throw err;
    } 
    return response;
  }

}

export default new ApiService();