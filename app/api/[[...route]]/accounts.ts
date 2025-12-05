import { Hono } from "hono";
import db from "@/db/index"
import {accounts} from "@/db/schema"


const app = new Hono().get("/", async (c) => {
    const data = await db.select({
        id:accounts.id,
        name:accounts.name,
        userId:accounts.userId,
    }).from(accounts)

    return c.json({
        data
    });
})

export default app;
