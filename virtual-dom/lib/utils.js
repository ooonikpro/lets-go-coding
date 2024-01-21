
export const isTextNode = (vNode) => ['string', 'number', 'boolean'].includes(typeof vNode);

export const isHandler = (attrName) => /^on/.test(attrName);

export const createHandler = (...fns) => function() { fns.forEach((fn) => fn.apply(this, arguments)); }

export const noop = () => {}