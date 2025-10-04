const getAllHotels = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/hotels", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);

        return data;

    } catch (error) {
        throw new Error(error.message);
    };
}

export { getAllHotels }