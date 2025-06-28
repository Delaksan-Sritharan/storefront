import HotelCard from "./HotelCard";
import { hotels } from "./data";
function App() {
  return (
    <div className="py-5 border-2 border-black">
      {hotels.map((hotel, i) => {
        return (
          <HotelCard
            name={hotel.name}
            Location={hotel.location}
            rating={hotel.rating}
            reviews={hotel.reviews}
            price={hotel.price}
          />
        );
      })}
    </div>
  );
}

export default App;
