import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/domain", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/domain");
  });
});
