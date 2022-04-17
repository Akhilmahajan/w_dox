import { useState } from "react";
import Button from "../Button/Button";
import MyImage from "../MyImage/MyImage";
import styles from './ImageTab.module.css'
import img0 from '../../assets/images/nft1.png'
import img1 from '../../assets/images/nft2.png'
import img2 from '../../assets/images/nft3.jpeg'
import img3 from '../../assets/images/nft4.jpg'
import img4 from '../../assets/images/nft5.jpg'
import { StaticImageData } from "next/image";

export default function ImageTab() {
  const original = [0, 0, 0, 0, 0]
  const [active, setActive] = useState([1, 0, 0, 0, 0])
  const [image, setImage] = useState(img0)

  const set = (index: number, _image: StaticImageData) => {
    const _original = [...original]
    _original[index] = 1
    setActive([..._original])
    setImage(_image)
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button style={{ margin: '0 10px' }} onClick={() => { set(0, img0) }} variant={active[0] ? 'primary' : 'outline'}>Action0</Button>
        <Button style={{ margin: '0 10px' }} onClick={() => { set(1, img1) }} variant={active[1] ? 'primary' : 'outline'}>Action1</Button>
        <Button style={{ margin: '0 10px' }} onClick={() => { set(2, img2) }} variant={active[2] ? 'primary' : 'outline'}>Action2</Button>
        <Button style={{ margin: '0 10px' }} onClick={() => { set(3, img3) }} variant={active[3] ? 'primary' : 'outline'}>Action3</Button>
        <Button style={{ margin: '0 10px' }} onClick={() => { set(4, img4) }} variant={active[4] ? 'primary' : 'outline'}>Action4</Button>
      </div>

      <div className={styles.imgHolder}>
        <MyImage
          placeholder='blur'
          alt="Mountains"
          src={image}
        />
      </div>
    </div>
  )
}