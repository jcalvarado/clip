import distance from "./StringDistance";

it("supports substitution", () => {
  expect(distance("a", "b").result).toEqual(1);
});

it("supports deletion", () => {
  expect(distance("ab", "a").result).toEqual(1);
});

it("supports insertion", () => {
  expect(distance("a", "ab").result).toEqual(1);
});

it("supports transposition by default", () => {
  expect(distance("ab", "ba").result).toEqual(1);
});

it("supports turning off transposition", () => {
  expect(distance("ab", "ba", false).result).toEqual(2);
});
