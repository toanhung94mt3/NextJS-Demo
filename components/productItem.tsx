import Link from 'next/link'
import Product from '../types/product'

type Props = {
    product: Product
}

const ProductItem = ({ product }: Props) => {
    return (
        <>
            <br />
            <Link href={`/products/${ product.id }`}>
                <a>{ product.name }</a>
            </Link>
        </>

    )
}

export default ProductItem
