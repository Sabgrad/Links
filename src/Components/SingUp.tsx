import { Form } from "./Form"
import { setUser } from "../Store/slice/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from "../Hooks/redux-hooks"


export const SingUp = () => {

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleSingUp = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          userId: user.uid,
        }))
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Form title={'Sing Up'} handleClick={handleSingUp} />
  )
}