import styles from '../css/NotFound.module.css'

export default function NotFound() {
    return (
      <>
        <div style={{maxWidth:'50vw'}} className="container mt-5">
          <div className="d-flex justify-content-center mt-5">
            <img style={{width: '100%'}} src="https://www.jing.fm/clipimg/full/209-2093777_white-magnifying-glass-icon-png-search-white-icon.png" alt="no data" />
            <h2 className={styles.feedback}>Sorry, we coudn't find any result. </h2>
          
          </div>
        </div>
      </>
    )
  }