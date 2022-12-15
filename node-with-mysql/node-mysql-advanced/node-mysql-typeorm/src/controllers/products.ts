import { Product } from '../entity/Product'

export const createProduct = async (record: Product): Promise<Product> => {
    console.log(Product)
  const product = Product.create(record)
  console.log('Product')
  return await product.save()
}

export const findProduct = async (productId?: string): Promise<Product[]> => {
  return await Product.find({
    ...(productId ? { where: { id: +productId } } : {}),
  })
}
