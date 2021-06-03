import styles from '../css/NotFound.module.css'

const NotFound = () =>{
    return (
      <>
        <div style={{maxWidth:'50vw'}} className="container mt-5">
          <div className="d-flex justify-content-center mt-5">
            
          <h2 className={styles.feedback}>Sorry, we couldn't find any result. </h2>
            <div className ="containerLogo">
          <img className={styles.Logo} src="./assets/whitepopcorn.svg" alt="popcorn logo" />
          </div>
          </div>
        </div>
      </>
    )
  }
  export default NotFound;