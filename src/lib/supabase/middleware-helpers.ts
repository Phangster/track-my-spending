const PROTECTED_PREFIXES = ["/dashboard", "/receipts", "/categories", "/settings"];

export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}
