import { useOutletContext } from "react-router-dom";
import CardDesign1 from "../components/card/CardDesign1";

interface OutletContext {
  sidebarOpen: boolean;
}

export default function Cards() {
  // Use the context from the Layout component
  const { sidebarOpen } = useOutletContext<OutletContext>();

  return (
    <div
      className={`my-7 transition-all ${
        sidebarOpen ? "ml-18" : "ml-0"
      } lg:ml-18`}
    >
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500 px-4">
        <a href="/components" className="text-blue-500 hover:underline">
          Components
        </a>
        <span>/</span>
        <h1>Cards</h1>
      </div>

      <div className="mb-12 px-4">
        <CardDesign1 />
      </div>
    </div>
  );
}
