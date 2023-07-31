import { FC } from "react"
import styles from '../Styles/FormButton.module.sass'

type ButtonProps = {
  title: string
  func: () => void
}

export const FormButton: FC<ButtonProps> = ({ title, func }) => {

  return (
    <button
      className={styles.form_button}
      onClick={() => func()}
    >
      {title}
    </button>
  )
}
