import React from "react";

const Breweries = (props) => {
    const [items, setItems] = React.useState([]);
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);

    React.useEffect(() => {
      fetch(
        `https://api.openbrewerydb.org/v1/breweries?by_city=${props.city}&sort=type`
      )
        .then((Response) => Response.json())
        .then((json) => {
          setItems(json);
          setIsDataLoaded(true);
        });
    }, []);

    if(!isDataLoaded)(
      <div>
        <h1>Please wait, data is loading...</h1>
      </div>
    );
  
    return (
      <div className="breweries">
        {items.map((item) => (
          <ul key={item.name}>
            <li className="name">{item.name}</li>
            <li>
              <span>Address: </span> {item.address_1}
            </li>
            <li>
              <span>Phone: </span> {item.phone}
            </li>
            <li>
              <span>Coordinates: </span> {item.latitude}, {item.longitude}
            </li>
            <li>
              <span>Website: </span>{" "}
              <a href={item.website_url}>{item.website_url}</a>
            </li>
          </ul>
        ))}
      </div>
    );
  };
  export default Breweries;