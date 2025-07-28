// pages/index.tsx
import React from 'react';
import styles from '../styles/contact.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Contact() {
  return (
    <section className={`${styles.conactUs}`}>
      <div className="baseContainer">
        <div className='lg:w-3/4 w-full text-left'>
          <h1 className='blackBlueText'>Lets have a conversation!</h1>
          <p className='mb-5 blackBlueText'>
            Curious about our products or our work? Feel free to drop us an email at <span><Link href="mailto:nupur.sholapith@gmail.com.">nupur.sholapith@gmail.com.</Link></span> or call us at <span><Link href="tel:9775600370">+91 9775600370</Link></span>
          </p>
          <p className='mb-5 blackBlueText flex items-center'>
            Or, let's chat on <Link href="https://api.whatsapp.com/send?phone=919775600370" className="inline-block ml-2">
                <Image src="/assets/images/contact-us/whatsapp.svg" width="30" height="30" alt="" />
              </Link>           
          </p>
          <p className='mb-5'>
         Do follow us on social media, and give your valuable feedback.
          </p>
          <p className='mb-5'>
           Feel free to reach out for product details, customization queries, or order updates. Our team is always happy to assist you with your requirements and make your shopping experience smooth and enjoyable.
          </p>
        </div>
      </div>

    </section>
  );
};

