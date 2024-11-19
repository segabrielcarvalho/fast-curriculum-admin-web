export default function sanitizeObject<T extends { [key: string]: any }>(
  object: T,
): T | undefined {
  let x = {} as any;
  if (Array.isArray(object)) {
    x = object
      .map(item => {
        if (typeof item === 'object') return sanitizeObject(item);
        return item;
      })
      .filter(item => item);
    return x.length === 0 ? undefined : x;
  }
  Object.entries(object).forEach(([key, value]) => {
    if (typeof value === 'object') {
      if (value === null) return;
      x[key] = sanitizeObject(object[key]);
      return;
    }
    x[key] = value;
  });

  Object.entries(x).forEach(([key, value]) => {
    if (typeof value === 'boolean') return;
    if (!value) delete x[key];
  });

  if (Object.keys(x).length === 0) return;

  return x;
}
