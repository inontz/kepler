import { createHmac } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientConfig, Client, middleware, MiddlewareConfig, WebhookEvent, TextMessage, MessageAPIResponseBase, ReplyableEvent, Message, FlexBubble, FlexMessage } from '@line/bot-sdk';
import { NextResponse } from 'next/server';

// Setup all LINE client and Express configurations.
const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
};

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
};


// Create a new LINE SDK client.
const client = new Client(clientConfig);

export async function POST(request: Request) {
  // Verify the request signature
  const res = await request.json()
  console.log(res)
  const channelSecret = process.env.CHANNEL_SECRET!;
  // const body = JSON.stringify(res.body);
  // const signature = res.headers['x-line-signature'] as string;
  // const hash = createHmac('sha256', channelSecret).update(body, 'utf8').digest('base64');

  // if (signature !== hash) {
  //   return res.status(401).end('Unauthorized');
  // }

  // Process the incoming events
  const events: WebhookEvent[] = res.events;
  for (const event of events) {
    // Handle each event type (e.g., message, follow, etc.)
    switch (event.type) {
      case 'message':
        await handleIncomingMessage(event);
        break;
      case 'follow':
        await handleFollowEvent(event);
        break;
      // Handle other event types as needed
    }
  }

  // Send a success response
  return NextResponse.json({ res })
};

async function handleIncomingMessage(event: WebhookEvent | any) {
  const replyToken = event.replyToken;
  const messageText = event.message.text;
  const now = new Date('2020-11-20T10:36:00.000Z');
  const replyMessage: any = {
    type: 'flex',
    altText: "Hi",
    contents: {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "RECEIPT",
            "weight": "bold",
            "color": "#1DB446",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "Brown Store",
            "weight": "bold",
            "size": "xxl",
            "margin": "md"
          },
          {
            "type": "text",
            "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
            "size": "xs",
            "color": "#aaaaaa",
            "wrap": true
          },
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "xxl",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "Energy Drink",
                    "size": "sm",
                    "color": "#555555",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "$2.99",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "Chewing Gum",
                    "size": "sm",
                    "color": "#555555",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "$0.99",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "Bottled Water",
                    "size": "sm",
                    "color": "#555555",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "$3.33",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "margin": "xxl",
                "contents": [
                  {
                    "type": "text",
                    "text": "ITEMS",
                    "size": "sm",
                    "color": "#555555"
                  },
                  {
                    "type": "text",
                    "text": "3",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "TOTAL",
                    "size": "sm",
                    "color": "#555555"
                  },
                  {
                    "type": "text",
                    "text": "$7.31",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "CASH",
                    "size": "sm",
                    "color": "#555555"
                  },
                  {
                    "type": "text",
                    "text": "$8.0",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "CHANGE",
                    "size": "sm",
                    "color": "#555555"
                  },
                  {
                    "type": "text",
                    "text": "$0.69",
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }
                ]
              }
            ]
          },
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "PAYMENT ID",
                "size": "xs",
                "color": "#aaaaaa",
                "flex": 0
              },
              {
                "type": "text",
                "text": "#743289384279",
                "color": "#aaaaaa",
                "size": "xs",
                "align": "end"
              }
            ]
          }
        ]
      },
      "styles": {
        "footer": {
          "separator": true
        }
      }
    }
  };
  // Send a reply message
  await client.replyMessage(replyToken, replyMessage);
}

async function handleFollowEvent(event: WebhookEvent) {
  // Handle follow events
  // For example, send a welcome message to the user
}