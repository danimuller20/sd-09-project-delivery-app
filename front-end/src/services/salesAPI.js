const URLBase = 'http://localhost:3001';

const salesOrdersAPI = async (saleBody) => {
  try {
    const URL = `${URLBase}/sales/orders`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleBody),
    };
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    const errorObj = {
      message: 'something bad happened here',
      error: error.message,
      status: 500,
    };
    console.log(errorObj);
  }
};

export default salesOrdersAPI;
