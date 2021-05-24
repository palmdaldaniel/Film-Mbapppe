import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

const HomePage = () => {
    const { showings, getShowingsById } = useContext(MovieContext);
    console.log(showings)

    const handleClick = (showingId) => {
        getShowingsById(showingId)
            .then(res => console.log(res))
    }

    let content = ''

    if (showings) {
        content =
            <div>
                <h2>Todays showings</h2>
                <div className='d-flex flex-wrap'>
                    {showings.map((showing, i) => (
                        <Card key={i} onClick={() => handleClick(showing._id)} style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={showing.film.Poster} style={{ height: '20rem' }} />
                            <Card.Body>
                                <Card.Title>{showing.film.Title}</Card.Title>
                                <Card.Text>
                                    {showing.film.Genre[0]}
                                    <span className='mx-2'>{showing.time}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>


    }
    else {
        content = <div>Loading...</div>
    }

    return (
        <div className="container">
            <h1>Home page</h1>
            {content}
        </div>
    );
};

export default HomePage;