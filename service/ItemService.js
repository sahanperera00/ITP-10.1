import Item from "../model/Item.js";

export const createItemService = async (itemData) => {
  try {
    const item = await Item.create(itemData);
    return item;
  } catch (error) {
    throw new Error("Error creating item: " + error.message);
  }
};

export const getItemsService = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    throw new Error("Error fetching items: " + error.message);
  }
};

export const getItemByIdService = async (id) => {
  try {
    const item = await Item.findById(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw new Error("Error fetching item: " + error.message);
  }
};

export const updateItemService = async (id, itemData) => {
  try {
    const item = await Item.findByIdAndUpdate(id, itemData, { new: true });
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw new Error("Error updating item: " + error.message);
  }
};

export const deleteItemService = async (id) => {
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw new Error("Error deleting item: " + error.message);
  }
};
