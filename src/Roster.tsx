import React from "react";
import Athlete from "./Athlete";
import { observer } from "mobx-react-lite";
import "./index.css";
import TradeForm from "./TradeForm";

const lebronJames = new Athlete("Lebron James", 37);
const StephCurry = new Athlete("Steph Curry", 34);

function Roster() {
  return (
    <table>
      <tr>
        <th>Ime</th>
        <th>Prezime</th>
        <th>Tim</th>
        <th>Trade Form</th>
        <th>Fire?</th>
      </tr>
      {[lebronJames, StephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.teamHistory}</td>
            <td>
              <TradeForm athlete={athlete} />
            </td>
            <td>
              <button
                type="button"
                style={{ width: "100%" }}
                onClick={() => athlete.wishHappyBirthday()}
              >
                Giska is on fire!!!
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster);
