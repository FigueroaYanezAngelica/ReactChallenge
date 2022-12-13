import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
    const [cards, setUsers] = useState([]);

    const fetchData = () => {
        var count = 0;
        var list = [];
        fetch("https://api.bigcartel.com/endlehomegoods/products.js")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                data.forEach((element) => {
                    count++;
                    if (count <= 9) {
                        console.log(count);
                        list.push(element);
                    }
                });
                setUsers(list);
                console.log(list);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {cards.length > 0 && (
                <div class="grid-container" className="grid-container">
                    {cards.map((card) => (

<div class="card" key={card.id}>
  <img class="card-img-top responsive" src={card.images[0].url} alt={card.name} />
  <div class="card-body">
    <h5 class="card-title">{card.name}</h5>
    <p class="card-text">{card.description.length > 200 ? `${card.description.substring(0, 200)}...` : card.description}</p>
  </div>
</div>


                        /* <div class="card" className="card" key={card.id}>
                            <div class="card-inner" className="card-inner">
                                <div class="card-face card-face-back" className="card-face card-face-bac">
                                    <div class="card-content" className="card-content">
                                        <div class="card-header" className="card-header">
                                            <img class="responsive" className="responsive" src={card.images[0].url} alt="" />
                                        </div>
                                        <div class="card-body" className="card-body">
                                            <p class="card-title" className="card-title">{card.name}</p>
                                            <div>
                                                {card.description.length > 200 ? `${card.description.substring(0, 200)}...` : card.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
