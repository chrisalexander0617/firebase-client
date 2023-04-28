import userEvent from '@testing-library/user-event'
import axios, { AxiosError } from 'axios'
import { IUser } from '../types'

export const getUserByGoogleUID = async (uid: string): Promise<IUser> => {
  const apiURL = `http://localhost:4001/users/google/${uid}`;

  try {
    const response = await axios.get<IUser>(apiURL);
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 404) {
        throw new Error(`User with Google UID ${uid} not found`);
      } else {
        console.log(axiosError.response)
        throw new Error(`Failed to get user with Google UID ${uid}: ${axiosError.message}`);
      }
    } else {
      throw new Error(`Failed to get user with Google UID ${uid}: ${String(err)}`);
    }
  }
};

export const createNewUserWithGoogleUID = async (uid: string): Promise<IUser> => {
  const apiURL = `http://localhost:4001/users/`;
  const requestData = {
    googleUID: uid,
    title: "Software Engineer IV",
    firstName: "Christopher",
    lastName: "Clemmons"
  };

  try {
    const response = await axios.post<IUser>(apiURL, requestData);
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 404) {
        throw new Error(`User with Google UID ${uid} not found`);
      } else {
        console.log(axiosError.response)
        throw new Error(`Failed to create user with Google UID ${uid}: ${axiosError.message}`);
      }
    } else {
      throw new Error(`Failed to create user with Google UID ${uid}: ${String(err)}`);
    }
  }
};
