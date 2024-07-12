export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-300 duration-300"
    >
      {children}
    </button>
  );
}
