import { useState } from "react";
import s from "./SportsChoice.module.scss";

interface Selected {
  cycling: boolean;
  handball: boolean;
  skating: boolean;
  sambo: boolean;
  wrestling: boolean;
  weightlifting: boolean;
}

const SportsChoice = () => {
  const [selected, setSelected] = useState<Selected>({
    cycling: false,
    handball: false,
    skating: false,
    sambo: false,
    wrestling: false,
    weightlifting: false,
  });

  return (
    <div className={s.container}>
      <div
        className={`${s.block} ${selected.cycling && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            cycling: !selected.cycling,
          });
        }}
      >
        <img src="sports/cycling.png" />
      </div>
      <div
        className={`${s.block} ${selected.handball && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            handball: !selected.handball,
          });
        }}
      >
        <img src="sports/handball.png" />
      </div>
      <div
        className={`${s.block} ${selected.skating && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            skating: !selected.skating,
          });
        }}
      >
        <img src="sports/skating.png" />
      </div>
      <div
        className={`${s.block} ${selected.sambo && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            sambo: !selected.skating,
          });
        }}
      >
        <img src="sports/sambo.png" />
      </div>
      <div
        className={`${s.block} ${selected.wrestling && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            wrestling: !selected.wrestling,
          });
        }}
      >
        <img src="sports/wrestling.png" />
      </div>
      <div
        className={`${s.block} ${selected.weightlifting && s.active}`}
        onClick={() => {
          setSelected({
            ...selected,
            weightlifting: !selected.weightlifting,
          });
        }}
      >
        <img src="sports/weightlifting.png" />
      </div>
    </div>
  );
};

export default SportsChoice;
