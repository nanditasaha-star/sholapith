// pages/index.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { useRouter } from 'next/router';
import styles from '../../styles/product.module.css';
import { productLists } from '@/configs/product-config';
import Image from 'next/image';

type Product = {
  id: number;
  imgUrl: string;
  imgDesc: string;
  prodName: string;
  actualPrice: string;
  msrp: string;
};

export default function ProductBox({ product }: { product: Product }) {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        actualPrice: Number(product.actualPrice),
        msrp: Number(product.msrp),
        quantity: 1,
      })
    );

    // Dispatch a custom event to open the cart drawer
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-cart'));
    }

    // router.push('/checkout');
  };

  const goToDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className={styles.productItem}>
      <div className={styles.productImgContainer} onClick={goToDetails} style={{ cursor: 'pointer' }}>
        <Image src={product.imgUrl} width="500" height="500" alt={product.imgDesc} />
      </div>
      <div className={styles.itemDetails}>
        <h5 className={styles.itemName}>{product.prodName}</h5>
        <div className="flex items-center justify-center">
          <span className={`${styles.price} me-3`}>₹{product.actualPrice}</span>
          <span className={styles.cancelledPrice}>₹{product.msrp}</span>
        </div>
        <div className={`${styles.priceBar} flex items-center`}>
          <button onClick={goToDetails} className={styles.wishlist}>View</button>
          <button onClick={handleAddToCart} className={styles.buyNow}>Add to Cart</button>
        </div>
      </div>
    </div>
  );


}