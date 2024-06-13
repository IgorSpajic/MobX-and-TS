import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Athlete from "./Athlete";

type Props = {
  athlete: Athlete;
};

function TradeForm({ athlete }: Props) {
  const [teamName, setTeamName] = useState<string>("");
  return (
    <>
      <input
        type="text"
        placeholder="Tim..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Uradi
        </button>
      </span>
    </>
  );
}

export default observer(TradeForm);
