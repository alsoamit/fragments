export default function Button({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "px-5 h-10 md:h-10 bg-green-600 rounded-full text-white font-bold cursor-pointer hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ring-offset-2 ring-offset-white " +
        className
      }
    >
      {children}
    </button>
  );
}
