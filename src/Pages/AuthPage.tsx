import { useState } from "react"
import { SingUp } from "../Components/SingUp"
import { SingIn } from "../Components/SingIn"
import styles from '../Styles/AuthPage.module.sass'
import { FormButton } from "../Components/FormButton"

export const AuthPage = () => {

  const [register, setRegister] = useState<boolean>(false)

  return (
    <div className={styles.authpage}>
      {
        register ?
          <SingUp />
          :
          <SingIn />
      }
      <FormButton title={register ? 'Have Account?' : 'Dont have account?'} func={() => setRegister(prev => !prev)}/>
    </div>
  )
}
