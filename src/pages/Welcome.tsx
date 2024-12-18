export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-80 p-24 text-center">
      <p className="text-2xl font-bold text-gray-600">
        "Effortlessly customizable, fully accessible UI components built with
        Tailwind CSS. Copy, paste, and create stunning designs in seconds."
      </p>
      <div className="mt-5">
        <button className="px-4 py-1 text-nowrap bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}
