import { logoutUser } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const DashboardNavComponent: React.FC<{
  role: string;
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<string>>;
  handleLogoutClick: () => void;
}> = ({ role, navState, setNavState, handleLogoutClick }) => {
  return (
    <div className="flex justify-between md:flex-1 md:justify-normal md:gap-12 md:flex-col">
      <nav className="flex gap-3 md:flex-col md:items-start">
        <button
          onClick={() => setNavState('generalInfo')}
          className={
            navState === 'generalInfo'
              ? 'text-[10px] cursor-pointer px-1 border-b-2 border-[#9EF300] md:border-l-2 md:border-b-0 md:py-4 md:pl-3 md:text-[12px]'
              : 'text-[10px] cursor-pointer md:py-4 md:pl-3 md:text-[12px]'
          }
        >
          GENERAL INFORMATION
        </button>
        {role === 'coach' && (
          <button
            onClick={() => setNavState('clientFeedback')}
            className={
              navState === 'clientFeedback'
                ? 'text-[10px] cursor-pointer px-1 border-b-2 border-[#9EF300] md:border-l-2 md:border-b-0 md:py-4 md:pl-3 md:text-[12px]'
                : 'text-[10px] cursor-pointer md:py-4 md:pl-3 md:text-[12px]'
            }
          >
            CLIENT FEEDBACK
          </button>
        )}
        <button
          onClick={() => setNavState('changePassword')}
          className={
            navState === 'changePassword'
              ? 'text-[10px] cursor-pointer px-1 border-b-2 border-[#9EF300] md:border-l-2 md:border-b-0 md:py-4 md:pl-3 md:text-[12px]'
              : 'text-[10px] cursor-pointer md:py-4 md:pl-3 md:text-[12px]'
          }
        >
          CHANGE PASSWORD
        </button>
      </nav>
      <button
        className="px-2 py-1.5 border-1 border-black rounded-md text-xs cursor-pointer md:text-sm md:px-3 md:py-2 md:w-1/3"
        onClick={handleLogoutClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default DashboardNavComponent;
