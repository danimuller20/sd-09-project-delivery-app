import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const dataTestId = require('../utills/dataTestIds');

const OrderCard = (props) => {
  const history = useHistory();
  const { order, index } = props;
  const orderId = index + 1;
  console.log(orderId);
  const { id, status, saleDate, totalPrice } = order;
  return (
    <div>
      <button type="button" onClick={ () => history.push(`/customer/orders/${id}`) }>
        <p data-testid={ `${dataTestId[33] + orderId}` }>{orderId}</p>
        <p data-testid={ `${dataTestId[34] + orderId}` }>{status}</p>
        <p data-testid={ `${dataTestId[35] + orderId}` }>{saleDate}</p>
        <p>{totalPrice}</p>
      </button>

    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.number,
}.isRequired;

export default OrderCard;
