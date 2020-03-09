import Mock from 'mockjs';

const domain = '/api/';

Mock.mock(domain + 'getData', function() {
  let result = {
    code: 200,
    message: 'OK',
    data: 'test'
  };
  return result;
});

// mock.js will intercept the call /api/getData and returns predefined response data
