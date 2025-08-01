import { isAxiosError } from 'axios'
import api from '../config/axios'
import type { ProfileForm, User } from '../types'

export const getUser = async () => {
  try {
    const { data } = await api<User>('/user')
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const updateProfile = async (formData: ProfileForm) => {
  try {
    const { data } = await api.patch<string>('/user', formData)
    return data 
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}