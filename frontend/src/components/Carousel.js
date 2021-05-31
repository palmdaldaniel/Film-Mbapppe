import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";



function CarouselComponent () {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const { showings, everyMovies } = useContext(MovieContext);

    let AllImgSrc = everyMovies.map((oneMovie) => oneMovie.Poster)
    let ImgSrc = []

    AllImgSrc.forEach(image => {
        let found = false
        for(const showing of showings) {

            if(image === showing.film.Poster){
                found = true
            }
        }
        if(!found) {
            ImgSrc.push(image)
        }
    })
    
    
    console.log(`ImgSrc`, ImgSrc)

    return (
        <Carousel 
            swipeable={true}
            draggable={false}
            responsive={responsive}
            infinite={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
        >
           
        {ImgSrc.map(image => {
            return (
                <div className='mx-sm-2 mx-md-5 my-5'>

                    <img
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                    />
                </div>
            );
        })}   
      </Carousel>
    )
}

export default CarouselComponent





