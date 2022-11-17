enum RoleName {
    ADMIN = 'admin',
    SUPER_ADMIN = 'super-admin',
    USER = 'user'
}

enum CredentialsName {
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete'
}


export type User = {
    id: number
    email?: string
    first_name: string
    last_name: string
    avater: string
    role: number
}


export type Website = {
    id: number
    name: string
    users: number[]
}

export type Role = {
    id: number,
    name: RoleName,
    credentials: CredentialsName[]
}