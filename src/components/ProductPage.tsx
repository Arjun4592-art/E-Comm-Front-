import { useParams } from 'react-router'

const ProductPage = () => {
  const { productId } = useParams()
  return (
    <div>
      ProductPage
      <h1>Product Id: {productId}</h1>
    </div>
  )
}

export default ProductPage
