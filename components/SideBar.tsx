"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat";
import BarLoader from "react-spinners/BarLoader";
import DarkModeButton from "./DarkModeButton";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2 h-[400px] scrollbar-hide overflow-hidden overflow-y-scroll">
            {loading && (
              <div className="hidden md:flex items-center mx-auto p-5 text-center">
                <BarLoader color="#5f5ff5" width={200} />
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      <DarkModeButton />

      {session && (
        <div
          onClick={() => signOut()}
          className="flex items-center justify-start px-5 py-3 md:space-x-7 mb-2 
          rounded-lg hover:bg-gray-700/70 cursor-pointer transition-all duration-200 ease-out"
        >
          <img
            src={session.user?.image!}
            alt="Profile photo"
            className="h-8 w-8 rounded-full"
          />
          <p className="flex-1 hidden md:inline text-gray-300 text-base font-semibold">
            Log out
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
