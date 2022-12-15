import { Order } from '../entity/Order'

export const createOrder = async (record: Order): Promise<Order> => {
  const order = Order.create(record)
  return await order.save()
}

export const findOrder = async (orderId?: string): Promise<Order[]> => {
  return await Order.find({
    ...(orderId ? { where: { id: +orderId } } : {}),
  })
}
