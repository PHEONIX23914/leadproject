import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/web", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/web");
  });
});
