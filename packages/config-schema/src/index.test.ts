import { describe, expect, it } from "vitest";
import { packageName } from "./index.js";

describe("@leadproject/config-schema", () => {
  it("exports its package name", () => {
    expect(packageName).toBe("@leadproject/config-schema");
  });
});
