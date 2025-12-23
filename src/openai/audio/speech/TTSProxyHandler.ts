import { getToken } from "../../../utils.ts"
import { EdgeProxyHandler } from "./EdgeProxyHandler.ts"
import { OaiProxyHandler } from "./OaiProxyHandler.ts"
import type { TTSParam } from "./utils.ts"

export async function ttsProxyHandler(rawReq: Request, env, ctx): Promise<Response> {
  const json = await rawReq.json();
  const req = json as TTSParam
  const headers = rawReq.headers
  const apiParam = getToken(headers)

  if (apiParam == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  if (req.model === "tts-1") {
    //  return OaiProxyHandler(req)

    const TTS_ENDPOINT = env.TTS_ENDPOINT;
    const TTS_API_KEY = env.TTS_API_KEY;

    // console.log("TTS_ENDPOINT:", TTS_ENDPOINT, "TTS_API_KEY:", TTS_API_KEY);  // Log the endpoint and API key for debugging purposes  
    if (!TTS_ENDPOINT || !TTS_API_KEY) {
      return new Response("Internal Server Error: Missing TTS_ENDPOINT or TTS_API_KEY", { status: 500 });  // Handle missing TTS_ENDPOINT
    }
    // 1. Create new headers from existing ones
    const newHeaders = new Headers(headers);

    // 2. Modify or add specific headers
    newHeaders.set('Authorization', `Bearer ${TTS_API_KEY}`);

    const remote_url = `${TTS_ENDPOINT}/v1/audio/speech`;

    const new_req = new Request(remote_url, {
      method: "POST",
      headers: newHeaders,
      body: JSON.stringify(json),
    });

    // console.log("Sending TTS request to:", remote_url);  // Log the endpoint for debugging purposes 
    // console.log("Sending TTS request:", new_req);  // Log the endpoint for debugging purposes 

    var res = await fetch(new_req);

    if (res.status !== 200) {
      return new Response("Internal Server Error", { status: 500 });  // Handle non-200 responses 
    }
    return res;


  }
  return EdgeProxyHandler(req)
}
