import React, { useEffect } from "react";
import Catalogue from "../Components/Catalogue/Catalogue";
function CataloguePage() {
  useEffect(() => {
    document.title = "Catalogue Page With Filter using useState";
  }, []);
  return (
    <>
      <h2 className="my-4 text-3xl text-sky-700 font-semibold">
        Catalogue Page With Filter
      </h2>
      <Catalogue />
    </>
  );
}

export default CataloguePage;
