import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const drawerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !(drawerRef.current as HTMLElement).contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    onClose();
    router.push('/checkout');
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div ref={drawerRef} className="h-full flex flex-col p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-3xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-4xl font-semibold">×</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className="flex justify-between items-start gap-4 border p-4 rounded">
                <div className="flex-1">
                  <div className='flex items-center justify-between mt-2 mb-4'>
                  <p className="font-semibold text-2xl">{item.prodName}</p>
                  <p className="text-xl text-gray-600 font-medium">
                    ₹{item.actualPrice} x {item.quantity} = ₹{item.actualPrice * item.quantity}
                  </p>
                  
                  </div>

                  <div className='flex items-center justify-between gap-4'>
                    <div className="flex items-center justify-center w-1/2 gap-2 items-center text-lg border rounded border-blue-800 ">
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="px-2 py-2 "
                      >
                        -
                      </button>
                      <span className='font-bold'>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="px-2 py-2"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-600 text-xl w-1/2 bg-red-600 text-white px-3 py-2 rounded border rounded border-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
          )}
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 bg-green-600 text-white text-2xl px-3 py-4 rounded-xl hover:bg-green-700 transition"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
