import Link from 'next/link'
import ProductItem from '@/components/productItem'
import Product from '@/types/product'
import { GetServerSideProps } from 'next'

type Props = {
    products: Product[]
}

const Products = ({ products }: Props) => {
    return (
        <section>
            <h2>List of Product</h2>

            <Link href="/">
                <a>home</a>
            </Link>
            <br />

            {products.map((product) => {
                return (
                    <div key={ product.id }>
                        <ProductItem product={product} />
                    </div>
                )
            })}
        </section>
    )
}

export default Products

export const getServerSideProps: GetServerSideProps =  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            products: data
        }
    }
}