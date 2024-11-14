interface Context {
  env: {
    CLOUDFLARE_HOOK_ID: string
    API_TOKEN: string
  },
  request: Request
}

async function triggerCloudflareDeployHook(hookId: string) {
  let url = `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/${hookId}`
  let payload = {
    method: "POST"
  }
  let response = await fetch(url, payload)
  return response
}

export async function onRequestGet(context: Context) {
  const url = new URL(context.request.url);
  const token = url.searchParams.get('token');

  if (token !== context.env.API_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  await triggerCloudflareDeployHook(context.env.CLOUDFLARE_HOOK_ID)
  // The airtable webhook api requires an empty response body
  // https://airtable.com/developers/web/api/webhooks-overview#webhook-notification-delivery
  return new Response("", { status: 200 });
}