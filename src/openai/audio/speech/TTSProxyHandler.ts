import { getToken } from "../../../utils.ts"
import { EdgeProxyHandler } from "./EdgeProxyHandler.ts"
import { OaiProxyHandler } from "./OaiProxyHandler.ts"
import type { TTSParam } from "./utils.ts"

export async function ttsProxyHandler(rawReq: Request,env, ctx): Promise<Response> {
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
  if(!TTS_ENDPOINT){
    return new Response("Internal Server Error: Missing TTS_ENDPOINT", { status: 500 });  // Handle missing TTS_ENDPOINT
  }

  const remote_url = `${TTS_ENDPOINT}/v1/audio/speech`;

  const new_req = new Request(remote_url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(json),
  });

  console.log("Sending TTS request to:", remote_url);  // Log the endpoint for debugging purposes 

  var res = await fetch(new_req);

  if (res.status !== 200) {
    return new Response("Internal Server Error", { status: 500 });  // Handle non-200 responses 
  }
  return res;


}
  return EdgeProxyHandler(req)
}
