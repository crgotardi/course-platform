import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DB_PASSWORD: z.string(),
        DB_USER: z.string(),
        DB_NAME: z.string(),
        DB_HOST: z.string(),
    },
    experimental__runtimeEnv: process.env
})