import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UseDataMap } from "../hooks/UseDataMap.js";
import { UseGlobalContext } from "./context.jsx";

const url =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchQueryValue } = UseGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchQueryValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchQueryValue}`);

      return result.data;
    },
  });

  const newDataObj = UseDataMap(response?.data?.results);

  if (response.isLoading) {
    return (
      <section className="imageContainer">
        <h3>Loading ....</h3>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="imageContainer">
        <h3>{`Ooops, we have and error: ${response.error}`}</h3>
      </section>
    );
  }

  if (newDataObj.length < 1) {
    return (
      <section className="imageContainer">
        <h3>No results found...</h3>
      </section>
    );
  }

  return (
    <>
      <section className="imageContainer">
        {newDataObj?.map((image) => (
          <img key={image.id} src={image.urls.regular} className="img" />
        ))}
      </section>
    </>
  );
};

export default Gallery;
