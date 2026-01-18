export function withBase(url: string): string {
  return `${import.meta.env.BASE_URL}${url}`;
}