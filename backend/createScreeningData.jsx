import { useState, useEffect } from "react";

const ScreeningData = () => {
  const movies = [
    "60a7866ff38ee6481eebbe32",
    "60a7866ff38ee6481eebbe33",
    "60a7866ff38ee6481eebbe34",
    "60a7866ff38ee6481eebbe35",
    "60a7866ff38ee6481eebbe38",
    "60a7866ff38ee6481eebbe36",
    "60a7866ff38ee6481eebbe37",
    "60a7866ff38ee6481eebbe39",
    "60a7866ff38ee6481eebbe3a",
    "60a7866ff38ee6481eebbe41",
    "60a7866ff38ee6481eebbe40",
    "60a7866ff38ee6481eebbe42",
    "60a7866ff38ee6481eebbe3e",
    "60a7866ff38ee6481eebbe3b",
    "60a7866ff38ee6481eebbe3d",
    "60a7866ff38ee6481eebbe3c",
    "60a7866ff38ee6481eebbe3f",
    "60a7866ff38ee6481eebbe43",
    "60a7866ff38ee6481eebbe44",
    "60a7866ff38ee6481eebbe45",
  ];

  const [times, setTimes] = useState([11, 15, 20]);
  const [screenings] = useState([]);
  const [month] = useState(31);
  const [maxTime] = useState(22);
  const [minTime] = useState(10);
  const [prices] = useState([100, 150, 200]);

  useEffect(() => {
    getDatesInMonth();
    randomShowings();
    // eslint-disable-next-line
  }, []);

  let yymmdd;
  let price;
  let time;
  let randomMovie;

  const randomPrice = () => {
    for (let i = 0; i < prices.length; i++) {
      price = prices[Math.floor(Math.random() * prices.length)];
    }
  };

  const pickTime = () => {
    time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
  };

  const randomMovies = () => {
    let randomNumber = Math.floor(Math.random() * movies.length);
    // console.log(randomNumber);
    randomMovie = movies[randomNumber];
  };

  const randomShowings = (saloon) => {
    for (let i = 0; i < 3; i++) {
      randomMovies();
      pickTime();
      randomPrice();

      screenings.push({yymmdd, saloon, randomMovie, time, price});
    }
  };

  const assignSaloon = () => {
    // pickTime();
    randomShowings("60a7744ea7df53474ccee9c8");
    randomShowings("60a77479a7df53474ccee9c9");
  };

  const getDatesInMonth = () => {
    for (let date = 1; date < month; date++) {
      yymmdd = `2021-06-${date}`;
      assignSaloon();
    }
  };

  // console.log(screenings);

  let content = <p>Loading...</p>;
  if (screenings) {
    content = (
      <div>
        {screenings.map((screening, i) => (
          <div key={i}>
            <span>
              {`{"date": "${screening.yymmdd}", "saloon": ${screening.saloon}, "time": ${screening.time}, "film": "${screening.randomMovie}", "price": ${screening.price}},`}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Some json coming thru...!!!</h1>
      <h2>(test mockData for screenings collection)</h2>
      {content}
    </div>
  );
};

export default ScreeningData;
