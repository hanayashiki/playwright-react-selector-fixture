// @ts-check
const { test } = require("@playwright/test");

test("cannot match direct html component under react component", async ({
  page,
}) => {
  await page.goto("http://localhost:5174/");

  await page.locator("_react=App >> div").waitFor({ state: "attached" });
});
