import { test } from "vitest";
import { evalImport } from "./evalImport.js";

test("test", async () => {
  console.log(await evalImport());
});
