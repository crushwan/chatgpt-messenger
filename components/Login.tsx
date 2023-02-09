"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Login() {
  const [text] = useTypewriter({
    words: ["Welcome to ChatGPT", "Sign In to use ChatGPT"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="bg-[#5f5ff5] h-screen flex flex-col items-center justify-center text-center space-y-20">
      <Image src="../chatGPT.svg" width={150} height={150} alt="logo" />

      <h1 className="text-2xl lg:text-4xl font-bold tracking-wide">
        <span className="mr-3 text-[#181818]">{text}</span>
        <Cursor cursorColor="#181818" />
      </h1>
      <button
        onClick={() => signIn("google")}
        className="text-white font-semibold text-md bg-[#181818] rounded-lg px-6 py-3 tracking-wide hover:opacity-95"
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
