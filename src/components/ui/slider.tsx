interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label: string;
}

export function Slider({ value, onChange, min = 0, max = 100, label }: SliderProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-gray-200 rounded appearance-none cursor-pointer slider"
      />
    </div>
  );
}