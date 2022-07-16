import { ClickUpUiSection, PaymoCard1 } from "./components/";

const COMPONENTS = [
  {
    title: "ClickUp",
    Component: ClickUpUiSection,
  },
  {
    title: "Paymo",
    Component: PaymoCard1,
  },
];

function App() {
  return (
    <div className="md:p-20 p-8 bg-gray-50">
      <div className="space-y-4">
        {COMPONENTS.map(({ title, Component }) => {
          return (
            <div className="space-y-2">
              <h2 className="font-bold text-gray-800">{title}</h2>
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
