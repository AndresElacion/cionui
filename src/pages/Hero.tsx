import { useOutletContext } from "react-router-dom";
import HeroDesign1 from "../components/hero/HeroDesign1";
import HeroDesign2 from "../components/hero/HeroDesign2";
import HeroDesign3 from "../components/hero/HeroDesign3";

interface OutletContext {
  sidebarOpen: boolean;
}

export default function Hero() {
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
        <h1>Hero</h1>
      </div>

      <div className="mb-12 px-4">
        <HeroDesign1 />
      </div>
      <div className="mb-12 px-4">
        <HeroDesign2 />
      </div>
      <div className="mb-12 px-4">
        <HeroDesign3 />
      </div>
    </div>
  );
}
