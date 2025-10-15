interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function Stepper({ value, onChange, min = 0, max = 100 }: StepperProps) {
  return (
    <div className="flex items-center justify-between text-black">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        className="rounded-[8px]  cursor-pointer w-8 h-8 flex items-center justify-center border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="text-lg font-medium">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        className="w-8 h-8 cursor-pointer flex rounded-[8px] items-center justify-center border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}