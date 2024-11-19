
import pex from '../assets/pex.jpg'
import cam from '../assets/cam.jpg'
import stu from '../assets/stu.jpg'
import styles from './popularProducts.module.css'
export default function PopularProducts(){


    const items=[stu,pex,cam,stu]
    return(

        <div className={styles.mainCnt}>
            <div className={styles.heading}>Popular Products</div>
            <div className={styles.listCnt}>
            {items.map((item)=>(
                     <div className={styles.imgCnt}>
                        <img src={item} width='400px' height='400px'/>
                        <div className={styles.btn}> AddToCart</div>
                    </div>
                ) )}
            </div>
        </div>
    )
}