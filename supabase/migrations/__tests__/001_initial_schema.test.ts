import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

describe("Migration 001: initial schema", () => {
  let sql: string;

  beforeAll(() => {
    const path = join(
      process.cwd(),
      "supabase/migrations/001_initial_schema.sql"
    );
    sql = readFileSync(path, "utf-8").toLowerCase();
  });

  describe("tables", () => {
    it("creates the categories table", () => {
      expect(sql).toMatch(/create table[^;]*categories/);
    });

    it("creates the receipts table", () => {
      expect(sql).toMatch(/create table[^;]*receipts/);
    });

    it("creates the receipt_items table", () => {
      expect(sql).toMatch(/create table[^;]*receipt_items/);
    });
  });

  describe("categories columns", () => {
    it("has user_id, name, color, icon, keywords", () => {
      expect(sql).toMatch(/categories[\s\S]*user_id/);
      expect(sql).toMatch(/categories[\s\S]*name/);
      expect(sql).toMatch(/categories[\s\S]*color/);
      expect(sql).toMatch(/categories[\s\S]*icon/);
      expect(sql).toMatch(/categories[\s\S]*keywords/);
    });
  });

  describe("receipts columns", () => {
    it("has user_id, merchant, date, subtotal, tax, total, category_id, image_url", () => {
      expect(sql).toMatch(/receipts[\s\S]*user_id/);
      expect(sql).toMatch(/receipts[\s\S]*merchant/);
      expect(sql).toMatch(/receipts[\s\S]*\bdate\b/);
      expect(sql).toMatch(/receipts[\s\S]*subtotal/);
      expect(sql).toMatch(/receipts[\s\S]*\btax\b/);
      expect(sql).toMatch(/receipts[\s\S]*\btotal\b/);
      expect(sql).toMatch(/receipts[\s\S]*category_id/);
      expect(sql).toMatch(/receipts[\s\S]*image_url/);
    });
  });

  describe("receipt_items columns", () => {
    it("has receipt_id with cascade delete, name, quantity, unit_price, total_price", () => {
      expect(sql).toMatch(/receipt_items[\s\S]*receipt_id/);
      expect(sql).toMatch(/receipt_items[\s\S]*on delete cascade/);
      expect(sql).toMatch(/receipt_items[\s\S]*\bname\b/);
      expect(sql).toMatch(/receipt_items[\s\S]*quantity/);
      expect(sql).toMatch(/receipt_items[\s\S]*unit_price/);
      expect(sql).toMatch(/receipt_items[\s\S]*total_price/);
    });
  });

  describe("row level security", () => {
    it("enables RLS on all three tables", () => {
      expect(sql).toMatch(/alter table[^;]*categories[^;]*enable row level security/);
      expect(sql).toMatch(/alter table[^;]*receipts[^;]*enable row level security/);
      expect(sql).toMatch(/alter table[^;]*receipt_items[^;]*enable row level security/);
    });

    it("creates user-scoped policies referencing auth.uid()", () => {
      // every table must have at least one policy using auth.uid()
      expect(sql).toMatch(/create policy[\s\S]*categories[\s\S]*auth\.uid\(\)/);
      expect(sql).toMatch(/create policy[\s\S]*receipts[\s\S]*auth\.uid\(\)/);
      expect(sql).toMatch(/create policy[\s\S]*receipt_items[\s\S]*auth\.uid\(\)/);
    });

    it("declares policies for select, insert, update, delete on receipts", () => {
      // receipts must have full CRUD policies
      const receiptsBlock = sql.split("create policy").filter((b) => b.includes("on receipts"));
      const actions = receiptsBlock.join(" ");
      expect(actions).toMatch(/for select/);
      expect(actions).toMatch(/for insert/);
      expect(actions).toMatch(/for update/);
      expect(actions).toMatch(/for delete/);
    });
  });

  describe("default category seeds", () => {
    it("contains an insert seeding default categories", () => {
      // seeds use a function or insert with the default names
      const defaults = ["groceries", "dining", "transport", "shopping", "health", "utilities", "entertainment", "other"];
      defaults.forEach((cat) => {
        expect(sql).toContain(cat);
      });
    });
  });
});
