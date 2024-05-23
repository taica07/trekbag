import { useContext, useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { ItemsContext } from '../contexts/ItemsContextProvider';

const sortingOptions = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
];

const ContainerItemList = () => {
  const [sortBy, setSortBy] = useState('default');
  const { items, deleteItemFromList, handleToggleItems } =
    useContext(ItemsContext);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        } else if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        } else {
          return;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          item={item}
          key={item.id}
          deleteItemFromList={deleteItemFromList}
          handleToggleItems={handleToggleItems}
        />
      ))}
    </ul>
  );
};

export default ContainerItemList;

function Item({ item, deleteItemFromList, handleToggleItems }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItems(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => deleteItemFromList(item.id)}>❌</button>
    </li>
  );
}
