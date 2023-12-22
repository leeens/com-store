import { Hero } from '../components'
import { customFetch } from '../utils'
import { FeaturedProducts } from '../components'

const url = '/products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  const products = response.data.data
  return { products }
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
