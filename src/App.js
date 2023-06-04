import "./styles.css";
import CardComponent from "./components/f2-sidebar";

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ alignSelf: "flex-end" }}>
        <CardComponent region="Germany" />
      </div>
    </div>
  );
}
