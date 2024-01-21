import { createDOMNode } from "./createDOMNode.js";
import { createElement } from "./createElement.js";
import { patchDOMNode } from "./patchDOMNode.js";

window.h = window.h ?? createElement;

let rootNode;
let rootComponent;

export const render = (vNode, target) => {
  rootComponent = vNode.component;

  rootNode = createDOMNode(vNode);

  target.replaceWith(rootNode);
}

const dispatchUpdate = () => {
  patchDOMNode(rootNode, rootComponent());
}

let state;

export const useState = function(initialState) {
  if (!state) state = initialState;

  const setState = (valueOrFn) => {
    if (typeof valueOrFn) {
      state = valueOrFn(state);
    } else {
      state = valueOrFn;
    }

    dispatchUpdate();
  };

  return [state, setState];
}

export default {
  render, 
  useState
}