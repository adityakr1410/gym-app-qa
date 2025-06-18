import React from 'react';
import heroImage from '../../assets/hero-image.png';

// export const HeroImage: React.FC = () => {
//   return (
//     <div className="relative h-[100vh] w-full p-6 flex items-center justify-around">
//       <div className="relative h-full max-w-2xl">
//         <img
//           src={heroImage}
//           alt="Woman celebrating during workout"
//           className="h-full w-[80vh] rounded-2xl"
//           style={{ objectPosition: "center" }}
//         />
//         <div className="absolute bottom-12 left-6 right-6 text-white">
//           <p className="text-2xl font-medium leading-tight">
//             "The path to triumph is paved with the{" "}
//             <span className="text-lime-400">strength to train hard</span> and
//             the perseverance to{" "}
//             <span className="text-lime-400">rise each time you fall.</span>"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] rounded-xl overflow-hidden">
      <img
        src={heroImage}
        alt="Woman celebrating during workout"
        className="w-full h-full object-cover rounded-xl"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute bottom-12 left-6 right-6 text-white">
        <p className="text-2xl font-medium leading-tight">
          "The path to triumph is paved with the{' '}
          <span className="text-lime-400">strength to train hard</span> and the
          perseverance to{' '}
          <span className="text-lime-400">rise each time you fall.</span>"
        </p>
      </div>
    </div>
  );
};
