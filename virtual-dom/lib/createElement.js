


export const createElement = (elementName, props, ...children) => {
  const chldrn = children.flat()

  if (typeof elementName === 'function') {
    const component = () => elementName({ ...props, children: chldrn });

    return {
      ...component(),
      component
    }
  }

  return {
    elementName,
    props,
    children: chldrn
  }
}