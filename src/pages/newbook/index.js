import { Carousel, Divider } from 'antd'
import styles from './new.module.css'
import images from '../../img/s11284102.jpg'
import img1 from '../../img/s1070959.jpg'
import img2 from '../../img/s1103152.jpg'
import img3 from '../../img/s1727290.jpg'
import img4 from '../../img/s4371408.jpg'
import img5 from '../../img/s4468484.jpg'
import img6 from '../../img/s28357056.jpg'
import img7 from '../../img/s33642427.jpg'
import img8 from '../../img/s33718940.jpg'
import img9 from '../../img/s29053580.jpg'

const NewBook = () => {
  return (
    <div>
      <Divider orientation='left'>最近新书</Divider>
      <Carousel slidesToShow={6} autoplay>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img1} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img2} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img3} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img4} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img5} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img6} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img7} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img8} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={img9} alt='' />
        </div>
      </Carousel>
    </div>
  )
}

export default NewBook
