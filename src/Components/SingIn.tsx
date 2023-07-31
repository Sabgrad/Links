import { Form } from "./Form"
import { setUser } from "../Store/slice/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../Hooks/redux-hooks"

export const SingIn = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()


  const handleSingIn = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          userId: user.uid,
        }))
        navigate('/')
      })
      .catch((error) => {
        console.log(error.code, error[0], error.message)
      })
  }

  return (
    <Form title={'Sing In'} handleClick={handleSingIn} />
  )
}
