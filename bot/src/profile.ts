import { TurnContext } from "botbuilder";
import { createMicrosoftGraphClient, TeamsFx } from "./sdk";
import { DialogTurnResult } from "botbuilder-dialogs";

export async function showUserImage(
  context: TurnContext,
  ssoToken: string,
  param: any[]
): Promise<DialogTurnResult> {
  await context.sendActivity("Retrieving user photo from Microsoft Graph ...");

  const teamsfx = new TeamsFx().setSsoToken(ssoToken);

  const graphClient = createMicrosoftGraphClient(teamsfx, param[0]);
  
  // You can add following code to get your photo:
  let photoUrl = "";
  try {
     const photo = await graphClient.api("/me/photo/$value").get();
     const arrayBuffer = await photo.arrayBuffer();
     const buffer=Buffer.from(arrayBuffer, 'binary');
     photoUrl = "data:image/png;base64," + buffer.toString("base64");
   } catch {
      //Could not fetch photo from user's profile, return empty string as placeholder.
   }
   if (photoUrl) {
     await context.sendActivity(
       `You can find your photo here: ${photoUrl}`
     );
   } else {
     await context.sendActivity("Could not retrieve your photo from Microsoft Graph. Please make sure you have uploaded your photo.");
   }

  return;
}