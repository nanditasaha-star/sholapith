import { useRouter } from 'next/router';
import { productLists } from '@/configs/product-config';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import styles from "../../styles/productdetails.module.css"
// import { addToCart } from '@/redux/cartSlice';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShieldAlt, faBoxOpen, faLeaf } from '@fortawesome/free-solid-svg-icons';


const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = productLists.flatMap(group => group.products).find(p => p.id === Number(id));

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                ...product,
                actualPrice: Number(product.actualPrice),
                msrp: Number(product.msrp),
                quantity
            })
        );

        // Dispatch a custom event to open the cart drawer
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('open-cart'));
        }
        // router.push('/cart');
    };

    return (
        <div className={styles.productdetails}>
            <div className='baseContainer'>
                <div className="sm:flex gap-10 md:gap-20 py-10 sm:py-20">
                    {/* product left  */}
                    <div className='sm:w-1/2 rounded'>
                        <img src={product.imgUrl} alt={product.prodName} className="rounded" />
                    </div>

                    {/* product right */}
                    <div className="mt-10 sm:mt-0 sm:w-1/2">
                        <h1 className="text-5xl font-bold">{product.prodName}</h1>
                        <p className='text-xl'>{product.prodDesc}</p>
                        {/* <p className='text-xl'></p> */}


                        <p className="text-2xl font-semibold my-4">Total: ₹{Number(product.actualPrice) * quantity}</p>

                        <div className='flex items-center justify-between flex-auto gap-4 md:gap-10'>
                            <div className="flex items-center justify-center gap-2 w-1/2 text-2xl border border-blue-600 px-5 py-2 rounded-lg">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1">-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1">+</button>
                            </div>
                            <button onClick={handleAddToCart} className="w-1/2 text-2xl px-5 py-4 bg-blue-800 text-white rounded-lg">Add to Cart</button>
                        </div>

                        {/* product details  */}
                        <div className="mt-16 border-t pt-6">
                            <h2 className="text-4xl font-semibold mb-4">Product Details</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className='text-xl'><strong className='text-2xl'>Height:</strong> {product.height}</li>
                                <li className='text-xl'><strong className='text-2xl'>Width:</strong> {product.width}</li>
                                <li className='text-xl'><strong className='text-2xl'>Weight:</strong> {product.weight}</li>
                                <li className='text-xl'><strong className='text-2xl'>Material:</strong> Natual Sholapith (Indian Cork), Glass Box</li>
                                <li className='text-xl'><strong className='text-2xl'>Country of Origin:</strong> India</li>
                            </ul>
                        </div>

                        {/* care instructions */}
                        <div className="border-t mt-6 text-sm text-gray-800 grid grid-cols-2">
                            <div className="flex items-center pt-4 gap-4">
                                <FontAwesomeIcon icon={faTruck} className="text-blue-800 text-4xl mt-1" />
                                <div>
                                    <p className="font-semibold text-xl">7 Day Delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center pt-4 gap-4">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-800 text-4xl mt-1" />
                                <div>
                                    <p className="font-semibold text-xl">Free Shipping</p>
                                </div>
                            </div>
                            <div className="flex items-center pt-4 gap-4">
                                <FontAwesomeIcon icon={faBoxOpen} className="text-blue-800 text-4xl mt-1" />
                                <div>
                                    <p className="font-semibold text-xl">Premium Packaging</p>
                                </div>
                            </div>
                            <div className="flex items-center pt-4 gap-4">
                                <FontAwesomeIcon icon={faLeaf} className="text-blue-800 text-4xl mt-1" />
                                <div>
                                    <p className="font-semibold text-xl">Eco-Friendly Products</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
