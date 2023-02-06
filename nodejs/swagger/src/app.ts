import express, { Application, NextFunction, Request, Response } from "express";
import { serve, setup } from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
import * as OpenApiValidator from "express-openapi-validator";

import usersRouter from "./routes/users";
import { options } from "./swagger-options";

const specs = swaggerDoc(options);

const app: Application = express();

app.use(express.json());

app.use("/api-docs", serve, setup(specs));

/**
 * @swagger
 * tags: 
 *   name: Greet
 *   description: Greeting API
 * /:
 *   get:
 *     summary: Returns greet from the server
 *     tags: [Greet]
 *     responses:
 *       200: 
 *         description: A greet from the server 
 *         content: 
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get('/', (req:Request, res: Response)=> {
  res.send('Welcome to our home page')
})

app.use(
  OpenApiValidator.middleware({
    apiSpec: "./open-api.yaml",
    validateRequests: true,
    validateResponses: true,
  })
);

app.use("/users", usersRouter);



app.use((req: Request, res: Response) =>
  res.status(404).send("Endpoint not supported")
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  switch (err.status) {
    case 400:
      res.status(400).set("Content-Type", "text/plain").send(err.message);
      break;
    case 500:
      res.status(500).set("Content-Type", "text/plain").send(err.message);
      break;
    default:
      next(err);
      break;
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
