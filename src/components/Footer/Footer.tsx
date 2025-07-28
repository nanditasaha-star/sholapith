import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from './footer.module.css'


// import styles from '@/components/Footer/footer.module.css'

export default function Footer() {
  return (
    <div className={`px-10 ${styles.footer}`}>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-16 md:mb-0">
          <h6 className={`${styles.foooterHeading}`}>Get in touch</h6>
          <ul className={`${styles.addressList}`}>
            <li>
              <span className={`${styles.footerIcon}`}>
                <Image className="w-10 h-10" width="100" height="100" src="/assets/images/home/foooter-map-icon.svg" alt="" />
              </span>
              <p className="address">
                141/A, A.C.Road, Khagra, Berhampore, Murshidabad, West Bengal - 742103
              </p>
            </li>
            <li>
              <span className={`${styles.footerIcon}`}>
                <Image className="w-10 h-10" width="100" height="100" src="/assets/images/home/foooter-phone-icon.svg" alt="" />
              </span>
              <Link href="tel:9775600370">+91 9775600370</Link>
            </li>
            <li>
              <span className={`${styles.footerIcon}`}>
                <Image className="w-10 h-10" width="100" height="100" src="/assets/images/home/foooter-email-icon.svg" alt="" />
              </span>
              <Link href="mailto:info@sholapith.com">info@sholapith.com</Link>
            </li>

          </ul>
        </div>

        <div className="hidden lg:block text-center">
          <Image className="mx-auto block w-16 lg:w-20" width="200" height="200" src="/assets/images/home/logo-img.webp" alt="" />
          <Image className="mx-auto block w-1/2 lg:w-auto" width="200" height="200" src="/assets/images/home/footer-text-logo.svg" alt="" />
        </div>

        <div className="mb-16 md:mb-0 flex items-start md:justify-around justify-between">
          <div className="">
            <h6 className={`${styles.foooterHeading}`}>Quick Link</h6>
            <ul className={`${styles.footerQuickLink}`}>
              <li><Link href="">About Us</Link></li>
              <li><Link href="">How we work</Link></li>
              <li><Link href="">Our Prodcuts</Link></li>
              <li><Link href="">Contact Us</Link></li>
            </ul>
          </div>
          <div className=" lg:ml-10">
           
            <ul className={` ${styles.socialLinks}`}>
              <li>
                <Link href="">
                  <Image className="h-10 w-10" height="100" width="100" src="/assets/images/home/facebook.svg" alt="facebook icon" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image className="h-10 w-10" height="100" width="100" src="/assets/images/home/youtube.svg"
                    alt="youtube icon" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image className="h-10 w-10" height="100" width="100" src="/assets/images/home/linkdin.svg" alt="linkedin icon" />
                </Link>
              </li>
            </ul>
            <Image className={`mt-5 ml-5  h-auto w-auto ${styles.biswaBanglaLogo}`} height="500" width="500" src="/assets/images/webp/biswa-bangla-logo.webp" alt="" />
          </div>
        </div>
      </div>

      <div className={`${styles.copyright}`}>
        <p className="text-center">&#169; sholapith.com 2025. | All rights reserved. </p>
      </div>
    </div>
  )
}

