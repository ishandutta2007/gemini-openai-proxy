import { getToken } from "../../../utils.ts"
import { EdgeProxyHandler } from "./EdgeProxyHandler.ts"
import { OaiProxyHandler } from "./OaiProxyHandler.ts"
import type { TTSParam } from "./utils.ts"
import { env, getRuntimeKey } from "../../../adapter.ts"
import { Context } from "../../../context.ts"
export async function ttsProxyHandler(rawReq: Request, ctx: Context): Promise<Response> {

  const {TTS_ENDPOINT,TTS_API_KEY}  = env<{ TTS_ENDPOINT: string, TTS_API_KEY: string }>(ctx)

  var ENV_TTS_ENDPOINT = TTS_ENDPOINT;
  var ENV_TTS_API_KEY = TTS_API_KEY;

  const json = await rawReq.json();
  const req = json as TTSParam
  const headers = rawReq.headers
  const apiParam = getToken(headers)

  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  // console.log("TTSProxyHandler called, model : ", req.model);
  if (req.model === "tts-1") {
    //  return OaiProxyHandler(req)

    // console.log("TTS_ENDPOINT:", ENV_TTS_ENDPOINT, "TTS_API_KEY:", ENV_TTS_API_KEY);  // Log the endpoint and API key for debugging purposes  
    if (!ENV_TTS_ENDPOINT || !ENV_TTS_API_KEY) {
      return new Response("Internal Server Error: Missing TTS_ENDPOINT or TTS_API_KEY", { status: 500 });  // Handle missing TTS_ENDPOINT
    }
    // 1. Create new headers from existing ones
    // const newHeaders = new Headers(headers);

    // // 2. Modify or add specific headers
    // newHeaders.set('Authorization', `Bearer ${ENV_TTS_API_KEY}`);

    // newHeaders.set('accept-encoding', 'br, gzip'); // Remove host to avoid conflicts

    // ✅ GOOD - create clean headers for upstream
    const newHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ENV_TTS_API_KEY}`,
    });


    const remote_url = `${ENV_TTS_ENDPOINT}/v1/audio/speech`;
    const new_req = new Request(remote_url, {
      method: "POST",
      headers: newHeaders,
      body: JSON.stringify(json),
    });

    // console.log("Sending TTS request to:", remote_url);  // Log the endpoint for debugging purposes 
    // console.log("Sending TTS request:", new_req);  // Log the endpoint for debugging purposes 

    // var res = await fetch(new_req,);
    const res = await fetch(remote_url, {
      method: "POST",
      headers: newHeaders,
      body: JSON.stringify(json),
      // @ts-ignore - Node.js specific, ignored by other runtimes
      duplex: 'half',
    });

    // console.log("Received TTS response:", res);  // Log the response for debugging purposes
    if (res.status !== 200) {
      return new Response("Internal Server Error", { status: 500 });  // Handle non-200 responses 
    }
    return res;


  }
  return EdgeProxyHandler(req)
}
