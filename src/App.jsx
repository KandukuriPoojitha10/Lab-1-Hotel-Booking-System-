import { useState } from "react";
import "./App.css";

function App() {
  const [bookedRooms, setBookedRooms] = useState([]);

  const rooms = [
    {
      id: 1,
      type: "Single Room",
      price: 1200,
      occupancy: 1,
      bed: "1 Single Bed",
      icon: "🛏️",
      color: "#e7f2ec",
    },
    {
      id: 2,
      type: "Double Room",
      price: 2200,
      occupancy: 2,
      bed: "1 Double Bed",
      icon: "🛌",
      color: "#f8eee0",
    },
    {
      id: 3,
      type: "Deluxe Room",
      price: 3500,
      occupancy: 3,
      bed: "1 King Bed",
      icon: "🏨",
      color: "#e9edf8",
    },
    {
      id: 4,
      type: "Family Suite",
      price: 5000,
      occupancy: 4,
      bed: "2 Double Beds",
      icon: "✨",
      color: "#f4e8f3",
    },
  ];

  function bookRoom(room) {
    if (bookedRooms.includes(room.id)) {
      return;
    }

    setBookedRooms([...bookedRooms, room.id]);
    alert(`${room.type} booked successfully!`);
  }

  return (
    <div className="app">
      <header className="navbar">
        <h1>
          🏨 Grand<span>Stay</span>
        </h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#rooms">Our Rooms</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-button" href="#rooms">
          Book Now
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">WELCOME TO GRANDSTAY HOTEL</p>

          <h2>
            Your Comfort,
            <br />
            Our <span>Priority.</span>
          </h2>

          <p className="hero-description">
            Find the perfect room for your next stay.
            Enjoy comfort, convenience, and great service.
          </p>

          <a href="#rooms" className="primary-button">
            Explore Rooms →
          </a>
        </div>

        <div className="hero-image">
          🏨
          <span>Comfort Meets Luxury</span>
        </div>
      </section>

      <section className="rooms-section" id="rooms">
        <div className="section-heading">
          <div>
            <p className="tagline">FIND YOUR PERFECT ROOM</p>
            <h2>Our Available Rooms</h2>
            <p>Choose a room that suits your needs and budget.</p>
          </div>

          <div className="room-count">
            {rooms.length - bookedRooms.length}
            <span> Rooms Available</span>
          </div>
        </div>

        <div className="room-container">
          {rooms.map((room) => {
            const isBooked = bookedRooms.includes(room.id);

            return (
              <div className="room-card" key={room.id}>
                <div
                  className="room-image"
                  style={{ backgroundColor: room.color }}
                >
                  <span>{room.icon}</span>

                  <span className="room-badge">
                    {isBooked ? "Booked" : "Available"}
                  </span>
                </div>

                <div className="room-details">
                  <h3>{room.type}</h3>

                  <p className="bed-type">{room.bed}</p>

                  <div className="room-info">
                    <span>👥 {room.occupancy} Guests</span>
                    <span>❄️ AC Room</span>
                  </div>

                  <div className="room-footer">
                    <div className="price">
                      <strong>
                        ₹{room.price.toLocaleString("en-IN")}
                      </strong>
                      <span>/ night</span>
                    </div>

                    <button
                      className={isBooked ? "booked-button" : "book-button"}
                      onClick={() => bookRoom(room)}
                      disabled={isBooked}
                    >
                      {isBooked ? "Booked ✓" : "Book Now"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="tagline">WHY CHOOSE US?</p>
          <h2>Feel at Home, Wherever You Stay.</h2>
        </div>

        <div className="features">
          <div>
            <span>🛏️</span>
            <h3>Comfortable Rooms</h3>
            <p>Clean and relaxing rooms for every guest.</p>
          </div>

          <div>
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Choose rooms that fit your budget.</p>
          </div>

          <div>
            <span>⭐</span>
            <h3>Great Experience</h3>
            <p>Enjoy a pleasant and comfortable stay.</p>
          </div>
        </div>
      </section>

      <footer>
        <h3>🏨 GrandStay Hotel</h3>
        <p>Making every stay comfortable and memorable.</p>
        <p>© 2026 GrandStay Hotel | Hotel Room Booking System</p>
      </footer>
    </div>
  );
}

export default App;