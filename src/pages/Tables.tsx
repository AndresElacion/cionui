import { useOutletContext } from "react-router-dom";
import TableDesign1 from "../components/Table/TableDesign1";

interface OutletContext {
  sidebarOpen: boolean;
}

export default function Tables() {
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
        <h1>Tables</h1>
      </div>

      <div className="mb-12 px-4">
        <TableDesign1 />
      </div>
    </div>
  );
}
