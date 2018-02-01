import { readFile, createWriteStream, writeFile } from 'fs';

// eslint-disable-next-line import/no-mutable-exports
let createCanvas, DOMImage, ImageData;
try {
  const canvas = require('canvas');
  createCanvas = canvas.createCanvas;
  DOMImage = canvas.Image;
  ImageData = canvas.ImageData;
} catch (e) {
  createCanvas = function () {
    throw new Error('createCanvas requires the canvas library');
  };
  DOMImage = function () {
    throw new Error('DOMImage requires the canvas library');
  };
  ImageData = function () {
    throw new Error('ImageData requires the canvas library');
  };
}


const env = 'node';

export function fetchBinary(path) {
  return new Promise(function (resolve, reject) {
    readFile(path, function (err, data) {
      if (err) reject(err);
      else resolve(data.buffer);
    });
  });
}

export { env, createCanvas, ImageData, DOMImage, createWriteStream, writeFile };