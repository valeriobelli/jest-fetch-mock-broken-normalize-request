const { fancyFetch } = require("./index");
const { enableFetchMocks } = require("jest-fetch-mock");

beforeAll(() => {
  enableFetchMocks();
});

test("fancyFetch with mocked fetch throws an error when aborted", () => {
  // By aborting before executing the mocked fetch
  // jest-fetch-mock throws an error instead of a
  // rejected promise. This is behaviour is different
  // compared to the standard Fetch behaviour.
  // This is due to normalizeRequest https://github.com/jefflau/jest-fetch-mock/blob/master/src/index.js#L123-L142
  // that throws an Error without having it wrapped in a Promise
  expect(() => fancyFetch(10)).toThrowErrorMatchingInlineSnapshot(
    `"DOMException is not defined"`
  );
});
