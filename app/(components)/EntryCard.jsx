const EntryCard = ({ match }) => {
  const { data } = match;

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <h1>Name: {match.name}</h1>
        <p>Match Number: {match.matchNumber}</p>
        <p>Position: {match.position}</p>
        <p>No Show: {match.noShow ? "Yes" : "No"}</p>
        <p>Mobility: {match.mobility ? "Yes" : "No"}</p>
        <p>AMP Scored (Auto): {match.ampScoredAuto}</p>
        <p>Speaker Scored (Auto): {match.speakerScoredAuto}</p>
        <p>Cycles: {match.cycles}</p>
        <p>AMP Scored (Teleop): {match.ampScoredTeleop}</p>
        <p>Speaker Scored (Teleop): {match.speakerScoredTeleop}</p>
        <p>Speaker Defense: {match.speakerDefense ? "Yes" : "No"}</p>
        <p>Source Defense: {match.sourceDefense ? "Yes" : "No"}</p>
        <p>Trap: {match.trap ? "Yes" : "No"}</p>
        <p>End Position: {match.endPosition}</p>
        <p>Total Score: {match.totalScore}</p>
        <p>Additional Comments: {match.additionalComments}</p>
          </div>
        );
};

export default EntryCard;
