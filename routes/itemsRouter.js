import { getItemsOpts, getItemOpts } from "../schemas/itemsSchema.js";

//# Item Routes
export default function itemRoutes(app, options, done) {
  app.get("/items", getItemsOpts);

  app.get("/items/:id", getItemOpts);

  done();
}
