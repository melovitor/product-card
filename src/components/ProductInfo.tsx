import styles from './ProductInfo.module.css'


export function ProductInfo(){
    return (
        <div className={styles.main}>
            <div className={styles.code}>
                CÓDIGO: 42404
            </div>
            <div className={styles.title}>
                Sofá Margot II - Rosé
            </div>
            <div className={styles.price}>
                R$ 4.000 
            </div>
            <button className={styles.button}>
                ADICIONAR À CESTA
            </button>
        </div>
    )
}