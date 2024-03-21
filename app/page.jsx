import React from "react";
import values from "./(models)/Value";
import Link from "next/link";
const fastcsv = require("fast-csv");
const fs = require("fs");

const HomePage = async () => {
  // handleDownload();
  const names = await getNames();
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

const handleDownload = async () => {
  const data = await values.find();
  console.log(data);
  const csvStream = fastcsv.format({ headers: true });
  const writableStream = fs.createWriteStream('app/documents/out.csv');
  
  csvStream.pipe(writableStream);
   
  data.forEach(entry => {
    csvStream.write({
      _id: entry._id.toString(),
      name: entry.name,
      matchNumber: entry.matchNumber,
      position: entry.position,
      noShow: entry.noShow,
      mobility: entry.mobility,
      ampScoredAuto: entry.ampScoredAuto,
      speakerScoredAuto: entry.speakerScoredAuto,
      ampScoredTeleop: entry.ampScoredTeleop,
      speakerScoredTeleop: entry.speakerScoredTeleop,
      speakerDefense: entry.speakerDefense,
      sourceDefense: entry.sourceDefense,
      trap: entry.trap,
      endPosition: entry.endPosition,
      disabled: entry.disabled,
      foul: entry.foul,
      totalScore: entry.totalScore,
      additionalComments: entry.additionalComments,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      __v: entry.__v
    });
  });
  console.log("Done!");
}

const getNames = async() =>  {
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
