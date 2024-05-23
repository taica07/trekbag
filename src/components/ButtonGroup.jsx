import { useContext } from 'react';
import Button from './Button';
import { ItemsContext } from '../contexts/ItemsContextProvider';

const ButtonGroup = () => {
  const {
    handleRemoveAllItems,
    handleResetInitial,
    handleMarkAllIncomplete,
    handleMarkAllComplete,
  } = useContext(ItemsContext);
  return (
    <section className="button-group">
      <Button
        onClick={handleMarkAllComplete}
        buttonType="secondary"
        label="Mark all as complete"
      />
      <Button
        onClick={handleMarkAllIncomplete}
        buttonType="secondary"
        label="Mark all as incomplete"
      />
      <Button
        onClick={handleResetInitial}
        buttonType="secondary"
        label="Reset to initial"
      />
      <Button
        onClick={handleRemoveAllItems}
        buttonType="secondary"
        label="Remove all items"
      />
    </section>
  );
};

export default ButtonGroup;
