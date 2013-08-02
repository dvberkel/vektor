var Matrix = require('../').matrix;
var Vector = require('../').vector;
var should = require('should');

describe('Creating matrices: ', function () {
  it('should create a Matrix', function (done) {
    var A = new Matrix(3,4);
    A.size.should.eql({rows: 3, cols: 4});
    done();
  });
  it('should create a square Matrix', function (done) {
    var B = new Matrix(2);
    B.size.should.eql({rows: 2, cols: 2});
    done();
  });

  describe('2x2 matrices: ', function () {
    var A = new Matrix(2,2);
    var B = new Matrix(2,2);

    it('should set a specific value', function (done) {
      // var A = new Matrix(3,4);
      A.set(0,0,1);
      A.set(0,1,2);
      A.set(1,0,3);
      A.set(1,1,4);
      A.m[1][1].should.eql(4);
      done();
    });

    it('should get the value at a specific location', function (done) {
      A.get(1,1).should.eql(4);
      done();
    });

    it('should add the two matrices together', function (done) {
      B.set(0,0,2);
      B.set(0,1,4);
      B.set(1,0,6);
      B.set(1,1,8);
      var C = A.add(B);
      C.get(0,0).should.eql(3);
      C.get(1,0).should.eql(9);
      done();
    });

    it('should multiply a vector by a matrix', function (done) {
      var v = new Vector(2,3);
      var C = A.dot(v);
      C.v.should.eql([8,18,0]);
      done();
    });

    it('should multiply two matrices together', function (done) {
      var C = A.dot(B);
      C.get(0,0).should.eql(14);
      C.get(0,1).should.eql(20);
      C.get(1,0).should.eql(30);
      C.get(1,1).should.eql(44);
      done();
    });

    it('should find the transpose of the matrix', function (done) {
      var C = A.transpose();
      C.get(0,0).should.eql(A.get(0,0));
      C.get(0,1).should.eql(A.get(1,0));
      C.get(1,1).should.eql(A.get(1,1));
      C.get(1,0).should.eql(A.get(0,1));
      done();
    });
  });

  describe('3x3 matrices: ', function () {
    var A = new Matrix(3,3);
    var B = new Matrix(3,3);

    it('should set a specific value', function (done) {
      A.set(0,0,1);
      A.set(0,1,2);
      A.set(0,2,3);
      A.set(1,0,4);
      A.set(1,1,5);
      A.set(1,2,6);
      A.set(2,0,7);
      A.set(2,1,8);
      A.set(2,2,9);
      A.m[1][0].should.eql(4);
      done();
    });

    it('should get the value at a specific location', function (done) {
      A.get(1,1).should.eql(5);
      done();
    });

    it('should add the two matrices together', function (done) {
      B.set(0,0,2);
      B.set(0,1,4);
      B.set(0,2,6);
      B.set(1,0,8);
      B.set(1,1,10);
      B.set(1,2,12);
      B.set(2,0,14);
      B.set(2,1,16);
      B.set(2,2,18);
      var C = A.add(B);
      C.get(0,0).should.eql(3);
      C.get(1,0).should.eql(12);
      done();
    });

    it('should multiply a vector by a matrix', function (done) {
      var v = new Vector(2,3,4);
      var C = A.dot(v);
      C.v.should.eql([20, 47, 74]);
      done();
    });

    it('should multiply two matrices together', function (done) {
      var C = A.dot(B);
      C.get(0,0).should.eql(60);
      C.get(0,1).should.eql(72);
      C.get(0,2).should.eql(84);
      C.get(1,0).should.eql(132);
      C.get(1,1).should.eql(162);
      C.get(1,2).should.eql(192);
      C.get(2,0).should.eql(204);
      C.get(2,1).should.eql(252);
      C.get(2,2).should.eql(300);
      done();
    });

    it('should find the transpose of the matrix', function (done) {
      var C = A.transpose();
      C.get(0,0).should.eql(A.get(0,0));
      C.get(0,1).should.eql(A.get(1,0));
      C.get(1,1).should.eql(A.get(1,1));
      C.get(1,0).should.eql(A.get(0,1));
      done();
    });
  });
});
