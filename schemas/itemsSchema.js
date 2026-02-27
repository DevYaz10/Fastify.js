import { getItems, getItem } from "../controllers/itemsController.js";

//# Item schema
const itemSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
};

//# Options for get all items
const getItemsOpts = {
  schema: {
    description: "Get all items",
    response: {
      200: {
        description: "List of all items",
        type: "array",
        items: itemSchema,
      },
    },
  },
  handler: getItems,
};

//# Options for get item by id
const getItemOpts = {
  schema: {
    description: "Get a single item by ID",
    response: {
      200: {
        description: "A single item",
        ...itemSchema,
      },
    },
  },
  handler: getItem,
};

export { getItemsOpts, getItemOpts };