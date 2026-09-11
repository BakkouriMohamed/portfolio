import { createContext, useContext } from "react";
import { INDEX } from "./i18n";

export type PanelId = (typeof INDEX)[number]["id"];

const PanelOpenContext = createContext<(id: PanelId) => void>(() => {});

export function PanelOpenProvider({
  value,
  children,
}: {
  value: (id: PanelId) => void;
  children: React.ReactNode;
}) {
  return <PanelOpenContext.Provider value={value}>{children}</PanelOpenContext.Provider>;
}

export function usePanelOpen() {
  return useContext(PanelOpenContext);
}
