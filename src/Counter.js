import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Counter(props) {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    // mount
    const myVar = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      // unmount
      clearInterval(myVar);
    };
  }, [count]);

  return (
    <div>
      <p>{t("counter", { count })}</p>
    </div>
  );
}
