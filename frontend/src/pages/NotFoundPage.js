import {Link }  from 'react-router-dom'

const NotFoundPage= () => {
    return (  
        <div style={{height: '50vh', textAlign: 'center', margin: '50px 10px'}}>
            <h3 style={{marginBottom: '5vh'}}>Please, log in to go to this page...</h3>
            <Link to='/login'>Go to log in here</Link>
        </div>
    );
}
 
export default NotFoundPage ;