import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { IUser } from '../types'

export const getUserByGoogleUID = async (uid: string): Promise<IUser> => {
  const apiURL = `http://localhost:4001/users/google/${uid}`

  try {
    const response = await axios.get(apiURL)
    const userData = response.data as IUser
    return userData

  } catch (err) {
    throw err
  }
}