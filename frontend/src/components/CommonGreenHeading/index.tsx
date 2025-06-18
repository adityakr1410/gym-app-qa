import GreenHeading from '../../assets/GreenHeading.png';

const CommonGreenHeading: React.FC<{ headingText: string }> = ({
  headingText,
}) => {
  return (
    <div className="relative w-full">
      <img className="h-12 md:h-18 w-full" src={GreenHeading} alt="" />
      <span className="absolute top-3 text-md text-white ml-6 md:top-6 md:ml-9 md:text-xl lg:ml-8">
        {headingText}
      </span>
    </div>
  );
};

export default CommonGreenHeading;
