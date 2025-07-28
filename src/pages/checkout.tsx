import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { clearCart } from '@/store/cartSlice';

const Checkout = () => {
  const router = useRouter();  
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const total = items.reduce((sum, item) => sum + item.actualPrice * item.quantity, 0);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      pincode: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Name should contain only letters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      pincode: Yup.string().matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const customerData = {
        ...values,
        cart: items.map(item => ({
          id: item.id,
          name: item.prodName,
          quantity: item.quantity,
          price: item.actualPrice * item.quantity,
        })),
        totalPrice: total,
      };

      localStorage.setItem('customerData', JSON.stringify(customerData));

      resetForm();
       dispatch(clearCart());
      
      router.push(`/thank-you?name=${values.name}`);
    },
  });

  return (
    <div className='baseContainer'>
      <div className="mx-auto px-4 py-10 max-w-3xl">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-2xl font-bold pb-2">Contact Information</p>
            <input
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full border p-4 text-xl rounded-xl"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}

            <input
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full border p-4 text-xl rounded-xl"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}

            <input
              name="phone"
              placeholder="Phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="w-full border p-4 text-xl rounded-xl"
            />
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-bold pb-2">Delivery Address</p>
            <input
              name="address"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="w-full border p-4 text-xl rounded-xl"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="city"
                placeholder="City"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="w-full border p-4 text-xl rounded-xl"
              />
              <input
                name="country"
                placeholder="Country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="w-full border p-4 text-xl rounded-xl"
              />
            </div>
            <input
              name="pincode"
              placeholder="Pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
              className="w-full border p-4 text-xl rounded-xl"
            />
            {formik.touched.pincode && formik.errors.pincode && (
              <p className="text-red-500 text-sm">{formik.errors.pincode}</p>
            )}
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-2xl font-bold pb-3">Payment Method</p>
            <div className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-green-600 transition">
              <img src="/assets/images/webp/upi.jpg" alt="UPI" className="w-20" />
              <p className='text-lg'>Pay via UPI (Google Pay, PhonePe, Paytm)</p>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-green-600 transition">
              <img src="/assets/images/webp/cod.jpg" alt="COD" className="w-20" />
              <p className='text-lg'>Cash on Delivery (COD)</p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white text-2xl px-6 py-4 rounded-xl w-full hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
