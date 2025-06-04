export const getToken = () => {
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  return user ? JSON.parse(user)?.token : token ? JSON.parse(token) : null
}

export const API_URL = import.meta.env.VITE_API_URL || '';

