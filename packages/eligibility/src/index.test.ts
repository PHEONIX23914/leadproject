import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/eligibility", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/eligibility");
  });
});
