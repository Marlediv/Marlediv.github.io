/** Aktiv-Erkennung für Navigationslinks; tolerant gegenüber abschließendem Slash (`trailingSlash: true`). */
export function isActivePath(pathname: string, href: string) {
  const current = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return current === "/";
  return current === href || current.startsWith(`${href}/`);
}
