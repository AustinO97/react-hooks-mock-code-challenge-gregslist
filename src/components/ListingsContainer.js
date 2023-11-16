import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])


  const filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

    useEffect(() => {
      fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setListings(listings))
    }, [])



  const newListingCard = filteredListings.map((data) => {
    return (
    <ListingCard 
    id={data.id}
    key={data.id} 
    description={data.description}
    image={data.image}
    location={data.location}
    setListings={setListings}
    listings={listings}
    />
    )
  })

  console.log();
  return (
    <main>
      <ul className="cards">
        {newListingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
