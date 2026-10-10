import Login from "./Login";
import styles from "./user.module.css"

function User(){
    return(
        <div>

              <Login/>
            <h1 className={styles.heading}>user components</h1>

            <div className={styles.container}></div>
        </div>
    )
}


export default User;