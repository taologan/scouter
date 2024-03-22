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
    ampScoredAuto: 0,
    speakerScoredAuto: 0,
    cycles: 0,
    ampScoredTeleop: 0,
    speakerScoredTeleop: 0,
    speakerDefense: false,
    sourceDefense: false,
    trap: false,
    endPosition: "",
    disabled: false,
    foul: 0,
    totalScore: 0,
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
  const handleIncrement = (e) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value + 1
    }));
  };

  const handleDecrement = (e) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value - 1
    }));
  };
  const calculateTotalScore = () => {
    formData.totalScore += (parseInt(formData.ampScoredAuto) || 0) * 2;
    formData.totalScore += formData.mobility ? 2 : 0;
    formData.totalScore += (parseInt(formData.ampScoredTeleop) || 0) * 1;
    formData.totalScore += (parseInt(formData.speakerScoredAuto) || 0) * 5;
    formData.totalScore += (parseInt(formData.speakerScoredTeleop) || 0) * 2;
    formData.totalScore += formData.park ? 1 : 0;
    formData.totalScore += formData.onstage ? 3 : 0;
    formData.totalScore += formData.harmony ? 2 : 0;
    formData.totalScore += formData.trap ? 5 : 0;
    formData.totalScore -= foul
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // calculateTotalScore();
    formData.totalScore += (parseInt(formData.ampScoredAuto) || 0) * 2;
    formData.totalScore += formData.mobility ? 2 : 0;
    formData.totalScore += (parseInt(formData.ampScoredTeleop) || 0) * 1;
    formData.totalScore += (parseInt(formData.speakerScoredAuto) || 0) * 5;
    formData.totalScore += (parseInt(formData.speakerScoredTeleop) || 0) * 2;
    formData.totalScore += formData.park ? 1 : 0;
    formData.totalScore += formData.onstage ? 3 : 0;
    formData.totalScore += formData.harmony ? 2 : 0;
    formData.totalScore += formData.trap ? 5 : 0;
    formData.totalScore -= (parseInt(formData.foul));
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
    // router.push("/");
    window.location = '/';
    router.refresh();
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
              type="text" required
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />

            <br />

            <label htmlFor="matchNumber">Match Number:</label>
            <br />
            <input
              type="text" required
              id="matchNumber"
              name="matchNumber"
              onChange={handleChange}
              value={formData.matchNumber}
            />

            <br />

            <label htmlFor="position">Position:</label>
            <br />
            <select
              id="position" required
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
            {/* <input
              type="text"
              id="ampScoredAuto"
              name="ampScoredAuto"
              onChange={handleChange}
              value={formData.ampScoredAuto}
            /> */}
            <div>
              <button type="button" name="ampScoredAuto" value={formData.ampScoredAuto} onClick={handleDecrement}>
                -
              </button>
              <span>{formData.ampScoredAuto}</span>
              <button type="button" name="ampScoredAuto" value={formData.ampScoredAuto} onClick={handleIncrement}>
                +
              </button>
            </div>

            <br />

            <label htmlFor="speakerScoredAuto">Speaker Scored:</label>
            <br />
            {/* <input
              type="text"
              id="speakerScoredAuto"
              name="speakerScoredAuto"
              onChange={handleChange}
              value={formData.speakerScoredAuto}
            /> */}
            <div>
              <button type="button" name="speakerScoredAuto" value={formData.speakerScoredAuto} onClick={handleDecrement}>
                -
              </button>
              <span>{formData.speakerScoredAuto}</span>
              <button type="button" name="speakerScoredAuto" value={formData.speakerScoredAuto} onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>

          <div>
            <h1>Teleop</h1>
            <label htmlFor="cycles">Cycles:</label>
            <br />
            {/* <input
              type="text"
              id="cycles"
              name="cycles"
              onChange={handleChange}
              value={formData.cycles}
            /> */}
            <div>
              <button type="button" name="cycles" value={formData.cycles} onClick={handleDecrement}>
                -
              </button>
              <span>{formData.cycles}</span>
              <button type="button" name="cycles" value={formData.cycles} onClick={handleIncrement}>
                +
              </button>
            </div>
            <br />

            <label htmlFor="ampScoredTeleop">Amp Scored:</label>
            <br />
            {/* <input
              type="text"
              id="ampScoredTeleop"
              name="ampScoredTeleop"
              onChange={handleChange}
              value={formData.ampScoredTeleop}
            /> */}
            <div>
              <button type="button" name="ampScoredTeleop" value={formData.ampScoredTeleop} onClick={handleDecrement}>
                -
              </button>
              <span>{formData.ampScoredTeleop}</span>
              <button type="button" name="ampScoredTeleop" value={formData.ampScoredTeleop} onClick={handleIncrement}>
                +
              </button>
            </div>
            <br />

            <label htmlFor="speakerScoredTeleop">Speaker Scored:</label>
            <br />
            {/* <input
              type="text"
              id="speakerScoredTeleop"
              name="speakerScoredTeleop"
              onChange={handleChange}
              value={formData.speakerScoredTeleop}
            /> */}
            <div>
              <button type="button" name="speakerScoredTeleop" value={formData.speakerScoredTeleop} onClick={handleDecrement}>
                -
              </button>
              <span>{formData.speakerScoredTeleop}</span>
              <button type="button" name="speakerScoredTeleop" value={formData.speakerScoredTeleop} onClick={handleIncrement}>
                +
              </button>
            </div>

            <br />

            <label htmlFor="speakerDefense">Speaker Defense:</label>
            <br />
            <input
              type="checkbox"
              id="speakerDefense"
              name="speakerDefense"
              onChange={handleChange}
              value={formData.speakerDefense}
            />

            <br />

            <label htmlFor="sourceDefense">Source Defense:</label>
            <br />
            <input
              type="checkbox"
              id="sourceDefense"
              name="sourceDefense"
              onChange={handleChange}
              value={formData.sourceDefense}
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
            <label htmlFor="endPosition">End Position:</label>
            <br />
            <select
              id="endPosition"
              name="endPosition"
              onChange={handleChange}
              value={formData.endPosition}
            >
              <option value="None">None</option>
              <option value="Park">Park(Underneath)</option>
              <option value="Hang">Onstage(Hang)</option>
              <option value="Harmony">Harmony(Two hang)</option>
            </select>

            <br />

            <label htmlFor="disabled">Disabled:</label>
            <br />
            <input
              type="checkbox"
              id="disabled"
              name="disabled"
              onChange={handleChange}
              value={formData.disabled}
            />

            <br />

            <label htmlFor="foul">Foul:</label>
            <br />
            <input
              type="text"
              id="foul"
              name="foul"
              onChange={handleChange}
              value={formData.foul}
            />

            <br />

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
