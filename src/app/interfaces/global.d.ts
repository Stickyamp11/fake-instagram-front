interface Publication {
    id: string,
    text: string
  }


interface UserLogin{
  email: string,
  password: string
}

interface LoginResponse{
  succeed: boolean
}

interface isAuthenticatedResponse{
  isAuthenticated: boolean
}