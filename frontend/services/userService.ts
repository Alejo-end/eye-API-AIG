import axios from 'axios'
import { AxiosPromise } from 'axios'
import { IAccessToken, IUser, IUserCreate } from '../types/IUser'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const USERS_API_URL = API_URL + '/users/'

export const userService = {
  registerNewUser: (newUser: IUserCreate): AxiosPromise<IUser> => {
    const payload = { new_user: newUser }
    return axios.post(USERS_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getCurrentUser: (token: IAccessToken | string): AxiosPromise<IUser> => {
    let accessToken = 'Bearer '
    if (typeof token === 'object') accessToken += token.access_token
    else if (typeof token === 'string') accessToken += token

    return axios.get(USERS_API_URL + 'me/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
  },
  getUserByUsername: (username: string): AxiosPromise<IUser> => {
    return axios.get(USERS_API_URL + `${username}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  login: (email: string, password: string): AxiosPromise<IAccessToken> => {
    const formdata = `username=${email}&password=${password}`

    return axios.post(USERS_API_URL + 'login/token/', formdata)
  },
}