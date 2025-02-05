"use client";

import React, { useContext, useState } from "react";
import { ArrowRight, Link } from "lucide-react";
// import { MessagesContext } from "@/context/MessagesContext";
// import { UserDetailContext } from "@/context/UserDetailContext";
import Colors from "@/data/Colors";
import Lookup from "@/data/Lookup";
import { useRouter } from "next/navigation";
// import LoginDialog from "./LoginDialog";
// import { useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";

const Hero = () => {
  const [userInput, setUserInput] = useState<string>();
  //   const { Messages, setMessages } = useContext(MessagesContext);
  //   const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);
  //   const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
  const router = useRouter();
  const onGenerate = async (input: string) => {
    // if (!userDetail?.name) {
    //   setOpenDialog(true);
    //   return;
    // }
    // if (userDetail?.token < 10) {
    //   toast("You dont have enough tokens!");
    //   return;
    // }
    // const msg = {
    //   role: "user",
    //   content: input,
    // };
    // setMessages(msg);
    // const workSpaceId = await CreateWorkspace({
    //   messages: [msg],
    //   user: userDetail?._id,
    // });
    // console.log(workSpaceId);
    // router.push("/workspace/" + workSpaceId);
  };

  return (
    <div className="flex flex-col items-center mt-36 xl:mt-52 gap-2">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 font-medium">{Lookup.HERO_DESC}</p>
      <div
        className="p-5 border rounded-xl max-w-xl w-full mt-3"
        style={{ backgroundColor: Colors.BACKGROUND }}
      >
        <div className="flex gap-2">
          <textarea
            onChange={(event) => setUserInput(event.target.value)}
            placeholder={Lookup.INPUT_PLACEHOLDER}
            // type="text"
            className="outline-none bg-transparent w-full h-32 resize-none"
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer"
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>
      <div className="flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onGenerate(suggestion)}
            className="p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer"
          >
            {suggestion}
          </button>
        ))}
      </div>
      {/* <LoginDialog
        openDialog={openDialog}
        closeDialog={() => setOpenDialog(false)}
      /> */}
    </div>
  );
};

export default Hero;
