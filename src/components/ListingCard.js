import React, { useState } from "react";

function ListingCard({ id, description, image, location, setListings, listings }) {
  const [liked, setLiked] = useState(false)

  const handleDelete = () => {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => {
        const deleteItem = listings.filter((item) => item.id !== id)
        setListings(deleteItem)
      })
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={() => setLiked(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLiked(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
