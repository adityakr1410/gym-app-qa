import { useNavigate } from 'react-router-dom';
import { MdError } from 'react-icons/md';
import { IoChevronBackOutline } from 'react-icons/io5';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#9EF300] flex flex-col items-center justify-center gap-8 min-h-screen px-[10%] mx-auto text-center">
      <MdError className="text-[230px] text-red-800 animate-pulse" />

      <div className="text-3xl font-semibold">Oops! Page not found.</div>

      <div className="text-8xl font-extrabold text-gray-800 tracking-tight shadow-sm">
        404
      </div>

      <p className="text-xl font-medium max-w-lg">
        We cannot find the page you are looking for.
      </p>

      <div
        onClick={() => navigate(-1)}
        className="flex bg-white hover:bg-amber-100 text-[#323A3A] px-6 py-3.5 text-lg rounded-lg cursor-pointer border-[1px] gap-3 items-center font-medium shadow-md transition-all hover:shadow-lg active:scale-95"
      >
        <IoChevronBackOutline className="text-xl" /> Back
      </div>
    </div>
  );
};

export default Error404;
