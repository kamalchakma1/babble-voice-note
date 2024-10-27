import { IsRecordingStopAtom } from "@/store/atoms";
import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useRecoilValue } from "recoil";
import StopBtnComp from "./StopBtnComp";
export default function CountDown() {
  const [count, setCount] = useState(3);
  const useIsRecordingStopAto = useRecoilValue(IsRecordingStopAtom);
  // TIMER
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  }, []);

  return (
    <div className="w-[45rem]  h-[23rem] flex flex-col  items-center justify-between">
      <div className="w-[100%] h-[11rem] flex items-center justify-center gap-8">
        {count === 0 ? (
          <StopBtnComp />
        ) : (
          <button className="bg-white text-slate-400 text-2xl font-medium shadow-md w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
            {count}
          </button>
        )}
        {useIsRecordingStopAto ? (
          <button className="bg-[#FFB98A] relative text-slate-400 text-md font-medium shadow-md w-[6rem] h-[6rem] rounded-full flex items-center justify-center">
            Resume
            <div className="w-[6rem] absolute h-[6rem] hover:w-[5rem] hover:transition-all duration-150 hover:h-[5rem] border-[0.3px] hover:border-slate-400 border-transparent rounded-full"></div>
          </button>
        ) : null}
      </div>
      <div className="w-[3.7rem]  cursor-pointer hover:bg-red-700 hover:text-white text-2xl text-[#FFB98A] flex items-center justify-center h-[3.7rem] bg-white rounded-full">
        <MdOutlineDeleteOutline />
      </div>
    </div>
  );
}
