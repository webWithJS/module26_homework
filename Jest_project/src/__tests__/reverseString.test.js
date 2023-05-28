import { revertString } from "../reverseString.js";

describe("Test for revertString function", () => {
  const defaultString = "А муза - раба разума";
  const expectedString = "амузар абар - азум А";

  it("Should to do reverse string", () => {
    expect(revertString(defaultString)).toBe(expectedString);
  });
});
