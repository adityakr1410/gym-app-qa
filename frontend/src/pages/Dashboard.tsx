import { useState } from 'react';
import CommonGreenHeading from '../components/CommonGreenHeading';
import DashboardForm from '../components/DashboardForm';
import DashboardNavComponent from '../components/DashboardNavComponent';
import { getDataFromLocalStorage, logoutUser } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { FeedbackList } from '@/components/Feedback';
import { Coaches } from '@/mocks/Coaches';
import { Feedback } from '@/components/Feedback/FeedbackCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [navState, setNavState] = useState('generalInfo');
  const role = getDataFromLocalStorage()?.role;
  const mockFeedbackData = Coaches.reduce(
    (acc: { feedback: Feedback[] }, coach) => {
      const feedback = coach.feedback || [];
      return {
        ...acc,
        feedback: [...acc.feedback, ...feedback],
      };
    },
    { feedback: [] }
  );

  console.log('mockFeedbackData', mockFeedbackData);

  const handleLogoutClick = () => {
    logoutUser();
    navigate('/');
  };
  return (
    <div id="dashboard-page">
      <CommonGreenHeading headingText="My Account" />
      <div className="mt-6 px-5 md:mt-12 md:px-8 md:flex">
        <DashboardNavComponent
          role={role}
          navState={navState}
          setNavState={setNavState}
          handleLogoutClick={handleLogoutClick}
        />
        {navState === 'generalInfo' && <DashboardForm role={role} />}
        {navState === 'clientFeedback' && (
          <div className="w-full md:w-[75%] mt-6 md:mt-0">
            <FeedbackList
              feedbackData={mockFeedbackData.feedback}
              itemsPerPage={6}
              // sortType=""
              carousel={false}
              // styling=''
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
