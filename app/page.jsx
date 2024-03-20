import React from "react";
import values from "./(models)/Value";

async function HomePage({ uniqueNames }) {
  const names = await getNames();
  return (
    <div>
      <h1>Unique Names</h1>
      <ul>
        {names.uniqueNames.map((name, index) => (
          <li key={index}>
            <a href={`/teamPage/${name}`}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getNames() {
  try {
    const data = await values.find();
    // console.log(data);
    // console.log("FJIOWEFJOIWEFJIWOEFJIOWEFJWEIOJIOWFJWEIOFJWEIOF");

    // get unique names out of the data
    const uniqueNames = data ? [...new Set(data.map((item) => item.name))] : [];
    // console.log(uniqueNames);
    return {
      // props: { uniqueNames },
      uniqueNames,
    };
  } catch (err) {
    console.error(err);
    return {
      props: { error: "Error fetching data" },
    };
  }
}

export default HomePage;
