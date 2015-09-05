import React from 'react/addons';

/**
 * Renders and returns the output of a shallow react component
 *
 * @param {string|React} component string or React component
 * @param {object} props component props
 * @param {array} children component children
 * @return {object} Object containing the shallow rendered components output.
 */
const shallowOutput = (component, props, ...children) => {
  const renderer = React.addons.TestUtils.createRenderer();
  renderer.render(React.createElement(component, props, children));
  return renderer.getRenderOutput();
};

export default shallowOutput;
