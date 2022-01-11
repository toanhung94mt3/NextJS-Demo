import { useRouter } from "next/router"
import Product from '@/types/product'
import { GetServerSideProps, GetStaticPaths } from "next"

type Props = {
    product: Product
}

const ProductDetail = ({ product }: Props) => {
    const router = useRouter()
    const pid = router.query.slug

    if(router.isFallback) {
        return(<h1>Loading...</h1>)
    }

    return (
        <>
            <h2>Product detail</h2>
            <div>Product id: { product.id }</div>
            <div>Product name: { product.name }</div>
            <div>Product no1 prop: { product.email }</div>
            <div>Product no2 prop: { product.website }</div>
        </>
    )
}

export default ProductDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data = await response.json()

//     const paths = data.map((product: Product) => {
//         return {
//             params: {
//                 slug: `${product.id}`
//             }
//         }
//     })

//     return {
//         paths,
//         fallback: true
//     }
// }


export const getServerSideProps: GetServerSideProps =  async context => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.slug}`)
    const data = await response.json()

    return {
        props: {
            product: data
        },
    }
}
