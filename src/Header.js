import { useTranslation } from "react-i18next";

export default function Header(props) {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("aboutH1")}</h1>
      <h2>{t("aboutH2")}</h2>
    </div>
  );
}
