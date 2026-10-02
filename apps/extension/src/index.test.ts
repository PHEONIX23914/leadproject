import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/extension", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/extension");
  });
});
