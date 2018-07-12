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

const fetchByPost = url => (params, token) => {
  let header = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    : {
        'Content-Type': 'application/json'
      };

  return fetch(url, {
    method: 'POST',
    headers: header,
    body: params
  });
};

const fetchByGet = url => (params, token) => {
  let header = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    : {
        'Content-Type': 'application/json'
      };
  // if (params && params.length > 0) {
  //   let queryString = [];
  //   for (let key in params) {
  //     if (params.hasOwnProperty(key) && params[key] !== void 0) {
  //       var encodedParam = encodeURIComponent(params[key]);
  //       queryString.push(key + '=' + encodedParam);
  //     }
  //   }
  //   url = url + '?' + queryString.join('&');
  //
  // }  

  return fetch(url, {
    method: 'GET',
    headers: header
  });
};

const fetchRequest = (reqHandler, startAction, endAction) => (
  reqData,
  token
) => dispatch => {
  startAction && dispatch(startAction());
  reqHandler(reqData, token)
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
      dispatch(endAction(rst.data));
    })
    .catch(e => {
      console.log('parsing failed', e);
    });
};

export {
  reqPost,
  requestPost,
  requestGet,
  fetchByGet,
  fetchByPost,
  fetchRequest
};
