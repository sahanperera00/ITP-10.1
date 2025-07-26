import {
  createItemService,
  getItemsService,
  getItemByIdService,
  updateItemService,
  deleteItemService,
} from "../service/ItemService.js";

export const createItem = async (req, res) => {
  try {
    const itemData = req.body;
    const item = await createItemService(itemData);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await getItemsService();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getItemByIdService(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData = req.body;
    const item = await updateItemService(id, itemData);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteItemService(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
