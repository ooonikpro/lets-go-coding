import { isTextNode } from "./utils.js";
import { patchProps } from "./patchProps.js";

const createNode = (vNode) => {
  const node = isTextNode(vNode)
    ? document.createTextNode(vNode) 
    : document.createElement(vNode.elementName);

  patchProps(node, vNode?.props);

  node.v = vNode;

  return node;
}

const getChildren = (vNode) => vNode?.children ?? [];

export const createDOMNode = (vNode) => {
  const root = createNode(vNode);

  const stack = []; // { parent, children }, {  }

  stack.push({ parent: root, children: getChildren(vNode) });

  while (stack.length > 0) {
    const { parent, children } = stack.pop();

    children.forEach((vChild) => {
      const node = createNode(vChild);

      parent.appendChild(node);

      stack.push({ parent: node, children: getChildren(vChild) });
    });
  }

  return root;
}