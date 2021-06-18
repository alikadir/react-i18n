import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Wallet(props) {
  const [amount, setAmount] = useState(123456.783);
  const { t, i18n } = useTranslation();

  const formattedAmount = Intl.NumberFormat(i18n.language).format(amount);

  const parseLocaleNumber = (stringNumber, locale) => {
    const thousandSeparator = Intl.NumberFormat(locale).formatToParts(11111)[1]
      .value;
    const decimalSeparator = Intl.NumberFormat(locale).formatToParts(1.1)[1]
      .value;

    return parseFloat(
      stringNumber
        .replace(new RegExp("\\" + thousandSeparator, "g"), "")
        .replace(new RegExp("\\" + decimalSeparator), ".")
    );
  };

  return (
    <div key={i18n.language}>
      <label style={{ textTransform: "uppercase" }}>
        {t("amount")} :
        <input
          type="text"
          defaultValue={formattedAmount}
          onChange={(e) => {
            setAmount(parseLocaleNumber(e.target.value, i18n.language));
          }}
        />
      </label>
      <p>{formattedAmount}</p>
    </div>
  );
}
