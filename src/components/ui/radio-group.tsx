interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

export function RadioGroup({ value, onChange, options, label }: RadioGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="gender"
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-black focus:ring-black border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-900">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}