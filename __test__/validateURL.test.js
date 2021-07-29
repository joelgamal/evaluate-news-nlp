// const correctURL = require('../src/client/js/validateURL');
import {correctURL} from '../src/client/js/validateURL'

// test('ny technology', () => {
//     expect(correctURL("https://www.nytimes.com/section/technology")).toBe(true);
//   });


//   test('invalid', () => {
//     expect(correctURL("section/technology")).toBe(false);
//   });

describe("Testing the validate URL functionality", () => {
  test("Testing the correctURL() function", () => {
         expect(correctURL).toBeDefined();
})});