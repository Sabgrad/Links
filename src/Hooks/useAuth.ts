import { useAppSelector } from "./redux-hooks";

export const useAuth = () => {
  const {email, userId} = useAppSelector(state => state.user)
  
  return {
    email,
    userId
  }
}