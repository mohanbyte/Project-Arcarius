import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import logo from "./icon3.png"

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><div><img src={logo} style={{width:"50px"}}></img></div></li>
        
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <li>Namaste, {user.displayName}</li>
            <li>
              <button className={styles.btn} onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}