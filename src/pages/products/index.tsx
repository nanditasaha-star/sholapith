// pages/index.tsx
import React from 'react';
import styles from '../../styles/product.module.css';
import { productLists } from '@/configs/product-config';
import ProductBox from '@/components/ProductBox/ProductBox';
import Image from 'next/image';

type ProductList = {
  id: number;
  prodHead: string;
  products: Product[];
};
type Product = {
  id: number;
  imgUrl: string;
  imgDesc: string;
  prodName: string;
  actualPrice: string;
  msrp: string;
}

export default function Products() {
  return (
    <>
      <section className={styles.prodListSec1}>
        <div className="baseContainer">
          <div className='md:w-2/3 mx-auto text-center'>
            <h1 className='blackBlueText'><span>Mesmerise</span> Your Aesthetic Soul</h1>
            <p className="blackOrangeText">
              Browse through our <span>widest collection</span> of the finest shola handicrafts and décor items. All our products
              are crafted with love and dedication, and speak imperiously about our <span>25 years of prolific excellence.</span>&nbsp;
              And, if you love what we do, then feel free to <span>place your order</span> across right away!
            </p>
          </div>
        </div>
      </section>

      {productLists.map((productList: ProductList) =>
      (
        <section key={productList.id} className={styles.prodListSec2}>
          <div className="baseContainer">
            <h2 className='blackBlueText text-center'><span>{productList.prodHead}</span></h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-2 `}>

              {productList.products.map((product: Product) => (
                <ProductBox key={product.id} product={product} />
              ))}

            </div>
          </div>
        </section>
      )
      )}

    </>
  );
};