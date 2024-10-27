"use client";
import CountDown from "./CountDown";
import { Reenie_Beanie } from "next/font/google";
import StartBtnComp from "./StartBtnComp";
import { PiWaveformLight } from "react-icons/pi";
import { TbFidgetSpinner } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { IsRecordingStartAtom, StarBackgroundImageAtom, WaveAtom } from "@/store/atoms";
import Wave from "react-wavify";
const reenie_beanie = Reenie_Beanie({ weight: "400", subsets: ["latin"] });
export default function AudioRecorder() {
  const isRecordingStart = useRecoilValue(IsRecordingStartAtom);
  const starBackgroundImageAto = useRecoilValue(StarBackgroundImageAtom);
  const waveAtomAto = useRecoilValue(WaveAtom);
  return (
    <div className={`w-[100%] h-screen flex flex-col pt-6 gap-2 items-center justify-center ${starBackgroundImageAto?'bg-babble_bg_image':'bg-[#2F4858]'}  bg-cover bg-center`}>
      {/* TITLE */}
      <h4 className={`text-white text-2xl tracking-widest ${reenie_beanie.className}`}>
        {!isRecordingStart ? (
          <span>Babble</span>
        ) : null}
      </h4>

      {/* CONTAINER  */}
      <div className="w-[100%] h-screen flex items-center justify-center">
        <div
          className={`w-[90%] h-[85%] relative flex bg-transparent z-40 items-center justify-center rounded-md  ${
            !isRecordingStart ? "border-[0.1px]" : "border-0"
          } border-slate-600`}
        >
          {/* START  AND COUNTDOWN */}
          {isRecordingStart ? <CountDown /> : <StartBtnComp />}

          {/* BOTTOM TWO SMALL COMPONENTS */}
          {!isRecordingStart ? (
            <div className="w-[90%] h-[4rem]  absolute -bottom-8 flex items-center justify-center gap-4">
              <button className="w-[3.7rem] text-[#FFB684] hover:text-black flex items-center justify-center border-[1px] border-black h-[3.7rem] bg-[#2F4858] hover:bg-[#FFB684] rounded-full">
                <TbFidgetSpinner className="text-2xl" />
              </button>
              <button className="w-[3.7rem] text-[#FFB684] hover:text-black flex items-center justify-center border-[1px] border-black h-[3.7rem] bg-[#2F4858] hover:bg-[#FFB684] rounded-full">
                <PiWaveformLight className="text-2xl" />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* WAVES */}
      {waveAtomAto ? (
        <div className="w-screen h-[25rem] bg-transparent flex flex-col items-center absolute bottom-0 ">
          <span className="w-screen -mt-14">
            <Wave
              fill="#FEEE91"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 30,
                amplitude: 50,
                speed: 0.10,
                points: 5,
              }}
            />
          </span>
          <span className="w-screen -mt-16">
          <Wave
            fill="#E4C087"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 30,
              amplitude: 50,
              speed: 0.15,
              points: 3,
            }}
          />
        </span>
          <span className="w-screen -mt-[12rem] ">
            <Wave
              fill="#FFB684"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 30,
                amplitude: 50,
                speed: 0.20,
                points: 2,
              }}
            />
          </span>
          <span className="w-screen bg-[#FFB684] h-[20rem]"></span>
        </div>
      ) : null}
    </div>
  );
}
