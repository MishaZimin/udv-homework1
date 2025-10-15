interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full border border-gray-300 transition-colors ${
          checked ? 'bg-black' : 'bg-white'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full border border-gray-300 bg-white transition-transform ${
            checked ? 'translate-x-[23px]' : 'translate-x-[3px]'
          }`}
        />
      </button>
      <span className="ml-3 text-sm text-gray-900">{label}</span>
    </div>
  );
}