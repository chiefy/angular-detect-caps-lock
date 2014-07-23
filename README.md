angular-detect-caps-lock
========================

Detect when user has caps-lock enabled/disabled.

This is really just a wrapper around @aaditmshah's [capsLock module.](https://github.com/aaditmshah/capsLock) (thanks!) 

The module maintains a `$rootScope.caps_state` boolean property.

## Install with Bower

```shell
$ bower install --save angular-detect-caps-lock
```

## Include the module

Include the script, and then make sure to use the `chiefy.detect-caps-lock` module in your module dependencies as such:

```javascript
(function(ng) {
    ng.module('myApp',['chiefy.detect-caps-lock']);
})(window.angular);
```
