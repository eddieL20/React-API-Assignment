import "./App.css";
import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries?by_city=san_diego")
      .then((Response) => Response.json())
      .then((json) => {
        setItems(json);
        setIsDataLoaded(true);
      });
  }, []);

  return (
    <div>
      <h1>Breweries in San Diego I'd like to visit</h1>
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
            <span>Website: </span> <a href={item.website_url}>{item.website_url}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default App;
