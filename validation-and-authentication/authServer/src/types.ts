export enum Role  {
    CTO = 'cto',
    ADMIN = 'admin',
    MEMBER = 'member'
}


export type Admin = {
  id: number
  email: string
  username: string
  password: string
  role: Role
}
