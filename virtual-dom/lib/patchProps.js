import { isHandler, noop, createHandler } from "./utils.js";


// onClick -> onclick
// onMouseEnter -> onmouseenter

const addHandler = (node, eventName, handler) => node[eventName.toLowerCase()] = createHandler(handler);
const removeHandler = (node, eventName) => node[eventName] = noop;

export const patchProps = (node, nextProps = {}) => {
  const props = node.v?.props ?? {};
  const allProps = { ...props, ...nextProps };

  Object.keys(allProps).forEach((attrName) => {
    const value = props[attrName];
    const nextValue = nextProps[attrName];

    const needRemove = !nextValue;
    const notEqual = value !== nextValue;

    if (isHandler(attrName)) {
      if (needRemove) removeHandler(node, attrName);
      else if (notEqual) addHandler(node, attrName, nextValue);
    } else {
      if (needRemove) node.removeAttribute(attrName);
      else if (notEqual) node.setAttribute(attrName, nextValue);
    }
  });

  return node;
}