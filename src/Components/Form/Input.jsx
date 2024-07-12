export function Input({ type, placeholder, value, onChange, error }) {
  return (
    <input
      className={`border rounded-md p-3 focus:outline-none focus:border-black ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
