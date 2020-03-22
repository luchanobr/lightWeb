import App from "./app"

import {bodyParseJson, bodyParseUrlencoded} from "./middlewares/body-parser"
import { logger } from "./middlewares/morgan"

const server = new App({
    middlewares: [bodyParseJson, bodyParseUrlencoded, logger],
    routes: []
})

server.listen()