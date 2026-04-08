import { describe, it, expect, beforeAll } from "vitest";

describe("Supabase browser client", () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://test.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key";
  });

  it("exports createClient that returns a client with auth and from methods", async () => {
    const { createClient } = await import("../client");
    const client = createClient();
    expect(client).toBeDefined();
    expect(client.auth).toBeDefined();
    expect(typeof client.from).toBe("function");
  });
});
