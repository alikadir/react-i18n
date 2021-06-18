import { useState } from "react";
import { useTranslation } from "react-i18next";
import timeZones from "./timeZones.json";

export default function Clock(props) {
  const { t, i18n } = useTranslation();
  const [currentTimeZone, setCurrentTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const changeTimeZone = (e) => {
    setCurrentTimeZone(e.target.value);
  };

  const currentDate = Intl.DateTimeFormat(i18n.language, {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: currentTimeZone
  }).format(Date.now());

  return (
    <div>
      <p>{currentDate}</p>
      <p>{t("clock.timeZone", { timeZone: currentTimeZone })}</p>
      <select onChange={changeTimeZone}>
        <option>{currentTimeZone}</option>
        {timeZones.map((tz) => (
          <option key={tz}>{tz}</option>
        ))}
      </select>
      <p>{t("clock.warning")}</p>
    </div>
  );
}
