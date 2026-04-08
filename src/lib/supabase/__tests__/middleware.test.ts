import { describe, it, expect } from "vitest";
import { isProtectedRoute } from "../middleware-helpers";

describe("isProtectedRoute", () => {
  it("returns true for /dashboard and nested routes", () => {
    expect(isProtectedRoute("/dashboard")).toBe(true);
    expect(isProtectedRoute("/dashboard/overview")).toBe(true);
  });

  it("returns true for /receipts, /categories, /settings", () => {
    expect(isProtectedRoute("/receipts")).toBe(true);
    expect(isProtectedRoute("/receipts/new")).toBe(true);
    expect(isProtectedRoute("/categories")).toBe(true);
    expect(isProtectedRoute("/settings")).toBe(true);
  });

  it("returns false for public routes", () => {
    expect(isProtectedRoute("/")).toBe(false);
    expect(isProtectedRoute("/login")).toBe(false);
    expect(isProtectedRoute("/signup")).toBe(false);
    expect(isProtectedRoute("/auth/callback")).toBe(false);
  });
});
