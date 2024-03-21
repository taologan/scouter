import React from "react";
import values from "./(models)/Value";
// const fastcsv = require("fast-csv");
// const fs = require("fs");

const HomePage = async () => {
  const names = await getNames();
  // handleDownload();
  return (
    <div>
      <div>
        {/* <h1>Download CSV</h1> */}
        {/* <DownloadCSV /> */}
        {/* <button onClick={handleDownload}>Download</button> */}
        <br />
      </div>
      <h1>Teams</h1>
      <ul>
        {names.uniqueNames.map((name, index) => (
          <li key={index}>
            <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
              <a href={`/teamPage/${name}`}>{name}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const names = await getNames();
  return { names };
}

export default HomePage;
