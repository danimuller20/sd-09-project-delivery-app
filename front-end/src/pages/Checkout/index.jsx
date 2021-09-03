import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDeliveryContext } from '../../context/deliveryProvider';
import OrderLIst from '../../components/checkout/OrderLIst';
import AddressDetails from '../../components/checkout/AddressDetails';
import Header from '../../components/Header';
import api from '../../service/axiosApi';
import './style.css';

const Checkout = () => {
  const [sellers, setSellers] = useState([]);
  const history = useHistory();

  const { address, products, total } = useDeliveryContext();

  const getSellers = async () => {
    const fetchSellers = await api.get('/seller')
      .then((response) => response.data);

    // console.log(fetchSellers);

    const sellersNames = fetchSellers.map(({ name }) => name);
    setSellers(sellersNames);
    console.log('sellersNames > ', sellersNames);
  };

  useEffect(() => {
    getSellers();
  }, []);

  // const { totalPrice, deliveryNumber, deliveryAddress, name, products } = req.body;

  const handeClick = async () => {
    const body = {
      totalPrice: Number(total.toFixed(2)),
      deliveryNumber: address.numero,
      deliveryAddress: address.address,
      name: address.vendedor,
      products,
    };

    const { token } = JSON.parse(localStorage.getItem('user'));

    api.post('/sales', body, { headers: { authorization: token } })
      .then(({ data }) => {
        history.push(`/customer/orders/${data.id}`);
      })
      .catch((err) => console.log(err));

    // console.log('data > ', data);
    console.log('token > ', token);
  };

  return (
    <div className="checkout-container">
      <header>
        <Header />
      </header>
      <div className="checkout-main-container">
        <h2>Finalizar pedidos</h2>
        <OrderLIst />
        <h2>Detalhes e Endereço para Entrega</h2>
        <AddressDetails names={ sellers } />
      </div>
      <button
        type="button"
        className="finalize-order"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handeClick }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
};

export default Checkout;
