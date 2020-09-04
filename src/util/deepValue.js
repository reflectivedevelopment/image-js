export default function deepValue(object, path = '') {
  let parts = path.split('.');
  for (let part of parts) {
    if (!object[part]) return undefined;
    object = object[part];
  }
  return object;
}
