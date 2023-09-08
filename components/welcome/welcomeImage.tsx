import Image from 'next/image';
import styles from './welcome.module.scss'
import { useEffect, useState } from 'react';

/**
 * 
 * В зависимости от размера экрана выводит разные изображения
 * 
 * @returns {JSX.Element}
 */

export default function WelcomeImage() {
  const [fileName, setFileName] = useState('/images/welcomeImage.jpg')

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 360) setFileName('/images/welcomeImage360.jpg')   
      else if (window.innerWidth <= 768) setFileName('/images/welcomeImage768.jpg')
      else if (window.innerWidth <= 1024) setFileName('/images/welcomeImage1024.jpg')
      else if (window.innerWidth <= 1440) setFileName('/images/welcomeImage1440.jpg')
      else setFileName('/images/welcomeImage.jpg')
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  
  return (
    <Image
      src={fileName}
      fill
      alt="Изображение нашего лучшего дома"
    />
  )
}