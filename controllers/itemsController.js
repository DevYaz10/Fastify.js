import items from "../Items.js";
import { uuidv7 as uuid } from 'uuidv7';

//# Get all items
const getItems = (req, reply) => {
  reply.send(items);
};

//# Get item by id
const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id.toString() === id);
  if (item) {
    reply.send(item);
  } else {
    reply.code(404).send({ message: "Item not found" });
  }
};

//# Post item
const postItem = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuid(),
    name,
  }
  
  items.push(item);
  reply.code(201).send(item);
};

//# Delete item by id
const deleteItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id.toString() === id);
  if (item) {
    items.splice(items.indexOf(item), 1);
    reply.code(204).send();
  } else {
    reply.code(404).send({ message: "Item not found" });
  }
};

//# Update item by id
const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find((item) => item.id.toString() === id);
  if (item) {
    item.name = name;
    reply.code(200).send(item);
  } else {
    reply.code(404).send({ message: "Item not found" });
  }
};

export { getItems, getItem, postItem, deleteItem, updateItem };