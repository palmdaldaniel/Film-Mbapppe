import { Link } from 'react-router-dom'

const NotFoundPage= () => {
    return (  
        <div style={{height: '50vh', textAlign: 'center', margin: '50px 10px'}}>
            <h3 style={{marginBottom: '5vh'}}>You arrived someplace not great!</h3>
            <Link to='/login'>Log in here</Link> 
            <p style={{margin: '10px'}}>or</p>
            <Link to='/'>go back to home</Link> 
        </div>
    );
}

export default NotFoundPage;