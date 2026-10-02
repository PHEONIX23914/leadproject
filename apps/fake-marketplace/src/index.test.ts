import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/fake-marketplace", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/fake-marketplace");
  });
});
