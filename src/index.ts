/**
 * Exports the common types.
 *
 * Use the client/index.ts file to import the client-only codebase.
 * Use the server/index.ts file to import the server-only codebase.
 */

export * from './types.js';
export * from './server/index.js';
export * from './client/index.js';
export * from './server/express/index.js';

export { A2AError } from './server/index.js';
export {
  AuthenticatedExtendedCardNotConfiguredError,
  ContentTypeNotSupportedError,
  InvalidAgentResponseError,
  PushNotificationNotSupportedError,
  TaskNotCancelableError,
  TaskNotFoundError,
  UnsupportedOperationError,
} from './client/index.js';
export type { A2AResponse } from './a2a_response.js';
export { AGENT_CARD_PATH, HTTP_EXTENSION_HEADER } from './constants.js';
export { Extensions, type ExtensionURI } from './extensions.js';

export * from './server/utils.js'; // Added this line
