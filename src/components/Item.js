import React from 'react';
import PropTypes from 'prop-types';
import PubSub from '../PubSub';

export default function Item(props) {
  const { object } = props;

  const selectItem = (e) => {
    if (!e.code || e.code === 'Enter') PubSub.publish('add to cart', object);
  };

  return (
    <div className='item' tabIndex='0' onClick={selectItem} onKeyPress={selectItem}>
      <div className='item-title'>{object.name}</div>
      <div className='item-image'>
        <i className={object.icon} />
      </div>
      <div className='item-price'>{object.price}</div>
    </div>
  );
}

Item.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
