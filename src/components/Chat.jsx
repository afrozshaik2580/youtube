export default function Chat({ chat }) {
  return (
    <div className="flex space-x-4 items-center pt-4">
      <img
        className=""
        src="https://cdn-icons-png.flaticon.com/512/9131/9131549.png"
        width="24"
        height="24"
        alt="User free icon"
      />
      <h1 className="font-bold">{chat.name}</h1>
      <p>{chat.message}</p>
    </div>
  );
}
