"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const EntryForm = () => {
  const router = useRouter();
  const startingData = {
    name: "",
    matchNumber: "",
    position: "",
    noShow: false,
    mobility: false,
    ampScoredAuto: "",
    speakerScoredAuto: "",
    ampScoredTeleop: "",
    speakerScoredTeleop: "",
    trap: false,
    endPosition: "",
    harmony: false,
    additionalComments: "",
  };
  const [formData, setFormData] = useState(startingData);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/Data", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit} method="post">
          <div>
            <h1>General Info</h1>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />

            <br />

            <label htmlFor="matchNumber">Match Number:</label>
            <br />
            <input
              type="text"
              id="matchNumber"
              name="matchNumber"
              onChange={handleChange}
              value={formData.matchNumber}
            />

            <br />

            <label htmlFor="position">Position:</label>
            <br />
            <select
              id="position"
              name="position"
              onChange={handleChange}
              value={formData.position}
            >
              <option value="Blue 1">Blue 1</option>
              <option value="Blue 2">Blue 2</option>
              <option value="Blue 3">Blue 3</option>
              <option value="Red 1">Red 1</option>
              <option value="Red 2">Red 2</option>
              <option value="Red 3">Red 3</option>
            </select>

            <br />

            <label htmlFor="No Show">No Show:</label>
            <br />
            <input
              type="checkbox"
              id="noShow"
              name="noShow"
              onChange={handleChange}
              value={formData.noShow}
            />
          </div>

          <div>
            <h1>Auto</h1>
            <label htmlFor="mobility">Mobility:</label>
            <br />
            <input
              type="checkbox"
              id="mobility"
              name="mobility"
              onChange={handleChange}
              value={formData.mobility}
            />

            <br />

            <label htmlFor="ampScoredAuto">Amp Scored:</label>
            <br />
            <input
              type="text"
              id="ampScoredAuto"
              name="ampScoredAuto"
              onChange={handleChange}
              value={formData.ampScoredAuto}
            />

            <br />

            <label htmlFor="speakerScoredAuto">Speaker Scored:</label>
            <br />
            <input
              type="text"
              id="speakerScoredAuto"
              name="speakerScoredAuto"
              onChange={handleChange}
              value={formData.speakerScoredAuto}
            />
          </div>

          <div>
            <h1>Teleop</h1>
            <label htmlFor="ampScoredTeleop">Amp Scored:</label>
            <br />
            <input
              type="text"
              id="ampScoredTeleop"
              name="ampScoredTeleop"
              onChange={handleChange}
              value={formData.ampScoredTeleop}
            />

            <br />

            <label htmlFor="speakerScoredTeleop">Speaker Scored:</label>
            <br />
            <input
              type="text"
              id="speakerScoredTeleop"
              name="speakerScoredTeleop"
              onChange={handleChange}
              value={formData.speakerScoredTeleop}
            />

            <br />

            <label htmlFor="trap">Trap:</label>
            <br />
            <input
              type="checkbox"
              id="trap"
              name="trap"
              onChange={handleChange}
              value={formData.trap}
            />
          </div>

          <div>
            <h1>End Position</h1>
            <label htmlFor="endPosition">End Position:</label>
            <br />
            <select
              id="endPosition"
              name="endPosition"
              onChange={handleChange}
              value={formData.endPosition}
            >
              <option value="None">None</option>
              <option value="Park">Park</option>
              <option value="Hang">Hang</option>
            </select>

            <br />

            <label htmlFor="harmony">Harmony:</label>
            <br />
            <input
              type="checkbox"
              id="harmony"
              name="harmony"
              onChange={handleChange}
              value={formData.harmony}
            />
          </div>

          <div>
            <h1>Comments</h1>
            <label htmlFor="additionalComments">Additional Comments:</label>
            <br />
            <input
              type="text"
              id="additionalComments"
              name="additionalComments"
              onChange={handleChange}
              value={formData.additionalComments}
            />
          </div>

          <input type="submit" className="btn" value="Submit Data" />
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
