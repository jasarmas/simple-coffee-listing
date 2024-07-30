import "./Collection.styles.css";
import Card from "../Card";
import SignatureSvg from "../Signature";
import { useEffect, useState } from "react";
import { getCoffees } from "../../services/getCoffees";
import type { CoffeeItem } from "../../types/commons";
import SkeletonCard from "../SkeletonCard";

const Collection = () => {
  const [coffees, setCoffees] = useState({
    filtered: false,
    allData: [] as CoffeeItem[],
    filteredData: [] as CoffeeItem[],
  });

  const [loading, setLoading] = useState(true);

  const handleButton = (filter: boolean) => {
    let filteredCoffees = coffees.allData;
    if (filter) {
      filteredCoffees = coffees.allData.filter((el) => el.available);
    }
    setCoffees({ ...coffees, filtered: filter, filteredData: filteredCoffees });
  };

  useEffect(() => {
    const fetchCoffes = async () => {
      setLoading(true);
      const { data, error } = await getCoffees();
      if (error) {
        // Add error
        return;
      }
      setLoading(false);
      return setCoffees({
        ...coffees,
        allData: data as CoffeeItem[],
        filteredData: data as CoffeeItem[],
      });
    };

    fetchCoffes();
  }, []);

  return (
    <section className="collection-card">
      <div className="title-container">
        <h1 className="heading">Our Collection</h1>
        <p className="body body-container">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <SignatureSvg className={"signature"} />
      </div>
      <div className="buttons-container">
        <button
          onClick={() => handleButton(false)}
          className={!coffees.filtered ? "button-filled" : ""}
        >
          All Products
        </button>
        <button
          onClick={() => handleButton(true)}
          className={coffees.filtered ? "button-filled" : ""}
        >
          Available Now
        </button>
      </div>
      {loading ? (
        <>
          <SkeletonCard />
        </>
      ) : (
        <section className="cards-container">
          {coffees.filteredData.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                picture={coffee.image}
                name={coffee.name}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Collection;
