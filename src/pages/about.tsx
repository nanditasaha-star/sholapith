// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <>
      <section className={styles.abtusSec1}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='md:col-span-1'>
              <Image width="550" height="700" className='mx-auto w-2/3' src="/assets/images/webp/about-sec1-img1.webp" alt="Smt. Nupur Saha" />
            </div>
            <div className='md:col-span-1'>
              <h2 className="blackBlueText">Enliven Your Ethnic Roots with <span>Wholesome</span> Craftsmanship</h2>
              <p className="mb-4">
                Headed by the impressive experience of Smt. Nupur Saha and her foundation Nupur Silpalay, Sholapith found its online establishment as its official online website. Sholapith defines the profound love and passion of Mrs. Saha for the Shola handicrafts, and describes her 25 years of rich experience aesthetically.
              </p>
              <p className="mb-4">
                The original establishment “Nupur Silpalay” got its physical store and workshop registered under the Government liaison of an SSI Unit (Small Scale Industries Unit) under the business category "Arts & Crafts". It is Mrs. Saha’s immense dedication as a proclaimed shola craft artisan, that the organization has ventured into an online community bringing out the finest wholesale and retail shola handicrafts all over the country.
              </p>

            </div>
          </div>
          <p className="mb-4">
            Having a humble beginning in 2012 at Berhampore, Murshidabad in West Bengal, this dream venture of Mrs. Saha set its stage into the market with the likes of Kadam, Dolungi, Roses and Chandramallika flowers, garlands, and Bengali wedding accessories such as Topor-Mukut, all created out of shola wood craft.
          </p>
          <p className="mb-4">
            It was later in the year 2013 that the District Industries Centre of West Bengal honoured the organization to be a coveted partner and provider of the shola craft work. This opportunity paved new horizons for the organization and helped it venture into designing and merchandizing new sholacraft models including Paltola Nouka, Mayurpankhi and howdah carriages.
          </p>
          <p className="mb-4">
            Sholapith is now ready to achieve newer verticals of success and revive the lost traditions and culture of West Bengal through its pan India presence online. Feel free to connect with us right away to know more!
          </p>
        </div>
      </section>
      <section className={`${styles.abtusSec2}`}>
        <div className="baseContainer text-center">
          <ul className={`${styles.productCountList} mb-[30px] md:mb-[40px]`}>
            <li>
              <div className={styles.productCount}>
                <p> <span>300+</span>Clients</p>
              </div>
            </li>
            <li>
              <div className={styles.productCount}>
                <p> <span>2k+</span>Products</p>
              </div>
            </li>
            <li>
              <div className={styles.productCount}>
                <p> <span>15</span>Categories</p>
              </div>
            </li>
          </ul>
          <p className="mb-4">
            Sholapith is proud to have a fantastic presence with its widest range of creatively crafted shola products. We have mastered the design of over 2000 unique shola wood craft products under more than 15 categories and a rich audience base of 300 loyal customers visiting our physical store regularly.
          </p>
          <p className="mb-10">
            With a deep understanding of the rich cultural heritage we hold, we have committed ourselves in providing our customers with exactly what they are looking for. We have always aimed at providing a piece of our heart with every gift item we design.
          </p>
          <Link href="" className='blueBtn'>Get in touch</Link>
        </div>
      </section>

      <section className={styles.abtusSec3}>
        <div className='baseContainer'>
          <h2>OUR MISSION</h2>
          <p className="mb-4">
            Sholapith has ventured into the digital space with the sole mission to bring the lovers of culture and ethnicity under one roof and offer unique and customized shola products at the most feasible prices. We are committed towards providing unparalleled customer services that speak at length about our values and dedication towards quality.
          </p>
          <p className="mb-4">
            We look forward to achieving the market economy by setting our ground in the e-commerce industry and serving a wider ambit of our audience. The sole mission of our organization is to not only produce quality shola handicraft items, but also contribute towards the growing small scale industry and revive the cultural heritage of West Bengal’s craftwork.
          </p>
          <p className="mb-4">
            By establishing Sholapith in the world of the internet, we aim at:
          </p>
          <ul className={styles.abtusSec3List}>
            <li>
              <span className={styles.listNo}>01.</span>
              <p>Making a strong online presence and reaching out to far-reaching audience through social
                media</p>
            </li>
            <li>
              <span className={styles.listNo}>02.</span>
              <p>Spreading the awareness of the shola craft by providing quality and aesthetic items
                customized to their needs
              </p>
            </li>
            <li>
              <span className={styles.listNo}>03.</span>
              <p> Generating a fair share of revenue and contribute towards the growing community and
                economy.
              </p>
            </li>
            <li>
              <span className={styles.listNo}>04.</span>
              <p> Establishing and retaining a trust factor with our audience to help us expand our
                horizon through customer loyalty.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.abtusSec4}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='md:col-span-1'>
                <Image className="w-2/3 mx-auto" src="/assets/images/webp/about-img2.webp" alt="" width="550" height="700" />
            </div>
            <div className='md:col-span-1'>
              <h2>OUR VISION</h2>
              <p className="mb-4">
                Sholapith aims at bringing together every group of target audience that look for the finest home accessories and gifting items beyond their social class and chain stores. Our idea is to reach out to every individual and revive the traditional art and craft of West Bengal.
              </p>
              <p className="mb-4">
                With the assurance of quality we look forward to customize bulk orders and even single pieces so that every person can add a part of their creative aesthetics with each shola work they possess. We aim at bridging the gap between the buyers and the craftsmen so that they can feel connected to the authenticity of traditional handicraft.
              </p>
              <p className="mb-4">
                Understanding the importance of unity in diversity, Sholapith aims at bringing people, lifestyles, cultures and ideas in one platform for the sheer love for the lost art and culture, and propound respect for the artisans under every dynamic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.abtusSec5}>
        <div className="baseContainer text-center">
          <h2 className="blackBlueText">Aesthetic <span>Shola Art</span> Customized to Your Needs</h2>
          <p className="mb-4">
            A single piece of art work or a cumulative order of multiple products, at Sholapith, we welcome you to place your order for any product customized to your needs. We will deliver every item with the same amount of sincerity and dedication.
          </p>
          <p className="mb-10">
            All our products speak at length about quality, craftsmanship and finesse and assures to bring in a bit of West Bengal heritage at your doorsteps. We are passionate and sincere, and deliver what we promise.
          </p>
          <Link className="blueBtn" href="">Get in touch</Link>
        </div>
      </section>
    
    </>
  );
};

