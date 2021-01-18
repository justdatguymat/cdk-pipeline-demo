//import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

export async function main(event: any, context: any) {
  const msg = "Let's go Lambda, baby!";
  console.log(msg);
  return msg;
}

/*

interface HandlerInput {
  name: String;
}

interface HandlerOutput {
  message: String;
  timestamp: Date;
}

type TaskHandler = Handler<HandlerInput, HandlerOutput>;

export const handler: TaskHandler = (event, context) => {
  const msg = "Let's Lambda baby!";
  console.log(msg);
  return {
    message: msg,
    timestamp: new Date(),
  };
};

//export async function main : Handler(event, context): String {

export async function main(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const msg = "Let's go Lambda, baby!";
  return {
    statusCode: 200,
    body: {
      message: msg,
    },
  };
}
*/
