import { Browse } from "./Browse";
import { LangProvider } from "./i18n";

function Page() {
  return (
    <div className="app-shell">
      <Browse />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
