'use strict';
var Promise = require('./appoint');

describe('condition-appoint', function () {
  it('TypeError catch', function (done) {
    Promise.reject(new TypeError('type error'))
      .catch(function SyntaxError(e) {
        console.error('SyntaxError: ', e)
      })
      .catch(function TypeError(e) {
        done()
      })
      .catch(function (e) {
        console.error('default: ', e)
      })
  });
  it('anonymous catch', function (done) {
    Promise.reject(new TypeError('type error'))
      .catch(function SyntaxError(e) {
        console.error('SyntaxError: ', e)
      })
      .catch(function ReferenceError(e) {
        console.error('ReferenceError: ', e)
      })
      .catch(function (e) {
        done()
      })
  });
  it('anonymous catch befor TypeError catch', function (done) {
    Promise.reject(new TypeError('type error'))
      .catch(function SyntaxError(e) {
        console.error('SyntaxError: ', e)
      })
      .catch(function (e) {
        done()
      })
      .catch(function TypeError(e) {
        console.error('TypeError: ', e)
      })
  });
});