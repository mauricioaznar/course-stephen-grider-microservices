import express from 'express'
import 'express-async-errors'
import {json} from 'body-parser'
import {errorHandler, NotFoundError, currentUser} from "@maguas/common";
import cookieSession from "cookie-session";
import {createTicketRouter} from "./routes/new";
import {showTicketRouter} from "./routes/show";
import {indexTicketRouter} from "./routes";
import {updateTicketRouter} from "./routes/update";

const app = express()
// trust ingress nginx
app.set('trust proxy', true)
app.use(json())
// disable encryption and enable https
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
)

app.use(currentUser)

app.use(createTicketRouter)
app.use(indexTicketRouter)
app.use(showTicketRouter)
app.use(updateTicketRouter)

app.all('*', async (req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }