const UserPage = () => {
  return (
    <div className="container">
      <h1>Userpage</h1>
      <div className="info">
        <h3>Name: <span>Johannes</span></h3>
        <h3>Email: <span>Joh@mail.com</span></h3>
        <button>Edit name</button>
        <button>Logout</button>
      </div>

      <div className="upcoming">
        <h2>Upcoming movies</h2>
      </div>

      <div className="previous">
        <h2>Prevous movies</h2>
      </div>

    </div>
  );
}

export default UserPage;