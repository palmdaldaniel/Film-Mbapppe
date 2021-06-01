import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/userPage.module.css'

const UserInfo = () => {
  const { activeUser, isEditing, setIsEditing, editName, message } = useContext(UserContext);

  return (
    <div className={styles.userInfo}>
      <h2>Hi, <span>{activeUser.name}</span>!</h2>
      <button
        className={styles.editNameButton}
        onClick={() => setIsEditing(!isEditing)}>Edit name</button>
      {isEditing ? (
        <div>
          <form action="submit"
            onSubmit={e => editName(e)}
            className={styles.nameForm}>
            <input className={styles.searchInput} type="text" 
            placeholder="New name..."/>
            <button className={styles.inputBtn} >Change</button>
            {message ? (
              <p>{message}</p>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UserInfo;