/**
 * Exports the common types.
 *
 * Use the client/index.ts file to import the client-only codebase.
 * Use the server/index.ts file to import the server-only codebase.
 */

// Explicitly export types from types.ts, excluding A2AError (the type alias)
// export type {
//   A2ARequest,
//   Part,
//   SecurityScheme,
//   CancelTaskResponse,
//   DeleteTaskPushNotificationConfigResponse,
//   GetAuthenticatedExtendedCardResponse,
//   GetTaskPushNotificationConfigResponse,
//   GetTaskResponse,
//   JSONRPCResponse,
//   JSONRPCSuccessResponse,
//   ListTaskPushNotificationConfigResponse,
//   SendMessageResponse,
//   SendStreamingMessageResponse,
//   SetTaskPushNotificationConfigResponse,
//   TaskStatusUpdateEvent,
//   TaskArtifactUpdateEvent,
//   TaskState,
//   TransportProtocol,
//   MySchema,
//   JSONParseError,
//   InvalidRequestError,
//   MethodNotFoundError,
//   InvalidParamsError,
//   InternalError,
//   TaskNotFoundError,
//   TaskNotCancelableError,
//   PushNotificationNotSupportedError,
//   UnsupportedOperationError,
//   ContentTypeNotSupportedError,
//   InvalidAgentResponseError,
//   AuthenticatedExtendedCardNotConfiguredError,
//   SendMessageRequest,
//   MessageSendParams,
//   MessageSendConfiguration,
//   PushNotificationConfig,
//   PushNotificationAuthenticationInfo,
//   Message,
//   TextPart,
//   FilePart,
//   FileWithBytes,
//   FileWithUri,
//   DataPart,
//   SendStreamingMessageRequest,
//   MessageSendParams1,
//   GetTaskRequest,
//   TaskQueryParams,
//   CancelTaskRequest,
//   TaskIdParams,
//   SetTaskPushNotificationConfigRequest,
//   TaskPushNotificationConfig,
//   PushNotificationConfig1,
//   GetTaskPushNotificationConfigRequest,
//   TaskIdParams1,
//   GetTaskPushNotificationConfigParams,
//   TaskResubscriptionRequest,
//   TaskIdParams2,
//   ListTaskPushNotificationConfigRequest,
//   ListTaskPushNotificationConfigParams,
//   DeleteTaskPushNotificationConfigRequest,
//   DeleteTaskPushNotificationConfigParams,
//   GetAuthenticatedExtendedCardRequest,
//   APIKeySecurityScheme,
//   AgentCapabilities,
//   AgentExtension,
//   AgentCard,
//   AgentInterface,
//   AgentCapabilities1,
//   AgentProvider,
//   HTTPAuthSecurityScheme,
//   OAuth2SecurityScheme,
//   OAuthFlows,
//   AuthorizationCodeOAuthFlow,
//   ClientCredentialsOAuthFlow,
//   ImplicitOAuthFlow,
//   PasswordOAuthFlow,
//   OpenIdConnectSecurityScheme,
//   MutualTLSSecurityScheme,
//   AgentCardSignature,
//   AgentSkill,
//   AgentProvider1,
//   Artifact,
//   AuthorizationCodeOAuthFlow1,
//   JSONRPCErrorResponse,
//   JSONRPCRequest,
//   JSONRPCError,
//   CancelTaskSuccessResponse,
//   Task,
//   Message1,
//   TaskStatus,
//   Message2,
//   ClientCredentialsOAuthFlow1,
//   DeleteTaskPushNotificationConfigParams1,
//   DeleteTaskPushNotificationConfigSuccessResponse,
//   FileBase,
//   GetAuthenticatedExtendedCardSuccessResponse,
//   AgentCard1,
//   GetTaskPushNotificationConfigSuccessResponse,
//   GetTaskSuccessResponse,
//   ImplicitOAuthFlow1,
//   ListTaskPushNotificationConfigSuccessResponse,
//   PasswordOAuthFlow1,
//   SendMessageSuccessResponse,
//   SendStreamingMessageSuccessResponse,
//   SetTaskPushNotificationConfigSuccessResponse,
// } from './types.js';
export * from './types';

export type { A2AResponse } from './a2a_response.js';
export { AGENT_CARD_PATH } from './constants.js';

// Explicitly re-export server-side modules
export type { AgentExecutor } from './server/agent_execution/agent_executor.js';
export { RequestContext } from './server/agent_execution/request_context.js';

export type {
  AgentExecutionEvent,
  ExecutionEventBus,
} from './server/events/execution_event_bus.js';
export { DefaultExecutionEventBus } from './server/events/execution_event_bus.js';
export type { ExecutionEventBusManager } from './server/events/execution_event_bus_manager.js';
export { DefaultExecutionEventBusManager } from './server/events/execution_event_bus_manager.js';
export { ExecutionEventQueue } from './server/events/execution_event_queue.js';

export * from './server/utils.js'; // Added this line

export type { A2ARequestHandler } from './server/request_handler/a2a_request_handler.js';
export { DefaultRequestHandler } from './server/request_handler/default_request_handler.js';
export { ResultManager } from './server/result_manager.js';
export type { TaskStore } from './server/store.js';
export { InMemoryTaskStore } from './server/store.js';

export { JsonRpcTransportHandler } from './server/transports/jsonrpc_transport_handler.js';
export { A2AError } from './server/error.js'; // Explicitly export the class

// Explicitly re-export client-side modules
export { A2AClient } from './client/client.js';
export type { A2AClientOptions } from './client/client.js';
export * from './client/auth-handler.js'; // Re-export all from auth-handler

// Explicitly re-export server/express modules
export { A2AExpressApp } from './server/express/a2a_express_app.js';
