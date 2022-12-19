# Playwright React Selector Fixture

## Steps to reproduce the bug:

1. Clone this repository

```bash

cd playwright-react-selector-fixture
```

2. Install dependencies

```bash
yarn
```

3. Leave the dev server running

```bash
yarn dev
```

4. In another terminal, run

```bash
yarn playwright test
```

5. Wait for `timeout exceeded`

```bash
    Test timeout of 30000ms exceeded.

    locator.waitFor: Target closed
    =========================== logs ===========================
    waiting for locator('_react=App').locator('div')
    ============================================================

       7 |   await page.goto("http://localhost:5174/");
       8 |
    >  9 |   await page.locator("_react=App >> div").waitFor({ state: "attached" });
         |                                           ^
      10 | });
      11 |
```

