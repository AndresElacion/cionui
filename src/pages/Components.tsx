import { useOutletContext } from "react-router-dom";
import ButtonDesign1 from "../components/button/ButtonDesign1";
import ButtonDesign2 from "../components/button/ButtonDesign2";
import ButtonDesign3 from "../components/button/ButtonDesign3";
import ButtonDesign4 from "../components/button/ButtonDesign4";

interface OutletContext {
  sidebarOpen: boolean;
}

export default function Components() {
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
        <h1>Buttons</h1>
      </div>

      <div className="mb-12 px-4">
        <ButtonDesign1 />
      </div>
      <div className="mb-12 px-4">
        <ButtonDesign2 />
      </div>
      <div className="mb-12 px-4">
        <ButtonDesign3 />
      </div>
      <div className="px-4">
        <ButtonDesign4 />
      </div>
    </div>
  );
}
