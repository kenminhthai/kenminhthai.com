export function getOffset(el) {
  const body = document.body;
  const bodyRect = body.getBoundingClientRect();
  const elemRect = el.getBoundingClientRect();
  const offset = {
    top: elemRect.top - bodyRect.top,
    bottom: elemRect.top - bodyRect.top + el.clientHeight
  };
  return offset;
}
