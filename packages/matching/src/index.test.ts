import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/matching", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/matching");
  });
});
