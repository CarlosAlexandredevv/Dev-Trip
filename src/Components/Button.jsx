export function Button({ children }) {
  return (
    <button className="bg-primary px-4 py-2 text-white rounded font-bold mt-5 hover:bg-red-600 duration-300">
      {children}
    </button>
  );
}
