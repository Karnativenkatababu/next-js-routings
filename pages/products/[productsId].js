import { useRouter } from "next/router"

function ProductDetails(){

    const router= useRouter()
    const productsId = router.query.productsId
    return <h1> Product ProductDetails of {productsId} Page</h1>
}
export default ProductDetails;