/**
 * Events that occur when actors are done
 */
export type InvokeActorEventTypes =
  | 'done.invoke.signInActor'
  | 'done.invoke.signUpActor'
  | 'done.invoke.signOutActor'
  | 'done.invoke.resetPasswordActor';

/**
 * All known explicit events for xstate
 */
export type AuthEventTypes =
  | 'CHANGE'
  | 'BLUR'
  | 'FEDERATED_SIGN_IN'
  | 'STORAGE_UPDATED'
  | 'MAGIC_LINK_FAILED'
  | 'RESEND'
  | 'RESET_PASSWORD'
  | 'SIGN_IN'
  | 'SIGN_OUT'
  | 'SIGN_UP'
  | 'SKIP'
  | 'SUBMIT'
  | 'INIT'
  | InvokeActorEventTypes;

/**
 * Data payload for auth events
 */
export type AuthEventData = Record<PropertyKey, any>; // TODO: this should be typed further

/** Top-level auth machine event interface */
export interface AuthEvent {
  type: AuthEventTypes;
  data?: AuthEventData;
}
