import { Order } from '../entity/Order'
import { Product } from '../entity/Product'
import { findProducts } from './products'

export const createOrder = async (
  record: Order,
  productIds: number[]
): Promise<Order> => {
  const order = Order.create(record)

  const promises: Promise<Product[]>[] = []
  for (const productId of productIds) {
    promises.push(findProducts(productId))
  }

  const products = await Promise.all(promises)
  order.products = products.flat()
  return await order.save()
}

export const findOrders = async (
  orderId?: number,
  withRelations = false
): Promise<Order[]> => {
  return await Order.find({
    ...(orderId ? { where: { id: orderId } } : {}),
    ...(withRelations
      ? {
          relations: {
            customer: true,
            products: true,
          },
        }
      : {}),
  })
}

export const deleteOrder = async (orderId: number): Promise<boolean> => {
  const res = await Order.delete(orderId)
  return res.affected ? true : false
}
