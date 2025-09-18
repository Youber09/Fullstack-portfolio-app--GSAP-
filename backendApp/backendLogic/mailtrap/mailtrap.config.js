import dotenv from "dotenv"
dotenv.config()
import { MailtrapClient } from "mailtrap";


const TOKEN = process.env.MAILTRAP_TOKEN

export const mailtrap_client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "dude",
};