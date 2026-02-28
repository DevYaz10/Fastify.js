import { getItemsOpts, getItemOpts, postItemOpts, deleteItemOpts, updateItemOpts } from "../schemas/itemsSchema.js";

//# Item Routes
export default function itemRoutes(app, options, done) {
  app.get("/items", getItemsOpts);

  app.get("/items/:id", getItemOpts);

  app.post("/items", postItemOpts);
  
  app.delete("/items/:id", deleteItemOpts);

  app.put("/items/:id", updateItemOpts);

  done();
}
