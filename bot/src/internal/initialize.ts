import { ConversationState, MemoryStorage, UserState } from "botbuilder";
import { HelloWorldCommandHandler } from "../helloworldCommandHandler";
import { ProfileSsoCommandHandler } from "../profileSsoCommandHandler";
import {ConversationBot, BotSsoExecutionDialog, TeamsFx} from "@microsoft/teamsfx";
import "isomorphic-fetch";
import { PhotoSsoCommandHandler } from "../photoSsoCommandHandler";

const storage = new MemoryStorage();

// Create the command bot and register the command handlers for your app.
// You can also use the commandBot.command.registerCommands to register other commands
// if you don't want to register all of them in the constructor

export const commandBot = new ConversationBot({
  // The bot id and password to create BotFrameworkAdapter.
  // See https://aka.ms/about-bot-adapter to learn more about adapters.
  adapterConfig: {
    appId: process.env.BOT_ID,
    appPassword: process.env.BOT_PASSWORD,
  },
  // ssoConfig is optional and by default using the values below
  ssoConfig: {
    aad :{
      scopes:["User.Read"],
      // clientId: process.env.M365_CLIENT_ID,
      // clientSecret: process.env.M365_CLIENT_SECRET,
      // tenantId: process.env.M365_TENANT_ID,
      // authorityHost: process.env.M365_AUTHORITY_HOST,
      // initiateLoginEndpoint: process.env.INITIATE_LOGIN_ENDPOINT,
      // applicationIdUri: process.env.M365_APPLICATION_ID_URI
    },
    //dialog: {
      // userState: new UserState(storage),
      // conversationState: new ConversationState(storage),
      // dedupStorage: storage,
      // ssoPromptConfig: {
        // timeout: 900000,
        // endOnInvalidMessage: true
      // }
    //}
  },
  command: {
    enabled: true,
    commands: [new HelloWorldCommandHandler() ],
    ssoCommands: [new ProfileSsoCommandHandler(), new PhotoSsoCommandHandler()],
  },
});
