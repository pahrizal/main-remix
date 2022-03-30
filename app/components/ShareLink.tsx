import clsx from "clsx";
import React, { useState } from "react";
import { useLocation } from "remix";
import useCopy from "use-copy";
import CopyIcon from "~/assets/icons/Copy";

const ShareLink = () => {
  const loc = useLocation();
  const [gameUrl, setGameUrl] = useState("");
  const [copied, copy, setCopied] = useCopy(gameUrl);
  const copyGameLink = () => {
    copy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  React.useEffect(() => {
    const msg = `Hi there!\nThis game is awesome, Main-Remix.\nJoin me here ${window.location.href}\n\nLet's play!!`;
    setGameUrl(msg);
  }, []);
  return (
    <div
      className={clsx(
        "flex flex-row border items-center border-slate-200 relative font-exo",
        "font-virgil px-4 pt-4 mb-8 before:text-slate-100 before:content-['Game_ID'] pb-3",
        "before:-top-3 before:absolute before:bg-slate-700 before:px-2 before:-ml-2"
      )}
    >
      <input
        value={loc.pathname.slice(1)}
        className="rounded bg-transparent h-full w-full outline-none font-exo text-lime-400 text-2xl"
        type="text"
        readOnly
      />
      <button
        onClick={copyGameLink}
        className={clsx(
          "relative cursor-pointer font-virgil hover:before:content-['Copy_and_share']",
          "before:w-max hover:before:bg-slate-900 before:p-2 before:rounded-lg",
          "before:absolute before:-top-[40px] before:left-1/2 before:mr-2"
        )}
      >
        <CopyIcon stroke="#FFFFFF" fill="#FFFFFF" />
      </button>
    </div>
  );
};

export default ShareLink;
