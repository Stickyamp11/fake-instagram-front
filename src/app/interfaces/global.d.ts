interface Publication {
    id: string,
    title: string,
    description: string
  }

interface UserLogin{
  email: string,
  password: string
}

interface LoginResponse{
  succeed: boolean
}

interface isAuthenticatedResponse{
  isAuthenticated: boolean,
  userGuid: string
}