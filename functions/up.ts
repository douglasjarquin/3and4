export function onRequest() {
  return new Response('<!DOCTYPE html><html><body style="background-color: green"></body></html>', { status: 200, headers: { "content-type": "text/html" } });
}