const get = (path, value, defaultValue = null) => {
  if (typeof path !== 'string' || typeof value !== 'object') {
    return defaultValue;
  }

  let tmpValue = value[path];

  if (tmpValue !== undefined) return tmpValue;

  tmpValue = value;
  const fields = path.split('.'); // a.0.b

  for(let i = 0; i < fields.length ; i++) {
    const key = fields[i];
    const newValue = tmpValue[key];

    if (newValue === undefined) return defaultValue;

    tmpValue = newValue;
  }

  return tmpValue;
}

export default get;