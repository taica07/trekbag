import { useContext } from 'react';
import Counter from './Counter';
import Logo from './Logo';
import { ItemsContext } from '../contexts/ItemsContextProvider';

const ContainerHeader = () => {
  const { items } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
};

export default ContainerHeader;
