import Image from 'next/image'
import styles from './Recipe.module.scss'

type RecipeProps = {
    name: string,
    image: string
}

export const Recipe = ({name, image}: RecipeProps) => {

    return (
        <h1>SOMETHING</h1>
        // <div className={styles.recipe}>
        //     <h3>{name}</h3>
        //     <Image
        //         className={styles.imageFormat}
        //         src={image}
        //         height={150}
        //         width={300}
        //         alt={name}
        //     />
        // </div>
    )
}
