const reqPost = url => (token, body, callback) => {
  //submit
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: body
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        alert('token不合法，或已过期！');
        return;
      }
    })
    .then(rst => {
      callback(rst);
    })
    .catch(e => {
      console.log('parsing failed', e);
    });
};

const requestPost = url => (body, callback) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        alert('token不合法，或已过期！');
        return;
      }
    })
    .then(rst => {
      callback(rst);
    })
    .catch(e => {
      console.log('parsing failed', e);
    });
};

const requestGet = url => callback => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(rst => {
      callback(rst);
    })
    .catch(e => {
      console.log('parsing failed', e);
    });
};

export { reqPost, requestPost, requestGet };
