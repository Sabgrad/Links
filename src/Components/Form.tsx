import { FC, useState } from 'react'
import styles from '../Styles/Form.module.sass'
import { FormButton } from './FormButton'

type Form = {
  title: string
  handleClick: (email: string, password: string) => void
}

export const Form: FC<Form> = ({ title, handleClick }) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <>
      <h1 className={styles.title}>
        {title}
      </h1>
      <input
        className={styles.email_input}
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        className={styles.password_input}
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <FormButton title={title} func={() => handleClick(email, password)} />
    </>
  )
}


