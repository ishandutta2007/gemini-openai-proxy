export interface paths {
    "/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create chat completion
         * @description **Starting a new project?** We recommend trying [Responses](https://platform.openai.com/docs/api-reference/responses)
         *     to take advantage of the latest OpenAI platform features. Compare
         *     [Chat Completions with Responses](https://platform.openai.com/docs/guides/responses-vs-chat-completions?api-mode=responses).
         *
         *     ---
         *
         *     Creates a model response for the given chat conversation. Learn more in the
         *     [text generation](https://platform.openai.com/docs/guides/text-generation), [vision](https://platform.openai.com/docs/guides/vision),
         *     and [audio](https://platform.openai.com/docs/guides/audio) guides.
         *
         *     Parameter support can differ depending on the model used to generate the
         *     response, particularly for newer reasoning models. Parameters that are only
         *     supported for reasoning models are noted below. For the current state of
         *     unsupported parameters in reasoning models,
         *     [refer to the reasoning guide](https://platform.openai.com/docs/guides/reasoning).
         *
         */
        post: operations["createChatCompletion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/embeddings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create embeddings
         * @description Creates an embedding vector representing the input text.
         */
        post: operations["createEmbedding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List models
         * @description Lists the currently available models, and provides basic information about each one such as the owner and availability.
         */
        get: operations["listModels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface webhooks {
    batch_cancelled: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookBatchCancelled"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    batch_completed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookBatchCompleted"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    batch_expired: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookBatchExpired"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    batch_failed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookBatchFailed"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    eval_run_canceled: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookEvalRunCanceled"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    eval_run_failed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookEvalRunFailed"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    eval_run_succeeded: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookEvalRunSucceeded"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    fine_tuning_job_cancelled: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookFineTuningJobCancelled"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    fine_tuning_job_failed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookFineTuningJobFailed"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    fine_tuning_job_succeeded: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookFineTuningJobSucceeded"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    realtime_call_incoming: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookRealtimeCallIncoming"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    response_cancelled: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookResponseCancelled"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    response_completed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookResponseCompleted"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    response_failed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookResponseFailed"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    response_incomplete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description The event payload sent by the API. */
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["WebhookResponseIncomplete"];
                };
            };
            responses: {
                /** @description Return a 200 status code to acknowledge receipt of the event. Non-200
                 *     status codes will be retried.
                 *      */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface components {
    schemas: {
        /**
         * Allowed tools
         * @description Constrains the tools available to the model to a pre-defined set.
         *
         */
        ChatCompletionAllowedTools: {
            /**
             * @description Constrains the tools available to the model to a pre-defined set.
             *
             *     `auto` allows the model to pick from among the allowed tools and generate a
             *     message.
             *
             *     `required` requires the model to call one or more of the allowed tools.
             *
             * @enum {string}
             */
            mode: "auto" | "required";
            /** @description A list of tool definitions that the model should be allowed to call.
             *
             *     For the Chat Completions API, the list of tool definitions might look like:
             *     ```json
             *     [
             *       { "type": "function", "function": { "name": "get_weather" } },
             *       { "type": "function", "function": { "name": "get_time" } }
             *     ]
             *     ```
             *      */
            tools: {
                [key: string]: unknown;
            }[];
        } & {
            [key: string]: unknown;
        };
        /**
         * Allowed tools
         * @description Constrains the tools available to the model to a pre-defined set.
         *
         */
        ChatCompletionAllowedToolsChoice: {
            allowed_tools: components["schemas"]["ChatCompletionAllowedTools"];
            /**
             * @description Allowed tool configuration type. Always `allowed_tools`.
             * @enum {string}
             */
            type: "allowed_tools";
        } & {
            [key: string]: unknown;
        };
        /** @description Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
         *      */
        ChatCompletionFunctionCallOption: {
            /** @description The name of the function to call. */
            name: string;
        } & {
            [key: string]: unknown;
        };
        /** @deprecated */
        ChatCompletionFunctions: {
            /** @description A description of what the function does, used by the model to choose when and how to call the function. */
            description?: string;
            /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
            name: string;
            parameters?: components["schemas"]["FunctionParameters"];
        } & {
            [key: string]: unknown;
        };
        /**
         * Custom tool call
         * @description A call to a custom tool created by the model.
         *
         */
        ChatCompletionMessageCustomToolCall: {
            /** @description The custom tool that the model called. */
            custom: {
                /** @description The input for the custom tool call generated by the model. */
                input: string;
                /** @description The name of the custom tool to call. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id: string;
            /**
             * @description The type of the tool. Always `custom`.
             * @enum {string}
             */
            type: "custom";
        } & {
            [key: string]: unknown;
        };
        /**
         * Function tool call
         * @description A call to a function tool created by the model.
         *
         */
        ChatCompletionMessageToolCall: {
            /** @description The function that the model called. */
            function: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id: string;
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type: "function";
        } & {
            [key: string]: unknown;
        };
        ChatCompletionMessageToolCallChunk: {
            function?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments?: string;
                /** @description The name of the function to call. */
                name?: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id?: string;
            index: number;
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type?: "function";
        } & {
            [key: string]: unknown;
        };
        /** @description The tool calls generated by the model, such as function calls. */
        ChatCompletionMessageToolCalls: (components["schemas"]["ChatCompletionMessageToolCall"] | components["schemas"]["ChatCompletionMessageCustomToolCall"])[];
        /**
         * Function tool choice
         * @description Specifies a tool the model should use. Use to force the model to call a specific function.
         */
        ChatCompletionNamedToolChoice: {
            function: {
                /** @description The name of the function to call. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description For function calling, the type is always `function`.
             * @enum {string}
             */
            type: "function";
        } & {
            [key: string]: unknown;
        };
        /**
         * Custom tool choice
         * @description Specifies a tool the model should use. Use to force the model to call a specific custom tool.
         */
        ChatCompletionNamedToolChoiceCustom: {
            custom: {
                /** @description The name of the custom tool to call. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description For custom tool calling, the type is always `custom`.
             * @enum {string}
             */
            type: "custom";
        } & {
            [key: string]: unknown;
        };
        /**
         * Assistant message
         * @description Messages sent by the model in response to user messages.
         *
         */
        ChatCompletionRequestAssistantMessage: {
            audio?: ({
                /** @description Unique identifier for a previous audio response from the model.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            }) | null;
            content?: (string | components["schemas"]["ChatCompletionRequestAssistantMessageContentPart"][]) | null;
            function_call?: ({
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
            } & {
                [key: string]: unknown;
            }) | null;
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            refusal?: string | null;
            /**
             * @description The role of the messages author, in this case `assistant`.
             * @enum {string}
             */
            role: "assistant";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCalls"];
        } & {
            [key: string]: unknown;
        };
        ChatCompletionRequestAssistantMessageContentPart: components["schemas"]["ChatCompletionRequestMessageContentPartText"] | components["schemas"]["ChatCompletionRequestMessageContentPartRefusal"];
        /**
         * Developer message
         * @description Developer-provided instructions that the model should follow, regardless of
         *     messages sent by the user. With o1 models and newer, `developer` messages
         *     replace the previous `system` messages.
         *
         */
        ChatCompletionRequestDeveloperMessage: {
            /** @description The contents of the developer message. */
            content: string | components["schemas"]["ChatCompletionRequestMessageContentPartText"][];
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `developer`.
             * @enum {string}
             */
            role: "developer";
        } & {
            [key: string]: unknown;
        };
        /**
         * Function message
         * @deprecated
         */
        ChatCompletionRequestFunctionMessage: {
            content: string | null;
            /** @description The name of the function to call. */
            name: string;
            /**
             * @description The role of the messages author, in this case `function`.
             * @enum {string}
             */
            role: "function";
        } & {
            [key: string]: unknown;
        };
        ChatCompletionRequestMessage: components["schemas"]["ChatCompletionRequestDeveloperMessage"] | components["schemas"]["ChatCompletionRequestSystemMessage"] | components["schemas"]["ChatCompletionRequestUserMessage"] | components["schemas"]["ChatCompletionRequestAssistantMessage"] | components["schemas"]["ChatCompletionRequestToolMessage"] | components["schemas"]["ChatCompletionRequestFunctionMessage"];
        /**
         * Audio content part
         * @description Learn about [audio inputs](https://platform.openai.com/docs/guides/audio).
         *
         */
        ChatCompletionRequestMessageContentPartAudio: {
            input_audio: {
                /** @description Base64 encoded audio data. */
                data: string;
                /**
                 * @description The format of the encoded audio data. Currently supports "wav" and "mp3".
                 *
                 * @enum {string}
                 */
                format: "wav" | "mp3";
            } & {
                [key: string]: unknown;
            };
            /**
             * @description The type of the content part. Always `input_audio`.
             * @enum {string}
             */
            type: "input_audio";
        } & {
            [key: string]: unknown;
        };
        /**
         * File content part
         * @description Learn about [file inputs](https://platform.openai.com/docs/guides/text) for text generation.
         *
         */
        ChatCompletionRequestMessageContentPartFile: {
            file: {
                /** @description The base64 encoded file data, used when passing the file to the model
                 *     as a string.
                 *      */
                file_data?: string;
                /** @description The ID of an uploaded file to use as input.
                 *      */
                file_id?: string;
                /** @description The name of the file, used when passing the file to the model as a
                 *     string.
                 *      */
                filename?: string;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description The type of the content part. Always `file`.
             * @enum {string}
             */
            type: "file";
        } & {
            [key: string]: unknown;
        };
        /**
         * Image content part
         * @description Learn about [image inputs](https://platform.openai.com/docs/guides/vision).
         *
         */
        ChatCompletionRequestMessageContentPartImage: {
            image_url: {
                /**
                 * @description Specifies the detail level of the image. Learn more in the [Vision guide](https://platform.openai.com/docs/guides/vision#low-or-high-fidelity-image-understanding).
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /**
                 * Format: uri
                 * @description Either a URL of the image or the base64 encoded image data.
                 */
                url: string;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "image_url";
        } & {
            [key: string]: unknown;
        };
        /** Refusal content part */
        ChatCompletionRequestMessageContentPartRefusal: {
            /** @description The refusal message generated by the model. */
            refusal: string;
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "refusal";
        } & {
            [key: string]: unknown;
        };
        /**
         * Text content part
         * @description Learn about [text inputs](https://platform.openai.com/docs/guides/text-generation).
         *
         */
        ChatCompletionRequestMessageContentPartText: {
            /** @description The text content. */
            text: string;
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "text";
        } & {
            [key: string]: unknown;
        };
        /**
         * System message
         * @description Developer-provided instructions that the model should follow, regardless of
         *     messages sent by the user. With o1 models and newer, use `developer` messages
         *     for this purpose instead.
         *
         */
        ChatCompletionRequestSystemMessage: {
            /** @description The contents of the system message. */
            content: string | components["schemas"]["ChatCompletionRequestSystemMessageContentPart"][];
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `system`.
             * @enum {string}
             */
            role: "system";
        } & {
            [key: string]: unknown;
        };
        ChatCompletionRequestSystemMessageContentPart: components["schemas"]["ChatCompletionRequestMessageContentPartText"];
        /** Tool message */
        ChatCompletionRequestToolMessage: {
            /** @description The contents of the tool message. */
            content: string | components["schemas"]["ChatCompletionRequestToolMessageContentPart"][];
            /**
             * @description The role of the messages author, in this case `tool`.
             * @enum {string}
             */
            role: "tool";
            /** @description Tool call that this message is responding to. */
            tool_call_id: string;
        } & {
            [key: string]: unknown;
        };
        ChatCompletionRequestToolMessageContentPart: components["schemas"]["ChatCompletionRequestMessageContentPartText"];
        /**
         * User message
         * @description Messages sent by an end user, containing prompts or additional context
         *     information.
         *
         */
        ChatCompletionRequestUserMessage: {
            /** @description The contents of the user message.
             *      */
            content: string | components["schemas"]["ChatCompletionRequestUserMessageContentPart"][];
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `user`.
             * @enum {string}
             */
            role: "user";
        } & {
            [key: string]: unknown;
        };
        ChatCompletionRequestUserMessageContentPart: components["schemas"]["ChatCompletionRequestMessageContentPartText"] | components["schemas"]["ChatCompletionRequestMessageContentPartImage"] | components["schemas"]["ChatCompletionRequestMessageContentPartAudio"] | components["schemas"]["ChatCompletionRequestMessageContentPartFile"];
        /** @description A chat completion message generated by the model. */
        ChatCompletionResponseMessage: {
            /** @description Annotations for the message, when applicable, as when using the
             *     [web search tool](https://platform.openai.com/docs/guides/tools-web-search?api-mode=chat).
             *      */
            annotations?: ({
                /**
                 * @description The type of the URL citation. Always `url_citation`.
                 * @enum {string}
                 */
                type: "url_citation";
                /** @description A URL citation when using web search. */
                url_citation: {
                    /** @description The index of the last character of the URL citation in the message. */
                    end_index: number;
                    /** @description The index of the first character of the URL citation in the message. */
                    start_index: number;
                    /** @description The title of the web resource. */
                    title: string;
                    /** @description The URL of the web resource. */
                    url: string;
                } & {
                    [key: string]: unknown;
                };
            } & {
                [key: string]: unknown;
            })[];
            audio?: ({
                /** @description Base64 encoded audio bytes generated by the model, in the format
                 *     specified in the request.
                 *      */
                data: string;
                /** @description The Unix timestamp (in seconds) for when this audio response will
                 *     no longer be accessible on the server for use in multi-turn
                 *     conversations.
                 *      */
                expires_at: number;
                /** @description Unique identifier for this audio response. */
                id: string;
                /** @description Transcript of the audio generated by the model. */
                transcript: string;
            } & {
                [key: string]: unknown;
            }) | null;
            content: string | null;
            /**
             * @deprecated
             * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
             */
            function_call?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            refusal: string | null;
            /**
             * @description The role of the author of this message.
             * @enum {string}
             */
            role: "assistant";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCalls"];
        } & {
            [key: string]: unknown;
        };
        ChatCompletionStreamOptions: ({
            /** @description When true, stream obfuscation will be enabled. Stream obfuscation adds
             *     random characters to an `obfuscation` field on streaming delta events to
             *     normalize payload sizes as a mitigation to certain side-channel attacks.
             *     These obfuscation fields are included by default, but add a small amount
             *     of overhead to the data stream. You can set `include_obfuscation` to
             *     false to optimize for bandwidth if you trust the network links between
             *     your application and the OpenAI API.
             *      */
            include_obfuscation?: boolean;
            /** @description If set, an additional chunk will be streamed before the `data: [DONE]`
             *     message. The `usage` field on this chunk shows the token usage statistics
             *     for the entire request, and the `choices` field will always be an empty
             *     array.
             *
             *     All other chunks will also include a `usage` field, but with a null
             *     value. **NOTE:** If the stream is interrupted, you may not receive the
             *     final usage chunk which contains the total token usage for the request.
             *      */
            include_usage?: boolean;
        } & {
            [key: string]: unknown;
        }) | null;
        /** @description A chat completion delta generated by streamed model responses. */
        ChatCompletionStreamResponseDelta: {
            content?: string | null;
            /**
             * @deprecated
             * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
             */
            function_call?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments?: string;
                /** @description The name of the function to call. */
                name?: string;
            } & {
                [key: string]: unknown;
            };
            refusal?: string | null;
            /**
             * @description The role of the author of this message.
             * @enum {string}
             */
            role?: "developer" | "system" | "user" | "assistant" | "tool";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCallChunk"][];
        } & {
            [key: string]: unknown;
        };
        ChatCompletionTokenLogprob: {
            bytes: number[] | null;
            /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
            logprob: number;
            /** @description The token. */
            token: string;
            /** @description List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
            top_logprobs: ({
                bytes: number[] | null;
                /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
                logprob: number;
                /** @description The token. */
                token: string;
            } & {
                [key: string]: unknown;
            })[];
        } & {
            [key: string]: unknown;
        };
        /**
         * Function tool
         * @description A function tool that can be used to generate a response.
         *
         */
        ChatCompletionTool: {
            function: components["schemas"]["FunctionObject"];
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type: "function";
        } & {
            [key: string]: unknown;
        };
        /** @description Controls which (if any) tool is called by the model.
         *     `none` means the model will not call any tool and instead generates a message.
         *     `auto` means the model can pick between generating a message or calling one or more tools.
         *     `required` means the model must call one or more tools.
         *     Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
         *
         *     `none` is the default when no tools are present. `auto` is the default if tools are present.
         *      */
        ChatCompletionToolChoiceOption: ("none" | "auto" | "required") | components["schemas"]["ChatCompletionAllowedToolsChoice"] | components["schemas"]["ChatCompletionNamedToolChoice"] | components["schemas"]["ChatCompletionNamedToolChoiceCustom"];
        /** @enum {string} */
        ChatModel: "gpt-5.2" | "gpt-5.2-2025-12-11" | "gpt-5.2-chat-latest" | "gpt-5.2-pro" | "gpt-5.2-pro-2025-12-11" | "gpt-5.1" | "gpt-5.1-2025-11-13" | "gpt-5.1-codex" | "gpt-5.1-mini" | "gpt-5.1-chat-latest" | "gpt-5" | "gpt-5-mini" | "gpt-5-nano" | "gpt-5-2025-08-07" | "gpt-5-mini-2025-08-07" | "gpt-5-nano-2025-08-07" | "gpt-5-chat-latest" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "o4-mini" | "o4-mini-2025-04-16" | "o3" | "o3-2025-04-16" | "o3-mini" | "o3-mini-2025-01-31" | "o1" | "o1-2024-12-17" | "o1-preview" | "o1-preview-2024-09-12" | "o1-mini" | "o1-mini-2024-09-12" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-audio-preview" | "gpt-4o-audio-preview-2024-10-01" | "gpt-4o-audio-preview-2024-12-17" | "gpt-4o-audio-preview-2025-06-03" | "gpt-4o-mini-audio-preview" | "gpt-4o-mini-audio-preview-2024-12-17" | "gpt-4o-search-preview" | "gpt-4o-mini-search-preview" | "gpt-4o-search-preview-2025-03-11" | "gpt-4o-mini-search-preview-2025-03-11" | "chatgpt-4o-latest" | "codex-mini-latest" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613";
        /** @description Usage statistics for the completion request. */
        CompletionUsage: {
            /**
             * @description Number of tokens in the generated completion.
             * @default 0
             */
            completion_tokens: number;
            /** @description Breakdown of tokens used in a completion. */
            completion_tokens_details?: {
                /**
                 * @description When using Predicted Outputs, the number of tokens in the
                 *     prediction that appeared in the completion.
                 *
                 * @default 0
                 */
                accepted_prediction_tokens: number;
                /**
                 * @description Audio input tokens generated by the model.
                 * @default 0
                 */
                audio_tokens: number;
                /**
                 * @description Tokens generated by the model for reasoning.
                 * @default 0
                 */
                reasoning_tokens: number;
                /**
                 * @description When using Predicted Outputs, the number of tokens in the
                 *     prediction that did not appear in the completion. However, like
                 *     reasoning tokens, these tokens are still counted in the total
                 *     completion tokens for purposes of billing, output, and context window
                 *     limits.
                 *
                 * @default 0
                 */
                rejected_prediction_tokens: number;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description Number of tokens in the prompt.
             * @default 0
             */
            prompt_tokens: number;
            /** @description Breakdown of tokens used in the prompt. */
            prompt_tokens_details?: {
                /**
                 * @description Audio input tokens present in the prompt.
                 * @default 0
                 */
                audio_tokens: number;
                /**
                 * @description Cached tokens present in the prompt.
                 * @default 0
                 */
                cached_tokens: number;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description Total number of tokens used in the request (prompt + completion).
             * @default 0
             */
            total_tokens: number;
        } & {
            [key: string]: unknown;
        };
        CreateChatCompletionRequest: components["schemas"]["CreateModelResponseProperties"] & ({
            /** @description Parameters for audio output. Required when audio output is requested with
             *     `modalities: ["audio"]`. [Learn more](https://platform.openai.com/docs/guides/audio).
             *      */
            audio?: ({
                /**
                 * @description Specifies the output audio format. Must be one of `wav`, `mp3`, `flac`,
                 *     `opus`, or `pcm16`.
                 *
                 * @enum {string}
                 */
                format: "wav" | "aac" | "mp3" | "flac" | "opus" | "pcm16";
                /** @description The voice the model uses to respond. Supported voices are
                 *     `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `nova`, `onyx`, `sage`, and `shimmer`.
                 *      */
                voice: components["schemas"]["VoiceIdsShared"];
            } & {
                [key: string]: unknown;
            }) | null;
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on
             *     their existing frequency in the text so far, decreasing the model's
             *     likelihood to repeat the same line verbatim.
             *
             * @default 0
             */
            frequency_penalty: number | null;
            /**
             * @deprecated
             * @description Deprecated in favor of `tool_choice`.
             *
             *     Controls which (if any) function is called by the model.
             *
             *     `none` means the model will not call a function and instead generates a
             *     message.
             *
             *     `auto` means the model can pick between generating a message or calling a
             *     function.
             *
             *     Specifying a particular function via `{"name": "my_function"}` forces the
             *     model to call that function.
             *
             *     `none` is the default when no functions are present. `auto` is the default
             *     if functions are present.
             *
             */
            function_call?: ("none" | "auto") | components["schemas"]["ChatCompletionFunctionCallOption"];
            /**
             * @deprecated
             * @description Deprecated in favor of `tools`.
             *
             *     A list of functions the model may generate JSON inputs for.
             *
             */
            functions?: components["schemas"]["ChatCompletionFunctions"][];
            /**
             * @description Modify the likelihood of specified tokens appearing in the completion.
             *
             *     Accepts a JSON object that maps tokens (specified by their token ID in the
             *     tokenizer) to an associated bias value from -100 to 100. Mathematically,
             *     the bias is added to the logits generated by the model prior to sampling.
             *     The exact effect will vary per model, but values between -1 and 1 should
             *     decrease or increase likelihood of selection; values like -100 or 100
             *     should result in a ban or exclusive selection of the relevant token.
             *
             * @default null
             */
            logit_bias: {
                [key: string]: number;
            } | null;
            /**
             * @description Whether to return log probabilities of the output tokens or not. If true,
             *     returns the log probabilities of each output token returned in the
             *     `content` of `message`.
             *
             * @default false
             */
            logprobs: boolean | null;
            /** @description An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](https://platform.openai.com/docs/guides/reasoning).
             *      */
            max_completion_tokens?: number | null;
            /**
             * @deprecated
             * @description The maximum number of [tokens](/tokenizer) that can be generated in the
             *     chat completion. This value can be used to control
             *     [costs](https://openai.com/api/pricing/) for text generated via API.
             *
             *     This value is now deprecated in favor of `max_completion_tokens`, and is
             *     not compatible with [o-series models](https://platform.openai.com/docs/guides/reasoning).
             *
             */
            max_tokens?: number | null;
            /** @description A list of messages comprising the conversation so far. Depending on the
             *     [model](https://platform.openai.com/docs/models) you use, different message types (modalities) are
             *     supported, like [text](https://platform.openai.com/docs/guides/text-generation),
             *     [images](https://platform.openai.com/docs/guides/vision), and [audio](https://platform.openai.com/docs/guides/audio).
             *      */
            messages: components["schemas"]["ChatCompletionRequestMessage"][];
            modalities?: components["schemas"]["ResponseModalities"];
            /** @description Model ID used to generate the response, like `gpt-4o` or `o3`. OpenAI
             *     offers a wide range of models with different capabilities, performance
             *     characteristics, and price points. Refer to the [model guide](https://platform.openai.com/docs/models)
             *     to browse and compare available models.
             *      */
            model: components["schemas"]["ModelIdsShared"];
            /**
             * @description How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.
             * @default 1
             * @example 1
             */
            n: number;
            parallel_tool_calls?: components["schemas"]["ParallelToolCalls"];
            /** @description Configuration for a [Predicted Output](https://platform.openai.com/docs/guides/predicted-outputs),
             *     which can greatly improve response times when large parts of the model
             *     response are known ahead of time. This is most common when you are
             *     regenerating a file with only minor changes to most of the content.
             *      */
            prediction?: components["schemas"]["PredictionContent"] | null;
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on
             *     whether they appear in the text so far, increasing the model's likelihood
             *     to talk about new topics.
             *
             * @default 0
             */
            presence_penalty: number | null;
            reasoning_effort?: components["schemas"]["ReasoningEffort"];
            /** @description An object specifying the format that the model must output.
             *
             *     Setting to `{ "type": "json_schema", "json_schema": {...} }` enables
             *     Structured Outputs which ensures the model will match your supplied JSON
             *     schema. Learn more in the [Structured Outputs
             *     guide](https://platform.openai.com/docs/guides/structured-outputs).
             *
             *     Setting to `{ "type": "json_object" }` enables the older JSON mode, which
             *     ensures the message the model generates is valid JSON. Using `json_schema`
             *     is preferred for models that support it.
             *      */
            response_format?: components["schemas"]["ResponseFormatText"] | components["schemas"]["ResponseFormatJsonSchema"] | components["schemas"]["ResponseFormatJsonObject"];
            /**
             * @deprecated
             * @description This feature is in Beta.
             *     If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
             *     Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
             *
             */
            seed?: number | null;
            stop?: components["schemas"]["StopConfiguration"];
            /**
             * @description Whether or not to store the output of this chat completion request for
             *     use in our [model distillation](https://platform.openai.com/docs/guides/distillation) or
             *     [evals](https://platform.openai.com/docs/guides/evals) products.
             *
             *     Supports text and image inputs. Note: image inputs over 8MB will be dropped.
             *
             * @default false
             */
            store: boolean | null;
            /**
             * @description If set to true, the model response data will be streamed to the client
             *     as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
             *     See the [Streaming section below](https://platform.openai.com/docs/api-reference/chat/streaming)
             *     for more information, along with the [streaming responses](https://platform.openai.com/docs/guides/streaming-responses)
             *     guide for more information on how to handle the streaming events.
             *
             * @default false
             */
            stream: boolean | null;
            stream_options?: components["schemas"]["ChatCompletionStreamOptions"];
            tool_choice?: components["schemas"]["ChatCompletionToolChoiceOption"];
            /** @description A list of tools the model may call. You can provide either
             *     [custom tools](https://platform.openai.com/docs/guides/function-calling#custom-tools) or
             *     [function tools](https://platform.openai.com/docs/guides/function-calling).
             *      */
            tools?: (components["schemas"]["ChatCompletionTool"] | components["schemas"]["CustomToolChatCompletions"])[];
            /** @description An integer between 0 and 20 specifying the number of most likely tokens to
             *     return at each token position, each with an associated log probability.
             *     `logprobs` must be set to `true` if this parameter is used.
             *      */
            top_logprobs?: number | null;
            verbosity?: components["schemas"]["Verbosity"];
            /**
             * Web search
             * @description This tool searches the web for relevant results to use in a response.
             *     Learn more about the [web search tool](https://platform.openai.com/docs/guides/tools-web-search?api-mode=chat).
             *
             */
            web_search_options?: {
                search_context_size?: components["schemas"]["WebSearchContextSize"];
                /** @description Approximate location parameters for the search.
                 *      */
                user_location?: ({
                    approximate: components["schemas"]["WebSearchLocation"];
                    /**
                     * @description The type of location approximation. Always `approximate`.
                     *
                     * @enum {string}
                     */
                    type: "approximate";
                } & {
                    [key: string]: unknown;
                }) | null;
            } & {
                [key: string]: unknown;
            };
        } & {
            [key: string]: unknown;
        });
        /** @description Represents a chat completion response returned by model, based on the provided input. */
        CreateChatCompletionResponse: {
            /** @description A list of chat completion choices. Can be more than one if `n` is greater than 1. */
            choices: ({
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
                 *     `length` if the maximum number of tokens specified in the request was reached,
                 *     `content_filter` if content was omitted due to a flag from our content filters,
                 *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
                 *
                 * @enum {string}
                 */
                finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call";
                /** @description The index of the choice in the list of choices. */
                index: number;
                logprobs: ({
                    content: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                    refusal: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                } & {
                    [key: string]: unknown;
                }) | null;
                message: components["schemas"]["ChatCompletionResponseMessage"];
            } & {
                [key: string]: unknown;
            })[];
            /** @description The Unix timestamp (in seconds) of when the chat completion was created. */
            created: number;
            /** @description A unique identifier for the chat completion. */
            id: string;
            /** @description The model used for the chat completion. */
            model: string;
            /**
             * @description The object type, which is always `chat.completion`.
             * @enum {string}
             */
            object: "chat.completion";
            service_tier?: components["schemas"]["ServiceTier"];
            /**
             * @deprecated
             * @description This fingerprint represents the backend configuration that the model runs with.
             *
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *
             */
            system_fingerprint?: string;
            usage?: components["schemas"]["CompletionUsage"];
        } & {
            [key: string]: unknown;
        };
        /** @description Represents a streamed chunk of a chat completion response returned
         *     by the model, based on the provided input.
         *     [Learn more](https://platform.openai.com/docs/guides/streaming-responses).
         *      */
        CreateChatCompletionStreamResponse: {
            /** @description A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the
             *     last chunk if you set `stream_options: {"include_usage": true}`.
             *      */
            choices: ({
                delta: components["schemas"]["ChatCompletionStreamResponseDelta"];
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
                 *     `length` if the maximum number of tokens specified in the request was reached,
                 *     `content_filter` if content was omitted due to a flag from our content filters,
                 *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
                 *
                 * @enum {string|null}
                 */
                finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call" | null;
                /** @description The index of the choice in the list of choices. */
                index: number;
                /** @description Log probability information for the choice. */
                logprobs?: ({
                    /** @description A list of message content tokens with log probability information. */
                    content: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                    /** @description A list of message refusal tokens with log probability information. */
                    refusal: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                } & {
                    [key: string]: unknown;
                }) | null;
            } & {
                [key: string]: unknown;
            })[];
            /** @description The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. */
            created: number;
            /** @description A unique identifier for the chat completion. Each chunk has the same ID. */
            id: string;
            /** @description The model to generate the completion. */
            model: string;
            /**
             * @description The object type, which is always `chat.completion.chunk`.
             * @enum {string}
             */
            object: "chat.completion.chunk";
            service_tier?: components["schemas"]["ServiceTier"];
            /**
             * @deprecated
             * @description This fingerprint represents the backend configuration that the model runs with.
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *
             */
            system_fingerprint?: string;
            /** @description An optional field that will only be present when you set
             *     `stream_options: {"include_usage": true}` in your request. When present, it
             *     contains a null value **except for the last chunk** which contains the
             *     token usage statistics for the entire request.
             *
             *     **NOTE:** If the stream is interrupted or cancelled, you may not
             *     receive the final usage chunk which contains the total token usage for
             *     the request.
             *      */
            usage?: components["schemas"]["CompletionUsage"];
        } & {
            [key: string]: unknown;
        };
        CreateEmbeddingRequest: {
            /** @description The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.
             *      */
            dimensions?: number;
            /**
             * @description The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).
             * @default float
             * @example float
             * @enum {string}
             */
            encoding_format: "float" | "base64";
            /**
             * @description Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for all embedding models), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. In addition to the per-input token limit, all embedding  models enforce a maximum of 300,000 tokens summed across all inputs in a  single request.
             *
             * @example The quick brown fox jumped over the lazy dog
             */
            input: string | string[] | number[] | number[][];
            /**
             * @description ID of the model to use. You can use the [List models](https://platform.openai.com/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](https://platform.openai.com/docs/models) for descriptions of them.
             *
             * @example text-embedding-3-small
             */
            model: string | ("text-embedding-ada-002" | "text-embedding-3-small" | "text-embedding-3-large");
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
        } & {
            [key: string]: unknown;
        };
        CreateEmbeddingResponse: {
            /** @description The list of embeddings generated by the model. */
            data: components["schemas"]["Embedding"][];
            /** @description The name of the model used to generate the embedding. */
            model: string;
            /**
             * @description The object type, which is always "list".
             * @enum {string}
             */
            object: "list";
            /** @description The usage information for the request. */
            usage: {
                /** @description The number of tokens used by the prompt. */
                prompt_tokens: number;
                /** @description The total number of tokens used by the request. */
                total_tokens: number;
            } & {
                [key: string]: unknown;
            };
        } & {
            [key: string]: unknown;
        };
        CreateModelResponseProperties: components["schemas"]["ModelResponseProperties"] & ({
            /** @description An integer between 0 and 20 specifying the number of most likely tokens to
             *     return at each token position, each with an associated log probability.
             *      */
            top_logprobs?: number;
        } & {
            [key: string]: unknown;
        });
        /**
         * Custom tool
         * @description A custom tool that processes input using a specified format.
         *
         */
        CustomToolChatCompletions: {
            /**
             * Custom tool properties
             * @description Properties of the custom tool.
             *
             */
            custom: {
                /** @description Optional description of the custom tool, used to provide more context.
                 *      */
                description?: string;
                /** @description The input format for the custom tool. Default is unconstrained text.
                 *      */
                format?: ({
                    /**
                     * @description Unconstrained text format. Always `text`.
                     * @enum {string}
                     */
                    type: "text";
                } & {
                    [key: string]: unknown;
                }) | ({
                    /**
                     * Grammar format
                     * @description Your chosen grammar.
                     */
                    grammar: {
                        /** @description The grammar definition. */
                        definition: string;
                        /**
                         * @description The syntax of the grammar definition. One of `lark` or `regex`.
                         * @enum {string}
                         */
                        syntax: "lark" | "regex";
                    } & {
                        [key: string]: unknown;
                    };
                    /**
                     * @description Grammar format. Always `grammar`.
                     * @enum {string}
                     */
                    type: "grammar";
                } & {
                    [key: string]: unknown;
                });
                /** @description The name of the custom tool, used to identify it in tool calls. */
                name: string;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description The type of the custom tool. Always `custom`.
             * @enum {string}
             */
            type: "custom";
        } & {
            [key: string]: unknown;
        };
        /** @description Represents an embedding vector returned by embedding endpoint.
         *      */
        Embedding: {
            /** @description The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](https://platform.openai.com/docs/guides/embeddings).
             *      */
            embedding: number[];
            /** @description The index of the embedding in the list of embeddings. */
            index: number;
            /**
             * @description The object type, which is always "embedding".
             * @enum {string}
             */
            object: "embedding";
        } & {
            [key: string]: unknown;
        };
        FunctionObject: {
            /** @description A description of what the function does, used by the model to choose when and how to call the function. */
            description?: string;
            /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
            name: string;
            parameters?: components["schemas"]["FunctionParameters"];
            strict?: boolean | null;
        } & {
            [key: string]: unknown;
        };
        /** @description The parameters the functions accepts, described as a JSON Schema object. See the [guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
         *
         *     Omitting `parameters` defines a function with an empty parameter list. */
        FunctionParameters: {
            [key: string]: unknown;
        };
        ListModelsResponse: {
            data: components["schemas"]["Model"][];
            /** @enum {string} */
            object: "list";
        } & {
            [key: string]: unknown;
        };
        Metadata: {
            [key: string]: string;
        } | null;
        /**
         * Model
         * @description Describes an OpenAI model offering that can be used with the API.
         */
        Model: {
            /** @description The Unix timestamp (in seconds) when the model was created. */
            created: number;
            /** @description The model identifier, which can be referenced in the API endpoints. */
            id: string;
            /**
             * @description The object type, which is always "model".
             * @enum {string}
             */
            object: "model";
            /** @description The organization that owns the model. */
            owned_by: string;
        } & {
            [key: string]: unknown;
        };
        /** @example gpt-4o */
        ModelIdsShared: string | components["schemas"]["ChatModel"];
        ModelResponseProperties: {
            metadata?: components["schemas"]["Metadata"];
            /**
             * @description Used by OpenAI to cache responses for similar requests to optimize your cache hit rates. Replaces the `user` field. [Learn more](https://platform.openai.com/docs/guides/prompt-caching).
             *
             * @example prompt-cache-key-1234
             */
            prompt_cache_key?: string;
            prompt_cache_retention?: ("in-memory" | "24h") | null;
            /**
             * @description A stable identifier used to help detect users of your application that may be violating OpenAI's usage policies.
             *     The IDs should be a string that uniquely identifies each user. We recommend hashing their username or email address, in order to avoid sending us any identifying information. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#safety-identifiers).
             *
             * @example safety-identifier-1234
             */
            safety_identifier?: string;
            service_tier?: components["schemas"]["ServiceTier"];
            temperature?: number | null;
            top_logprobs?: number | null;
            top_p?: number | null;
            /**
             * @deprecated
             * @description This field is being replaced by `safety_identifier` and `prompt_cache_key`. Use `prompt_cache_key` instead to maintain caching optimizations.
             *     A stable identifier for your end-users.
             *     Used to boost cache hit rates by better bucketing similar requests and  to help OpenAI detect and prevent abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices#safety-identifiers).
             *
             * @example user-1234
             */
            user?: string;
        } & {
            [key: string]: unknown;
        };
        /**
         * @description Whether to enable [parallel function calling](https://platform.openai.com/docs/guides/function-calling#configuring-parallel-function-calling) during tool use.
         * @default true
         */
        ParallelToolCalls: boolean;
        /**
         * Static Content
         * @description Static predicted output content, such as the content of a text file that is
         *     being regenerated.
         *
         */
        PredictionContent: {
            /** @description The content that should be matched when generating a model response.
             *     If generated tokens would match this content, the entire model response
             *     can be returned much more quickly.
             *      */
            content: string | components["schemas"]["ChatCompletionRequestMessageContentPartText"][];
            /**
             * @description The type of the predicted content you want to provide. This type is
             *     currently always `content`.
             *
             * @enum {string}
             */
            type: "content";
        } & {
            [key: string]: unknown;
        };
        ReasoningEffort: ("none" | "minimal" | "low" | "medium" | "high" | "xhigh") | null;
        /**
         * JSON object
         * @description JSON object response format. An older method of generating JSON responses.
         *     Using `json_schema` is recommended for models that support it. Note that the
         *     model will not generate JSON without a system or user message instructing it
         *     to do so.
         *
         */
        ResponseFormatJsonObject: {
            /**
             * @description The type of response format being defined. Always `json_object`.
             * @enum {string}
             */
            type: "json_object";
        } & {
            [key: string]: unknown;
        };
        /**
         * JSON schema
         * @description JSON Schema response format. Used to generate structured JSON responses.
         *     Learn more about [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs).
         *
         */
        ResponseFormatJsonSchema: {
            /**
             * JSON schema
             * @description Structured Outputs configuration options, including a JSON Schema.
             *
             */
            json_schema: {
                /** @description A description of what the response format is for, used by the model to
                 *     determine how to respond in the format.
                 *      */
                description?: string;
                /** @description The name of the response format. Must be a-z, A-Z, 0-9, or contain
                 *     underscores and dashes, with a maximum length of 64.
                 *      */
                name: string;
                schema?: components["schemas"]["ResponseFormatJsonSchemaSchema"];
                strict?: boolean | null;
            } & {
                [key: string]: unknown;
            };
            /**
             * @description The type of response format being defined. Always `json_schema`.
             * @enum {string}
             */
            type: "json_schema";
        } & {
            [key: string]: unknown;
        };
        /**
         * JSON schema
         * @description The schema for the response format, described as a JSON Schema object.
         *     Learn how to build JSON schemas [here](https://json-schema.org/).
         *
         */
        ResponseFormatJsonSchemaSchema: {
            [key: string]: unknown;
        };
        /**
         * Text
         * @description Default response format. Used to generate text responses.
         *
         */
        ResponseFormatText: {
            /**
             * @description The type of response format being defined. Always `text`.
             * @enum {string}
             */
            type: "text";
        } & {
            [key: string]: unknown;
        };
        ResponseModalities: ("text" | "audio")[] | null;
        ServiceTier: ("auto" | "default" | "flex" | "scale" | "priority") | null;
        /** @description Not supported with latest reasoning models `o3` and `o4-mini`.
         *
         *     Up to 4 sequences where the API will stop generating further tokens. The
         *     returned text will not contain the stop sequence.
         *      */
        StopConfiguration: (string | string[]) | null;
        Verbosity: ("low" | "medium" | "high") | null;
        /** @example ash */
        VoiceIdsShared: string | ("alloy" | "ash" | "ballad" | "coral" | "echo" | "sage" | "shimmer" | "verse" | "marin" | "cedar");
        /**
         * batch.cancelled
         * @description Sent when a batch API request has been cancelled.
         *
         */
        WebhookBatchCancelled: {
            /** @description The Unix timestamp (in seconds) of when the batch API request was cancelled.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the batch API request.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `batch.cancelled`.
             *
             * @enum {string}
             */
            type: "batch.cancelled";
        } & {
            [key: string]: unknown;
        };
        /**
         * batch.completed
         * @description Sent when a batch API request has been completed.
         *
         */
        WebhookBatchCompleted: {
            /** @description The Unix timestamp (in seconds) of when the batch API request was completed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the batch API request.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `batch.completed`.
             *
             * @enum {string}
             */
            type: "batch.completed";
        } & {
            [key: string]: unknown;
        };
        /**
         * batch.expired
         * @description Sent when a batch API request has expired.
         *
         */
        WebhookBatchExpired: {
            /** @description The Unix timestamp (in seconds) of when the batch API request expired.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the batch API request.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `batch.expired`.
             *
             * @enum {string}
             */
            type: "batch.expired";
        } & {
            [key: string]: unknown;
        };
        /**
         * batch.failed
         * @description Sent when a batch API request has failed.
         *
         */
        WebhookBatchFailed: {
            /** @description The Unix timestamp (in seconds) of when the batch API request failed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the batch API request.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `batch.failed`.
             *
             * @enum {string}
             */
            type: "batch.failed";
        } & {
            [key: string]: unknown;
        };
        /**
         * eval.run.canceled
         * @description Sent when an eval run has been canceled.
         *
         */
        WebhookEvalRunCanceled: {
            /** @description The Unix timestamp (in seconds) of when the eval run was canceled.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the eval run.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `eval.run.canceled`.
             *
             * @enum {string}
             */
            type: "eval.run.canceled";
        } & {
            [key: string]: unknown;
        };
        /**
         * eval.run.failed
         * @description Sent when an eval run has failed.
         *
         */
        WebhookEvalRunFailed: {
            /** @description The Unix timestamp (in seconds) of when the eval run failed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the eval run.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `eval.run.failed`.
             *
             * @enum {string}
             */
            type: "eval.run.failed";
        } & {
            [key: string]: unknown;
        };
        /**
         * eval.run.succeeded
         * @description Sent when an eval run has succeeded.
         *
         */
        WebhookEvalRunSucceeded: {
            /** @description The Unix timestamp (in seconds) of when the eval run succeeded.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the eval run.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `eval.run.succeeded`.
             *
             * @enum {string}
             */
            type: "eval.run.succeeded";
        } & {
            [key: string]: unknown;
        };
        /**
         * fine_tuning.job.cancelled
         * @description Sent when a fine-tuning job has been cancelled.
         *
         */
        WebhookFineTuningJobCancelled: {
            /** @description The Unix timestamp (in seconds) of when the fine-tuning job was cancelled.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the fine-tuning job.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `fine_tuning.job.cancelled`.
             *
             * @enum {string}
             */
            type: "fine_tuning.job.cancelled";
        } & {
            [key: string]: unknown;
        };
        /**
         * fine_tuning.job.failed
         * @description Sent when a fine-tuning job has failed.
         *
         */
        WebhookFineTuningJobFailed: {
            /** @description The Unix timestamp (in seconds) of when the fine-tuning job failed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the fine-tuning job.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `fine_tuning.job.failed`.
             *
             * @enum {string}
             */
            type: "fine_tuning.job.failed";
        } & {
            [key: string]: unknown;
        };
        /**
         * fine_tuning.job.succeeded
         * @description Sent when a fine-tuning job has succeeded.
         *
         */
        WebhookFineTuningJobSucceeded: {
            /** @description The Unix timestamp (in seconds) of when the fine-tuning job succeeded.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the fine-tuning job.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `fine_tuning.job.succeeded`.
             *
             * @enum {string}
             */
            type: "fine_tuning.job.succeeded";
        } & {
            [key: string]: unknown;
        };
        /**
         * realtime.call.incoming
         * @description Sent when Realtime API Receives a incoming SIP call.
         *
         */
        WebhookRealtimeCallIncoming: {
            /** @description The Unix timestamp (in seconds) of when the model response was completed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of this call.
                 *      */
                call_id: string;
                /** @description Headers from the SIP Invite.
                 *      */
                sip_headers: ({
                    /** @description Name of the SIP Header.
                     *      */
                    name: string;
                    /** @description Value of the SIP Header.
                     *      */
                    value: string;
                } & {
                    [key: string]: unknown;
                })[];
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `realtime.call.incoming`.
             *
             * @enum {string}
             */
            type: "realtime.call.incoming";
        } & {
            [key: string]: unknown;
        };
        /**
         * response.cancelled
         * @description Sent when a background response has been cancelled.
         *
         */
        WebhookResponseCancelled: {
            /** @description The Unix timestamp (in seconds) of when the model response was cancelled.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the model response.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `response.cancelled`.
             *
             * @enum {string}
             */
            type: "response.cancelled";
        } & {
            [key: string]: unknown;
        };
        /**
         * response.completed
         * @description Sent when a background response has been completed.
         *
         */
        WebhookResponseCompleted: {
            /** @description The Unix timestamp (in seconds) of when the model response was completed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the model response.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `response.completed`.
             *
             * @enum {string}
             */
            type: "response.completed";
        } & {
            [key: string]: unknown;
        };
        /**
         * response.failed
         * @description Sent when a background response has failed.
         *
         */
        WebhookResponseFailed: {
            /** @description The Unix timestamp (in seconds) of when the model response failed.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the model response.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `response.failed`.
             *
             * @enum {string}
             */
            type: "response.failed";
        } & {
            [key: string]: unknown;
        };
        /**
         * response.incomplete
         * @description Sent when a background response has been interrupted.
         *
         */
        WebhookResponseIncomplete: {
            /** @description The Unix timestamp (in seconds) of when the model response was interrupted.
             *      */
            created_at: number;
            /** @description Event data payload.
             *      */
            data: {
                /** @description The unique ID of the model response.
                 *      */
                id: string;
            } & {
                [key: string]: unknown;
            };
            /** @description The unique ID of the event.
             *      */
            id: string;
            /**
             * @description The object of the event. Always `event`.
             *
             * @enum {string}
             */
            object?: "event";
            /**
             * @description The type of the event. Always `response.incomplete`.
             *
             * @enum {string}
             */
            type: "response.incomplete";
        } & {
            [key: string]: unknown;
        };
        /**
         * @description High level guidance for the amount of context window space to use for the
         *     search. One of `low`, `medium`, or `high`. `medium` is the default.
         *
         * @default medium
         * @enum {string}
         */
        WebSearchContextSize: "low" | "medium" | "high";
        /**
         * Web search location
         * @description Approximate location parameters for the search.
         */
        WebSearchLocation: {
            /** @description Free text input for the city of the user, e.g. `San Francisco`.
             *      */
            city?: string;
            /** @description The two-letter
             *     [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the user,
             *     e.g. `US`.
             *      */
            country?: string;
            /** @description Free text input for the region of the user, e.g. `California`.
             *      */
            region?: string;
            /** @description The [IANA timezone](https://timeapi.io/documentation/iana-timezones)
             *     of the user, e.g. `America/Los_Angeles`.
             *      */
            timezone?: string;
        } & {
            [key: string]: unknown;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    createChatCompletion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatCompletionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateChatCompletionResponse"];
                    "text/event-stream": components["schemas"]["CreateChatCompletionStreamResponse"];
                };
            };
        };
    };
    createEmbedding: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEmbeddingRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateEmbeddingResponse"];
                };
            };
        };
    };
    listModels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListModelsResponse"];
                };
            };
        };
    };
}
