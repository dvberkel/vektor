// -----------------------------------------------------------
// Vectors
// -----------------------------------------------------------
var Vector = function Vector (x, y, z) {
  if (typeof y === 'undefined' && typeof z === 'undefined') {
    if (typeof x.x != 'undefined') {
      this.x = x.x;
      this.y = x.y;
      this.z = definedValueOrZero(x.z);
    } else {
      this.x = x[0];
      this.y = x[1];
      this.z = definedValueOrZero(x[2]);
    }
  } else {
    this.x = x;
    this.y = y;
    this.z = definedValueOrZero(z);
  }

  this.v = [this.x, this.y, this.z];
};

var definedValueOrZero = function(value) {
    return typeof value !== 'undefined' ? value : 0;
}

Vector.prototype = {
  add: function (b) {
    return new Vector(this.x + b.x, this.y + b.y, this.z + b.z);
  },

  dot: function (b) {
    return this.x * b.x + this.y * b.y + this.z * b.z;
  },

  isVector: true,

  moveTo: function(pt) {
    var v = new Vector(pt);
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
  },
  // cross: function (b) {
  //   var i = y * b.z - z * b.y;
  //   console.log(i);
  //   var j = z * b.x - x * b.z;
  //   console.log(j);
  //   var k = x * b.y - y * b.x;
  //   console.log(k);
  //   return [i, j, k];
  // },

  distanceFrom: function (b) {
    return length([this.x - b.x, this.y - b.y, this.z - b.z]);
  },

  length: function () {
    return length(this.v);
  }
};

var length = function length(elements) {
  var sumOfSquares = 0;
  for (var index = 0; index < elements.length; index++) {
    sumOfSquares += elements[index] * elements[index]
  }
  return Math.sqrt(sumOfSquares);
}
exports = module.exports = Vector;
