const test = require('../spec/test-framework.js');
const Plane = require('../src/plane.js');

const testPlane = () => {
    //setup test case #1
    let plane = new Plane('falcon7x');
    //execute test case #1
    let result = plane.name;
    //verify test case #1
    test.assertEquals(result, 'falcon7x');

};
module.exports = testPlane;