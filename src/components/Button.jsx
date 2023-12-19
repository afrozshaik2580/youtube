export default function Button({ name }) {
  return (
    <div>
      <button className="px-2 py-1 border border-solid border-gray-300 rounded-lg bg-gray-200 whitespace-nowrap">
        {name}
      </button>
    </div>
  );
}
