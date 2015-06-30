# intersects [![Code Climate](https://codeclimate.com/github/dfcreative/intersects/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/intersects) <a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

Detect whether one rectangle intersects another.

[![npm install intersects](https://nodei.co/npm/intersects.png?mini=true)](https://npmjs.org/package/intersects)

```js
var intersects = require('intersects');

intersects(rect1, rect2, tolerance);
```

`rect1` and `rect2` are rectangles: `{ top, left, bottom, right, width, height }`.

Tolerance: `0` - touches, `1` - fits, `0.5` - 50% square intersection.