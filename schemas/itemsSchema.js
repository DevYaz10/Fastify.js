import { getItems, getItem, postItem, deleteItem, updateItem } from "../controllers/itemsController.js";

//# Item schema
const itemSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
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

//# Options for post item
const postItemOpts = {
  schema: {
    description: "Post a new item",
    body: {
      type: "object",
      description: "Item object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: {
        description: "A new item",
        ...itemSchema,
      },
    },
  },
  handler: postItem,
};

//# Options for delete item by id
const deleteItemOpts = {
  schema: {
    description: "Delete a single item by ID",
    response: {
      204: {
        description: "Item deleted successfully",
      },
    },
  },
  handler: deleteItem,
};

//# Options for update item by id
const updateItemOpts = {
  schema: {
    description: "Update a single item by ID",
    params: {
      type: "object",
      description: "Item ID",
      required: ["id"],
      properties: {
        id: { type: "string" },
      },
    },
    body: {
      type: "object",
      description: "Item object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      200: {
        description: "Item updated successfully",
        ...itemSchema,
      },
    },
  },
  handler: updateItem,
};

export { getItemsOpts, getItemOpts, postItemOpts, deleteItemOpts, updateItemOpts };