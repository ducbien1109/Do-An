import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] bg-black flex flex-col text-white items-center justify-center">
      <div className=" mb-4">
        <img
          src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
          alt="logo"
        />
      </div>
      <div className=" text-center mb-6">
        <h1 className="font-bold text-6xl mb-4">Page not available</h1>
        <p className="font-bold text-xl text-slate-500">
          Something went wrong, please try again later.
        </p>
      </div>
      <div>
        <button
          onClick={() => navigate("/home")}
          className=" bg-slate-200 rounded-[10px] py-2 px-4 text-xl text-black font-bold hover:scale-125"
        >
          Home
        </button>
      </div>
    </div>
  );
}
