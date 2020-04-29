class Matrix {
  constructor(data) {
    this.apply(data);
  }

  apply(data) {
    let values = [1, 0, 0, 1, 0, 0];
    if (data) {
      values = data.split(",");
    }

    this.a = parseFloat(values[0]);
    this.b = parseFloat(values[1]);
    this.c = parseFloat(values[2]);
    this.d = parseFloat(values[3]);
    this.e = parseFloat(values[4]);
    this.f = parseFloat(values[5]);
    this.transform = this.transform.bind(this);
  }

  scale(sx, sy) {
    return this.transform(sx, 0, 0, sy, 0, 0);
  }

  translate(tx, ty) {
    return this.transform(1, 0, 0, 1, tx, ty);
  }

  transform(a2, b2, c2, d2, e2, f2) {
    let a1 = this.a,
      b1 = this.b,
      c1 = this.c,
      d1 = this.d,
      e1 = this.e,
      f1 = this.f;
    let result = new Matrix();
    result.a = a1 * a2 + c1 * b2;
    result.b = b1 * a2 + d1 * b2;
    result.c = a1 * c2 + c1 * d2;
    result.d = b1 * c2 + d1 * d2;
    result.e = a1 * e2 + c1 * f2 + e1;
    result.f = b1 * e2 + d1 * f2 + f1;

    return result;
  }

  matrixToText() {
    return (
      this.a +
      ", " +
      this.b +
      ", " +
      this.c +
      ", " +
      this.d +
      ", " +
      this.e +
      ", " +
      this.f
    );
  }
}
export default Matrix;
