import {z} from "zod";


const envSchema = z.object({
    "REACT_APP_API_URL" : z.string()
})

// parse not safeParse, because parse will trow an error if the value is not ok 
export const env = envSchema.parse(process.env)

