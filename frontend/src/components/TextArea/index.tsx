interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  rows: number;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  name: string;
  error?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  rows,
  placeholder,
  helperText,
  errorText,
  icon,
  showPasswordToggle = false,
  name,
  error = false,
  ...props
}) => {
  return (
    <div>
      <fieldset
        className={`border rounded-md ${error ? 'border-red-500' : 'border-[#DADADA]'} ${!helperText && !errorText ? 'mb-4' : 'mb-0'}`}
      >
        <legend
          className={`block text-sm ${error ? 'text-red-500' : 'text-gray-500'} mb-1 ml-1 px-1 font-light`}
        >
          {label}
        </legend>
        <div className="h-fit">
          <textarea
            className="w-full resize-none px-3 pb-3 ring-0 border-0 outline-0 font-light placeholder:font-light placeholder:text-gray-400"
            placeholder={placeholder}
            name={name}
            rows={rows}
            {...props}
          />
        </div>
      </fieldset>
      {error && errorText ? (
        <p className="text-xs text-red-500 mt-0 mb-4">{errorText}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500 mt-0 mb-4 font-light">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
