const provider = document.currentScript.dataset.provider;
const callback = new URL(
  `/integrations/social/${provider}`,
  'https://miniature-excluded-banana-atomic.trycloudflare.com'
);
const incoming = new URLSearchParams(location.search);
for (const key of [
  'code',
  'state',
  'error',
  'error_reason',
  'error_description',
]) {
  if (incoming.has(key)) callback.searchParams.set(key, incoming.get(key));
}
document.querySelector('#continue').href = callback.href;
location.replace(callback.href);
