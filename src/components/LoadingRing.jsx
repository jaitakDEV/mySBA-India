import logo from "../assets/loaderlogo.svg";

export default function LoadingRing() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 gap-5">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0F4C81] animate-spin"></div>

        <img
          src={logo}
          alt="SBA India"
          className="w-14 h-14 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
        />
      </div>

      <p className="text-sm tracking-wide text-gray-600 font-medium">
        Loading MySBA India...
      </p>
    </div>
  );
}
