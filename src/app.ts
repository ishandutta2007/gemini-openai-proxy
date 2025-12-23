import type { IRequest } from "itty-router/"
import { cors } from "itty-router/cors"
import { Router } from "itty-router/Router"
import { geminiProxy } from "./gemini-proxy.ts"
import { hello } from "./hello.ts"
import { type Any, Logger } from "./log.ts"
import { ttsProxyHandler } from "./openai/audio/speech/TTSProxyHandler.ts"
import { chatProxyHandler } from "./openai/chat/completions/ChatProxyHandler.ts"
import { embeddingProxyHandler } from "./openai/embeddingProxyHandler.ts"
import { modelDetail, models } from "./openai/models.ts"

const { preflight } = cors({ allowHeaders: "*" })

// Patched corsify to handle immutable headers
const corsify = (response: Response, request?: Request) => {
  if (response?.headers?.get("access-control-allow-origin") || response.status === 101) {
    return response;
  }
  const origin = request?.headers?.get("origin") || "*";
  const newHeaders = new Headers(response.headers);
  newHeaders.append("access-control-allow-origin", origin);
  newHeaders.append("access-control-allow-methods", "*");
  newHeaders.append("access-control-allow-headers", "*");
  return new Response(response.body, { status: response.status, headers: newHeaders });
}
// Optional: Define a TypeScript interface for your environment variables for type safety
interface Environment {
  TTS_ENDPOINT: string;
  TTS_API_KEY: string;
}
type CFArgs = [Environment];
const app = Router<IRequest, CFArgs, Response>({
  before: [
    preflight,
    (req) => {
      req.logger = new Logger(crypto.randomUUID().toString())
      req.logger.warn(`--> ${req.method} ${req.url}`)
    },
  ],
  finally: [
    corsify,
    (_, req) => {
      req.logger?.warn(`<-- ${req.method} ${req.url}`)
      // return resp
    },
  ],
})

app.get("/", hello)
app.post("/v1/chat/completions", chatProxyHandler)
app.post("/v1/audio/speech", ttsProxyHandler)
app.post("/v1/embeddings", embeddingProxyHandler)
app.get("/v1/models", async (req) => Response.json(await models(req)))
app.get("/v1/models/:model", (c) => Response.json(modelDetail(c.params.model)))
app.post("/:model_version/models/:model_and_action", geminiProxy)
app.all("*", () => new Response("Page Not Found", { status: 404 }))

export { app }
