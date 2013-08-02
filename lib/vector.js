// -----------------------------------------------------------
// Vectors
// -----------------------------------------------------------
var Vector = function Vector (x, y, z) {
  if (typeof y === 'undefined' && typeof z === 'undefined') {
    this.x = typeof x.x !== 'undefined' ? x.x : x[0];
    this.y = typeof x.y !== 'undefined' ? x.y : x[1];
    this.z = typeof x.z !== 'undefined' ? x.z : (typeof x[2] !== 'undefined' ? x[2] : 0);
  } else {
    this.x = x;
    this.y = y;
    this.z = typeof z !== 'undefined' ? z : 0;
  }

  this.v = typeof this.z !== 'undefined' ? [this.x, this.y, this.z] : [this.x, this.y];

};

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
    var sumOfSquares = 0;
    for (var i = 0; i < this.v.length; ++i) {
      sumOfSquares += (this.v[i] - b.v[i]) * (this.v[i] - b.v[i]);
    }

    return Math.sqrt(sumOfSquares);

  },

  length: function () {
    var sumOfSquares = 0;
    for (var i = 0; i < this.v.length; ++i) {
      sumOfSquares += this.v[i] * this.v[i];
    }
    return Math.sqrt(sumOfSquares)
  }
};

exports = module.exports = Vector;
