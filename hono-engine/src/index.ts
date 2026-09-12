import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hono engine placeholder"));

export default app;
