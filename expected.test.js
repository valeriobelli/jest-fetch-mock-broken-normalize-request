const { fancyFetch } = require("./index");

test("fancyFetch with real fetch returns a rejected promise when aborted", async () => {
  // By aborting before executing the mocked fetch I would expect
  // a rejected Promise instead of a throw Error
  await expect(fancyFetch(10)).rejects.toThrowErrorMatchingInlineSnapshot(
    `"The user aborted a request."`
  );
});
