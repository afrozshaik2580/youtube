import { useEffect, useState } from "react";
import Chat from "./Chat";

const names = ["Baburao", "Adil", "Vamsi", "Balu", "Kiran", "Bhargav"];
function generateRandomText(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomText = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomText += charset[randomIndex];
  }

  return randomText;
}
export default function LiveChat() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  function handleFormSubmit(e) {
    if (message === "") return;
    setChats((prevValue) => {
      if (prevValue.length >= 25) {
        prevValue.pop();
        return [
          {
            name: "Afroz",
            message: message,
          },
          ...prevValue,
        ];
      }
      return [
        {
          name: "Afroz",
          message: message,
        },
        ...prevValue,
      ];
    });
    setMessage("");
    e.preventDefault();
  }

  useEffect(function () {
    const i = setInterval(() => {
      setChats((prevValue) => {
        if (prevValue.length >= 25) {
          prevValue.pop();
          return [
            {
              name: names[Math.floor(Math.random() * names.length)],
              message: generateRandomText(25),
            },
            ...prevValue,
          ];
        }
        return [
          {
            name: names[Math.floor(Math.random() * names.length)],
            message: generateRandomText(25),
          },
          ...prevValue,
        ];
      });
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[3%] rounded-t-3xl bg-gray-300 overflow-y-scroll p-4 flex flex-col-reverse">
        {chats.map((chat, index) => (
          <Chat chat={chat} key={index} />
        ))}
      </div>
      <div>
        <form
          className="p-3 bg-gray-300 rounded-b-3xl"
          action=""
          onClick={handleFormSubmit}
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-300 w-[80%] border border-black p-1"
            type="text"
          />
          <button className="px-2 py-1 border border-black">Send</button>
        </form>
      </div>
    </>
  );
}
