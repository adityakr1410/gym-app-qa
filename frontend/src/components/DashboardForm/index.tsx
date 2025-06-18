import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCertificate } from '@/types';
import profilePicture from '../../assets/profile.png';
import editSVG from '../../assets/Camera.svg';
import downloadSVG from '../../assets/Download.svg';
import deleteSVG from '../../assets/Delete.svg';
import pdfSVG from '../../assets/PDF.svg';
import { Input } from '../Input';
import { Select } from '../Select';
import { SolidButton } from '../Button';
import { capitalizeFirstLetter, getDataFromLocalStorage } from '@/lib/utils';
import { MultiSelectInput } from '../MultiSelectInput';
import { TextArea } from '../TextArea';

const DashboardForm: React.FC<{ role: string }> = ({ role }) => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [files, setFiles] = useState<UploadCertificate[]>([]);
  const [firstName, setFirstName] = useState<string>('Johson');
  const [lastName, setLastName] = useState<string>('Doe');
  const [email, setEmail] = useState<string>('johnsondoe@nomail.com');
  const [specializations, setSpecializations] = useState<string[]>([
    'Yoga',
    'Personal workout',
    'Group workwout',
  ]);
  const [title, setTitle] = useState<string>('Certified personal yoga trainer');
  const [about, setAbout] = useState<string>(
    'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats,  inspiring others on their yoga journeys.'
  );
  const [target, setTarget] = useState<string>('Improve flexibility');
  const [activity, setActivity] = useState<string>('Yoga');

  useEffect(() => {
    const userData = getDataFromLocalStorage();
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleAboutChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(event.target.value);
  };
  const handleRemoveSpecialization = (itemToRemove: string) => {
    setSpecializations((prev) => {
      return prev.filter((item) => item !== itemToRemove);
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    // Filter only PDF files and map to UploadedFile type
    const pdfFiles = acceptedFiles
      .filter((file) => file.type === 'application/pdf')
      .map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));
    setFiles((prevFiles) => [...prevFiles, ...pdfFiles]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
  });
  const handleRemoveFile = (name: string) => {
    setFiles(files.filter((file) => file.name !== name));
  };
  const formatFileSize = (size: number) => {
    return size > 1048576
      ? `${(size / 1048576).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;
  };
  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
  //     const pdfFiles = selectedFiles
  //       .filter((file) => file.type === "application/pdf")
  //       .map((file) => ({
  //         name: file.name,
  //         size: file.size,
  //         type: file.type,
  //       }));
  //     setFiles((prevFiles) => [...prevFiles, ...pdfFiles]);
  // };
  const handleDashboardFormSubmit = () => {
    alert(JSON.stringify({ firstName, lastName }));
  };

  return (
    <section
      id="dashboard-form"
      className="my-4 flex flex-col gap-4 md:flex-2 lg:flex-3"
    >
      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-13 h-13 rounded-full overflow-hidden">
            <img
              src={profilePic || profilePicture}
              alt="User profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <label
            htmlFor="porfilePicInput"
            className="cursor-pointer flex items-center gap-1 md:gap-1.5"
          >
            <span className="text-xs font-light md:text-base md:font-medium">
              Edit
            </span>
            <figure>
              <img src={editSVG} alt="edit-icon" />
            </figure>
          </label>
          <input
            id="porfilePicInput"
            type="file"
            accept=".jpeg,.png,.jpg"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div className="flex flex-col">
          <span className="">{`${firstName} ${lastName} (${capitalizeFirstLetter(role)})`}</span>
          <span className="text-sm font-light">{email}</span>
        </div>
      </div>
      <div className="md:w-6/8 lg:w-3/4">
        <div className="flex flex-col lg:flex-row lg:gap-3">
          <div className="flex-1">
            <Input
              label="First Name"
              name="firstName"
              helperText="e.g. Jonson"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="flex-1">
            <Input
              label="Last Name"
              name="lastName"
              helperText="e.g. Doe"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
        {role === 'client' && (
          <>
            <Select
              label="Your target"
              options={[
                'Lose weight',
                'Gain weight',
                'Improve flexibility',
                'General fitness',
                'Build Muscle',
                'Rehabilitation/Recovery',
              ]}
              value={target}
              onChange={setTarget}
            />
            <Select
              label="Preferred Activity"
              options={[
                'Yoga',
                'Climbing',
                'Strength training',
                'Cross-fit',
                'Cardio Training',
                'Rehabilitation',
              ]}
              value={activity}
              onChange={setActivity}
            />
          </>
        )}
        {role === 'coach' && (
          <>
            <Input
              label="Title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <TextArea
              label="About"
              name="about"
              value={about}
              rows={5}
              onChange={handleAboutChange}
            />
            <MultiSelectInput
              label="Specialization"
              name="specialization"
              valuesArray={specializations}
              setSpecialization={setSpecializations}
              removeSpecialization={handleRemoveSpecialization}
            />
            <div className="">
              <h2 className="text-lg font-semibold mb-4">
                Add your certificates
              </h2>

              {/* Drag and Drop Zone */}
              <div
                {...getRootProps()}
                className={`border-1 border-dashed rounded-md p-6 text-center bg-[#9ef3000f]
                            ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}
                            `}
              >
                <input {...getInputProps()} />
                <p className="">Drag & drop file here</p>
                <p className="text-gray-500 my-2">or</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-white border border-black rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  Select File
                </button>
              </div>

              {/* Uploaded Files List */}
              {files.length > 0 && (
                <div className="mt-6">
                  <ul className="space-y-4">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="">
                            {/* PDF File Icon */}
                            <figure>
                              <img src={pdfSVG} alt="pdf-icon" />
                            </figure>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="text-gray-600 text-xs">{file.name}</p>
                            <p className="text-[10px] text-gray-400">
                              ({formatFileSize(file.size)})
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {/* Download Button */}
                          <button
                            className="cursor-pointer"
                            onClick={() =>
                              alert('Download functionality not implemented')
                            }
                          >
                            <figure>
                              <img src={downloadSVG} alt="download-icon" />
                            </figure>
                          </button>
                          {/* Remove Button */}
                          <button
                            className="cursor-pointer"
                            onClick={() => handleRemoveFile(file.name)}
                          >
                            <figure>
                              <img src={deleteSVG} alt="delete-icon" />
                            </figure>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="mt-6 flex flex-row-reverse md:w-6/8">
        <SolidButton
          onClick={handleDashboardFormSubmit}
          buttonText="Save Changes"
          styling="rounded-md w-full md:w-fit"
        />
      </div>
    </section>
  );
};

('rounded-md w-full md:w-fit');

export default DashboardForm;
