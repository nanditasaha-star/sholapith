import { useEffect, useState } from 'react';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  pincode: string;
  cart: {
    name: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}

const ThankYou = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (parsed && parsed.cart && Array.isArray(parsed.cart)) {
          setCustomerData(parsed);
        }
      } catch (e) {
        console.error('Failed to parse customerData from localStorage:', e);
      }
    }
  }, []);

  if (!customerData) {
    return (
      <div className="p-10 text-center">
        <p className="text-lg text-gray-600">Loading your order summary...</p>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    address,
    city,
    country,
    pincode,
    cart,
    totalPrice,
  } = customerData;

  return (
    <div className="p-20 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
        🎉 Congratulations! Your Order Has Been Received.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6">
        {/* Left: Customer Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">Customer Information</h2>
          <p className="text-xl mb-2"><strong className=''>Name:</strong> {name}</p>
          <p className="text-xl mb-2"><strong className=''>Email:</strong> {email}</p>
          <p className="text-xl mb-2"><strong className=''>Phone:</strong> {phone}</p>

          <h2 className="text-2xl font-bold mt-6 mb-2 border-b pb-1">Delivery Address</h2>
          <p className='text-xl'>{address}, {city}, {country} - {pincode}</p>
        </div>

        {/* Right: Order Summary */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">Order Summary</h2>
          <table className="w-full text-xl text-left border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border-b">Product</th>
                <th className="p-2 border-b">Qty</th>
                <th className="p-2 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 border-b">{item.name}</td>
                  <td className="p-2 border-b">{item.quantity}</td>
                  <td className="p-2 border-b">₹{item.price}</td>
                </tr>
              ))}
              <tr>
                <td className="p-2 font-semibold" colSpan={2}>Total Price</td>
                <td className="p-2 font-bold">₹{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
