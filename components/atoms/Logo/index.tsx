import {LogoProps} from "./Logo.props";
import Image from 'next/image'
import Link from "next/link";
import styles from './Logo.module.sass'
const Logo = ({src = '',className = '',...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <Link href="/" >
              <a>
                  {src.length ?<Image
                      width={200}
                      height={37}
                      src={src}
                      alt="Logo"
                      quality="60"
                      layout="responsive"
                  />: 'Logo'}
              </a>
          </Link>
      </div>


  )
}
export default Logo
