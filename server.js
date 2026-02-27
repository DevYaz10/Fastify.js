import Fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import itemRoutes from "./routes/itemsRouter.js";
const app = Fastify({ logger: true }); //? this is just to see the logs in the terminal
const port = 3000;

app.register(swagger, {
  swagger: {
    info: {
      title: "Item API",
      description: "Item API",
      version: "1.0.0",
    },
  },
});
app.register(swaggerUi, { routePrefix: "/docs" });
app.register(itemRoutes);

//? this tells the browser to set up the server and start listening for requests on port 3000
const start = async () => {
  try {
    await app.listen({ port });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
