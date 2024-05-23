import { createContext, useEffect, useState } from 'react';
import { v4 as randomUUID } from 'uuid';
import { initialItems } from '../lib/constans';

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  //Add new item on the list
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: randomUUID(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  //Remove all items from the list
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  //Remove items to initial
  const handleResetInitial = () => {
    setItems(initialItems);
  };

  //Mark all Items as incomplete
  const handleMarkAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  //Mark all Items as complete
  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  // Delete item from list
  const deleteItemFromList = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  // check and uncheck items
  const handleToggleItems = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetInitial,
        handleMarkAllIncomplete,
        handleMarkAllComplete,
        deleteItemFromList,
        handleToggleItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
