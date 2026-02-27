import items from "../Items.js";

//# Get all items
const getItems = (req, reply) => {
  reply.send(items);
};

//# Get item by id
const getItem = (req, reply) => {
  const id = Number(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    reply.send(item);
  } else {
    reply.code(404).send({ message: "Item not found" });
  }
};

export { getItems, getItem };