import { isTextNode } from "./utils.js";
import { patchProps } from "./patchProps.js";
import { createDOMNode } from "./createDOMNode.js";

// div > hello
// div
// p

const patchNode = (parent, node, vNode) => {
  if (!vNode) return node.remove();

  const isText = isTextNode(vNode);
  const notEqualText = isText && vNode !== node?.v;
  const notEqualElement = node?.v?.elementName !== vNode?.elementName;
  const isNew = !node;

  if (notEqualText || notEqualElement) {
    const newNode = createDOMNode(vNode);

    if (isNew) parent.appendChild(newNode);
    else node.replaceWith(newNode);
  }

  return isText || notEqualText || notEqualElement;
}

// div
// div > hello world

export const patchDOMNode = (node, nextVNode) => {
  const stack = [{ parent: node.parent, node, vNode: nextVNode }]; // { parent, node, vNode }

  while (stack.length > 0) {
    const item = stack.pop();
    const parent = item.parent;
    const iNode = item.node;
    const vNode = item.vNode;

    const isCompleted = patchNode(parent, iNode, vNode);

    if (isCompleted) continue;

    patchProps(iNode, vNode.props);

    const childNodes = iNode.childNodes;
    const vChildren = vNode.children;
    const maxLength = Math.max(childNodes.length, vChildren.length);

    for(let i = 0 ; i < maxLength; i++) {
      stack.push({
        parent: iNode,
        node: childNodes[i],
        vNode: vChildren[i]
      });
    }
  }
}