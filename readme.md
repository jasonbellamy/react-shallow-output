# react-shallow-output

> A React utility to simplify testing the output of shallow rendered components.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-shallow-output`


## Usage

```javascript
var shallowOutput = require('react-shallow-output');
var Component     = require('component');

describe('Component', function () {
  it('should return true is attribute is set', function () {
    var shallowComponent = shallowOutput(Component, {attribute: true});
    expect(shallowComponent.props.attribute).to.equal(true); //=> true
  });
});
```


## Options

Property  | Type               | Argument     | Default  | Description
----------|--------------------|--------------|----------|------------
component | `string|Component` | `<required>` | `null`   | an html tag string or React component.
props     | `object`           | `<required>` | `null`   | props to pass to the component.
children  | `array`            | `<optional>` | `null`   | children to pass to the component.


## Developing

[react-shallow-output](https://github.com/jasonbellamy/react-shallow-output) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy](http://jasonbellamy.com) & [Simon Smith](https://github.com/simonsmith)  
Licensed under the MIT license.
