/** Posts-per-page across all paginated routes — matches PaperMod's default. */
export const PAGE_SIZE = 10;

export function paginateItems<T>(
  items: T[],
  pageSize: number = PAGE_SIZE,
): { page: number; total: number; items: T[] }[] {
  const total = Math.max(1, Math.ceil(items.length / pageSize));
  return Array.from({ length: total }, (_, i) => ({
    page: i + 1,
    total,
    items: items.slice(i * pageSize, (i + 1) * pageSize),
  }));
}
