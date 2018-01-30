import { Image } from 'test/common';
import Matrix from 'ml-matrix';

describe('check the opening function', function () {
  it('check for GREY image 5x5', function () {
    let kernel = new Matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
    let image = new Image(5, 5,
      [
        255, 255, 0, 255, 255,
        255, 0, 0, 0, 255,
        255, 0, 0, 0, 255,
        255, 0, 0, 0, 255,
        255, 255, 0, 255, 255
      ],
      { kind: 'GREY' }
    );

    expect(Array.from(image.opening({ kernel: kernel }).data)).toEqual([
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
    ]);
  });

  it('check for GREY image 5x5 2 iterations', function () {
    let kernel = new Matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
    let image = new Image(5, 5,
      [
        255, 255, 255, 255, 255,
        255, 255, 0, 255, 255,
        255, 0, 0, 0, 255,
        255, 255, 0, 255, 255,
        255, 255, 255, 255, 255
      ],
      { kind: 'GREY' }
    );

    expect(Array.from(image.opening({ kernel: kernel, iterations: 2 }).data)).toEqual([
      255, 255, 0, 255, 255,
      255, 255, 0, 255, 255,
      0, 0, 0, 0, 0,
      255, 255, 0, 255, 255,
      255, 255, 0, 255, 255
    ]);
  });
});
