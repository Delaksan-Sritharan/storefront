import HotelCard from "./HotelCard";

function App() {
  return (
    <div className="py-5 border-2 border-black">
      <HotelCard
        name="Montmartre Majestry Hotel"
        location="Paris, France"
        rating={4.7}
        reviews={["K", "L"]}
        price={160}
      />
    </div>
  );
}

export default App;
