export function scrollToId(targetId: string) {
  const target = document.getElementById(targetId);
  if (target) {
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? (headerEl as HTMLElement).getBoundingClientRect().height : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
