import { useDispatch } from "react-redux"
import { removeUser } from "../Store/slice/userSlice"
import { useAuth } from "../Hooks/useAuth"
import styles from '../Styles/Header.module.sass'
import { useNavigate } from "react-router-dom"

export const Header = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { userId } = useAuth()

  return (
    <div className={styles.header}>
      <button className={styles.header_button} onClick={() => navigate('/')}>Home</button>
      {
        userId ?
          <button className={styles.header_button} onClick={() => dispatch(removeUser())}>Log out</button>
          :
          <button className={styles.header_button} onClick={() => navigate('/auth')}>Login</button>
      }
    </div>
  )
}
