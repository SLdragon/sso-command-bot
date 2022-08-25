// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SigninStateVerificationQuery, TeamsActivityHandler, TurnContext } from "botbuilder";

import { SsoConfig, SsoExecutionActivityHandler, TeamsFxBotSsoCommandHandler } from "../interface";
import { ErrorWithCode, ErrorCode, ErrorMessage } from "../../core/errors";
import { formatString } from "../../util/utils";

/**
 * Default sso execution activity handler
 */
export class DefaultSsoExecutionActivityHandler
  extends TeamsActivityHandler
  implements SsoExecutionActivityHandler
{
  /**
   * Creates a new instance of the DefaultSsoExecutionActivityHandler.
   * @param ssoConfig configuration for sso command bot
   */
  constructor(ssoConfig: SsoConfig | undefined) {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }

  /**
   * Add TeamsFxBotSsoCommandHandler instance to sso execution dialog
   * @param handler {@link TeamsFxBotSsoCommandHandler} instance
   */
  addCommand(handler: TeamsFxBotSsoCommandHandler): void {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }

  /**
   * Called to initiate the event emission process.
   * @param context The context object for the current turn.
   */
  async run(context: TurnContext) {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }

  /**
   * Receives invoke activities with Activity name of 'signin/verifyState'.
   * @param context A context object for this turn.
   * @param query Signin state (part of signin action auth flow) verification invoke query.
   * @returns A promise that represents the work queued.
   */
  async handleTeamsSigninVerifyState(context: TurnContext, query: SigninStateVerificationQuery) {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }

  /**
   * Receives invoke activities with Activity name of 'signin/tokenExchange'
   * @param context A context object for this turn.
   * @param query Signin state (part of signin action auth flow) verification invoke query
   * @returns A promise that represents the work queued.
   */
  async handleTeamsSigninTokenExchange(context: TurnContext, query: SigninStateVerificationQuery) {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }

  /**
   * Handle signin invoke activity type.
   *
   * @param context The context object for the current turn.
   *
   * @remarks
   * Override this method to support channel-specific behavior across multiple channels.
   */
  async onSignInInvoke(context: TurnContext) {
    throw new ErrorWithCode(
      formatString(ErrorMessage.BrowserRuntimeNotSupported, "DefaultSsoExecutionActivityHandler"),
      ErrorCode.RuntimeNotSupported
    );
  }
}
