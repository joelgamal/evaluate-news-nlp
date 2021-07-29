import {handleSubmit} from '../src/client/js/formHandler'

// test('ny technology', () => {
//     expect(correctURL("https://www.nytimes.com/section/technology")).toBe(true);
//   });


//   test('invalid', () => {
//     expect(correctURL("section/technology")).toBe(false);
//   });

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
         expect(handleSubmit).toBeDefined();
})});