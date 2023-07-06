import request from 'request';

export const saveData = (details: any) => {
  const options = {
    method: 'POST',
    url: '',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {},
  };
  return new Promise((resolve, reject) => {
    request(options, function (error: any, response: any, body: any) {
      if (error) reject(error);
      console.log(body);
      resolve(body);
    });
  });
};

export const getData = (id: string) => {
  const options = {
    method: 'GET',
    url: '',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    request(options, function (error: any, response: any, body: any) {
      if (error) reject(error);
      console.log(body);
      resolve(body);
    });
  });
};

export const updateData = (details: any) => {
  const options = {
    method: 'GET',
    url: '',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {},
  };
  return new Promise((resolve, reject) => {
    request(options, function (error: any, response: any, body: any) {
      if (error) reject(error);
      console.log(body);
      resolve(body);
    });
  });
};
