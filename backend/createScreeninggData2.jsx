
const Home = () => {
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
      "60a7866ff38ee6481eebbe45"
    ];
    const salons = [
      "60a7744ea7df53474ccee9c8",
      "60a77479a7df53474ccee9c9",
    ];
    const time = [
      ["10:00", "13:00", "18:00"],
      ["12:00", "15:00", "20:00"]
    ];
    const price = [
      "100",
      "150",
      "200"
    ];
  
    let showings = []
  
    let content = <p>Loading...</p>;
  
    const getRandomMovie = () => {
      return movies[Math.round(Math.random() * (movies.length - 1))]
    }
    const getRandomPrice = () => {
      return price[Math.round(Math.random() * (price.length - 1))]
    }
  
    const dateToString = (date) => {
      let dateString = [
        date.getFullYear(),
        ('0' + (date.getMonth() + 1)).slice(-2), // to delete 0 before 10,11,12. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.)
        ('0' + date.getDate()).slice(-2)]
        .join('-');
  
      return dateString
    }
  
    const assignTime = (arr) => { //assigns time and sends for rendering
      let count = 0
      let timeArr = []
  
      arr.forEach(element => {
        if (element.saloon === '60a7744ea7df53474ccee9c8') {
          timeArr = time[0]// ["10:00", "13:00", "18:00"],
  
        } else {
          timeArr = time[1] // ["12:00", "15:00", "20:00"]
        }
  
        if (count < 2) {
          element.time = timeArr[count]//0,1
          count++
        } else if (count === 2) {
          element.time = timeArr[count] //2
          count = 0
        }
  
        content = (
          <div>
            {showings.map((showing, i) => (
              <div key={i}>
                <span>
                  {`{"date": "${showing.date}", "saloon": "${showing.saloon}",
                    "film": "${showing.film}", "time": "${showing.time}", "price": ${showing.price}},`}
                </span>
              </div>
            ))}
          </div>
        );
  
      })
    }
  
    const createShowingsArray = (amauntOfDays) => {
  
      let startDate = new Date();//always current date
  
      for (let i = 0; i < amauntOfDays; i++) {
        let dateString = dateToString(startDate)
  
        for (let i = 0; i < 3; i++) {//3
  
          for (let j = 0; j < salons.length; j++) {//2
            let tempSalon = salons[j]
  
            let oneShowing = {
              saloon: tempSalon,
              film: getRandomMovie(),
              date: dateString,
              time: '',
              price: getRandomPrice()
            }
            showings.push(oneShowing)
          }
        }
  
        startDate.setDate(startDate.getDate() + 1); //add one day to startDay
      }
  
      assignTime(showings)
    }
  
    createShowingsArray(60)//specify amount of days here
  
  
    return (
      <div>
        <h1>Home</h1>
        {content}
      </div>
    );
  };
  
  export default Home;
  