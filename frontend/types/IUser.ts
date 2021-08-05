export interface IAccessToken {
    access_token: string
    token_type: string
  }
  
  export interface IUser {
    nombre?: string
    correo?: string
    bio?: string
    is_active: boolean
    is_superuser: boolean
    access_token?: IAccessToken
  }
  
  export interface IUserCreate {
    nombre?: string
    correo?: string
    password: string
  }