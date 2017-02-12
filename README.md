## condition-appoint

Condition Promise, based on [appoint](https://github.com/nswbmw/appoint).

### Install

```bash
npm install condition-appoint
```

### Usage

```javascript
var Promise = require('condition-appoint');
// or use the pollyfill
require('condition-appoint/polyfill');
```

### Example

```javascript
var Promise = require('condition-appoint')
Promise.reject(new TypeError('type error'))
  .catch(function SyntaxError(e) {
    console.error('SyntaxError: ', e)
  })
  .catch(function TypeError(e) {
    console.error('TypeError: ', e)
  })
  .catch(function (e) {
    console.error('default: ', e)
  })
// TypeError:  [TypeError: type error]
```

```javascript
var Promise = require('condition-appoint')
Promise.reject(new TypeError('type error'))
  .catch(function SyntaxError(e) {
    console.error('SyntaxError: ', e)
  })
  .catch(function ReferenceError(e) {
    console.error('ReferenceError: ', e)
  })
  .catch(function (e) {
    console.error('default: ', e)
  })
// default:  [TypeError: type error]
```

```javascript
var Promise = require('condition-appoint')
Promise.reject(new TypeError('type error'))
  .catch(function SyntaxError(e) {
    console.error('SyntaxError: ', e)
  })
  .catch(function (e) {
    console.error('default: ', e)
  })
  .catch(function TypeError(e) {
    console.error('TypeError: ', e)
  })
// default:  [TypeError: type error]
```
### License

MIT