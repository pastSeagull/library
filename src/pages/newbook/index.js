import { Carousel, Divider } from 'antd'
import styles from './new.module.css'
import images from '../../img/s11284102.jpg'

const NewBook = () => {
  return (
    <div>
      <Divider orientation='left'>最近新书</Divider>
      <Carousel slidesToShow={6} autoplay>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={images} alt='' />
        </div>
      </Carousel>
    </div>
  )
}

export default NewBook
