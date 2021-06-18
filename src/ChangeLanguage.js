import { useTranslation } from "react-i18next";

function Button(props) {
  const { i18n } = useTranslation();

  const boldText = { fontWeight: "bold", fontSize: 15 };
  const normalText = { fontWeight: "normal", fontSize: 15 };

  const languageName = new Intl.DisplayNames([i18n.language], {
    type: "language"
  });

  return (
    <button
      style={i18n.language === props.language ? boldText : normalText}
      onClick={(e) => {
        i18n.changeLanguage(props.language);
      }}
    >
      {languageName.of(props.language)}
    </button>
  );
}

export default function ChangeLanguage(props) {
  return (
    <p>
      <Button language="en" />
      <Button language="tr" />
      <Button language="hi" />
    </p>
  );
}
