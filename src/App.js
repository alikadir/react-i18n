import Counter from "./Counter";
import "./styles.css";

import "./i18n";
import ChangeLanguage from "./ChangeLanguage";
import Header from "./Header";
import Clock from "./Clock";
import Wallet from "./Wallet";

export default function App() {
  return (
    <div className="App">
      <ChangeLanguage />
      <Header />
      <Counter />
      <Clock />
      <Wallet />
    </div>
  );
}
