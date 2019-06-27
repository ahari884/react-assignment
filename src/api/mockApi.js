import _ from 'lodash';

const users = [
  {
    email: 'hruday@gmail.com',
    password: 'hruday123'
  }
];

export function authenticate(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = _.find(users, user => {
        return user.email === email;
      });
      if (user && user.password === password) {
        resolve(Object.assign({}, user));
      }
      else reject(`Wrong login credentials`);
    }, 500);
  });
}