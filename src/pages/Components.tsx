import ButtonDesign1 from "../components/button/ButtonDesign1";
import ButtonDesign2 from "../components/button/ButtonDesign2";
import ButtonDesign3 from "../components/button/ButtonDesign3";

export default function components() {
    return (
        <div className="my-7">
            <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
                <a href="/components" className="text-blue-500 hover:underline">Components</a>
                <span>/</span>
                <h1>Buttons</h1>
            </div>

            <div className="mb-12">
                <ButtonDesign1 />
            </div>
            <div className="mb-12">
                <ButtonDesign2 />
            </div>
            <div>
                <ButtonDesign3 />
            </div>
        </div>
    )
}