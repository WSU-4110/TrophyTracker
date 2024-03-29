export default interface ResponseMessage {
  /**
   * Message from server (usually means the request went well)
   */
  message?: string;
  /**
   * Extra data from server if needed
   */
  data?: Record<string, unknown>;
  /**
   * Error from server msg
   */
  error?: string;
  /**
   * Can be unstructured error for client to handle
   */
  errors?: unknown[];
}
