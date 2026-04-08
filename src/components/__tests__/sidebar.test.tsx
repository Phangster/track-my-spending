import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "../sidebar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/dashboard",
}));

describe("Sidebar", () => {
  it("renders all four navigation links", () => {
    render(<Sidebar userEmail="test@example.com" />);
    expect(screen.getByRole("link", { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /receipts/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /categories/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /settings/i })).toBeInTheDocument();
  });

  it("displays the user email", () => {
    render(<Sidebar userEmail="alice@example.com" />);
    expect(screen.getByText("alice@example.com")).toBeInTheDocument();
  });

  it("renders a sign-out form", () => {
    render(<Sidebar userEmail="test@example.com" />);
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
  });

  it("links point to correct paths", () => {
    render(<Sidebar userEmail="test@example.com" />);
    expect(screen.getByRole("link", { name: /dashboard/i })).toHaveAttribute("href", "/dashboard");
    expect(screen.getByRole("link", { name: /receipts/i })).toHaveAttribute("href", "/receipts");
    expect(screen.getByRole("link", { name: /categories/i })).toHaveAttribute("href", "/categories");
    expect(screen.getByRole("link", { name: /settings/i })).toHaveAttribute("href", "/settings");
  });
});
