// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/hiw.module.css';

export default function HowWeWork() {
  return (
    <>
      <section className={styles.hiwSec1}>
        <div className="baseContainer">
          <div className='md:w-2/3 mx-auto text-center'>
            <h1 className="blackBlueText leading-none">The Shola Craft <span>Mechanism</span> - Our 5 Pillars of <span>Success</span></h1>
            <p className="blackOrangeText">Let us now take you through a quick tour of the <span>prolonged process</span> to give you a fair idea of our craft. With immense experience and utmost dedication, we not only bring out the best handicraft products, but also ensure that all our inquisitive audience are aware of this <span>interesting trivia.</span> Scroll down to get a quick glimpse of the process.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.hiwSec2}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='md:col-span-1 order-1'>
              <Image src="/assets/images/webp/how-it-works-img1.webp" className='w-1/2 md:w-2/3 mx-auto' width="381" height="527" alt="Shola wood image" />
            </div>
            <div className='md:col-span-1 order-2 text-center md:text-left'>
              <p className={`${styles.processStep} blueBtn `}>step 01</p>
              <h2 className="blackBlueText">Extracting <span>Shola stems</span></h2>
              <p>
                Stem extraction is one of the first steps of the process. The stems are unusually thick in comparison to the rest of the plant and are immersed in the water.
              </p>
              <p>
                After being uprooted, the plants are dried until their stems turn brown. The soft core is then used by the artists after they remove the dark skin. Once the stems are extracted and the core is scooped, they are then left to dry and proceed towards the next step which is building the blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hiwSec3}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='md:col-span-1 order-2'>
            <Image src="/assets/images/webp/how-it-works-img2.webp" className='mx-auto' width="381" height="527" alt="Shola wood image" />
            </div>
            <div className='md:col-span-1 order-1 text-center md:text-left'>
              <p className={`${styles.processStep} orangeBtn`}>step 02</p>
              <h2 className="whiteOrangeText">Building <span>shola blocks</span></h2>
              <p className="whiteOrangeText">
                For carving, the white soft core is perfect, which is accumulated into blocks. Slices from the core's interior are made. Then, the dry slices are carved into lovely shapes.
              </p>
              <p className="whiteOrangeText">
                Once dried, these blocks are used by the artisans to create some of the finest pieces of art with immaculate patience and utmost sincerity. The final decorative components are created by adhering these parts together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hiwSec4}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='md:col-span-1 order-1'>
            <Image src="/assets/images/webp/about-img2.webp" className='w-1/2 md:w-2/3 mx-auto' width="381" height="527" alt="Shola wood image" />
            </div>
            <div className='md:col-span-1 order-2 text-center md:text-left'>
              <p className={`${styles.processStep} orangeBtn`}>step 03</p>
              <h2 className="blackBlueText">Designing <span>the product</span></h2>
              <p>
                Dice painting and engraving are the two techniques employed by our artisans to create Sholapith objects. They use the engraving technique to create Topor-Sithimukut, masks, Sholapith flowers, ornaments, and dolls, religious items, etc.
              </p>
              <p>
                Craftsmen find it very challenging to represent or etch designs on supple materials like sholapith. So, to ensure perfection into the craft they first model the sample on dice sheets, and then proceed with replicating them on the shola blocks.
              </p>
              <p>
                Decorating the delicately carved product is the next part of the process. We use our own distinctive,traditional decorative techniques such as marble papers, cloth, etc. on the Shola sheets. The finished goods serve as examples of our aesthetic taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hiwSec5}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='md:col-span-1 order-2'>
            <Image src="/assets/images/webp/how-it-works-img3.webp" className=' mx-auto' width="381" height="527" alt="Shola wood image" />
            </div>
            <div className='md:col-span-1 order-1 text-center md:text-left'>
              <p className={`${styles.processStep} orangeBtn`}>step 04</p>
              <h2 className="whiteOrangeText">Packing all <span>Finished Goods</span></h2>
              <p className="whiteOrangeText">
                Once the products are engraved and painted, they are then dried and packed for shipment. Special care is taken on packaging the finished goods so that they are not damaged or destroyed in transit.
              </p>
              <p className="whiteOrangeText">
                We always ensure that the finished goods are delivered exactly how we have envisioned and created them without a single scratch. Hence, we walk every edge to double-assure that we use stout and sturdy packaging to safely deliver your items.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hiwSec6}>
        <div className="baseContainer text-center">
          <p className={`${styles.processStep} blueBtn`}>step 05</p>
          <h2 className="blackBlueText">The <span>final delivery</span></h2>
          <p className="blackBlueText mb-6">
            Once the products are secured and packaged, we ensure swiftest deliveries. We have tied up with the reputed delivery partners that vouch for the fastest deliveries without compromising on product security. So, expect us to never fail deadlines in terms of any of our deliveries!
          </p>
          <Link className="blueBtn" href="">Get in touch</Link>
        </div>
      </section>
    </>
  );
};