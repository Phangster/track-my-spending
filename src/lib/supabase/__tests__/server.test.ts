import { describe, it, expect, beforeAll, vi } from "vitest";

vi.mock("next/headers", () => ({
  cookies: async () => ({
    getAll: () => [],
    set: () => {},
  }),
}));

describe("Supabase server client", () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://test.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key";
  });

  it("exports createClient that returns a server client with auth", async () => {
    const { createClient } = await import("../server");
    const client = await createClient();
    expect(client).toBeDefined();
    expect(client.auth).toBeDefined();
    expect(typeof client.from).toBe("function");
  });
});
