import { Product } from '../entity/Product'

export const createProduct = async (record: Product): Promise<Product> => {
  const product = Product.create(record)
  return await product.save()
}

export const findProducts = async (productId?: number): Promise<Product[]> => {
  return await Product.find({
    ...(productId ? { where: { id: +productId } } : {}),
  })
}
