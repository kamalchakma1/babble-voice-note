"use client";
import { useRecoilState, useSetRecoilState } from "recoil";
import {useRouter} from "next/navigation"
import {
  IsRecordingStartAtom,
  IsRecordingStopAtom,
  MediaRecorderAtom,
  StarBackgroundImageAtom,
  WaveAtom,
} from "@/store/atoms";
import { useCallback } from "react";
export default function StopBtnComp() {
  const [isRecordingStopAto, setIsRecordingStopAto] = useRecoilState(IsRecordingStopAtom);
  const [mediaRecorderAto, setMediaRecorderAto] = useRecoilState(MediaRecorderAtom);
  const setRecordingStartAto = useSetRecoilState(IsRecordingStartAtom);
  const setStarBackgroundImageAto = useSetRecoilState(StarBackgroundImageAtom);
  const setWaveAto = useSetRecoilState(WaveAtom);
  const router = useRouter()
  // RECORDING STOP FUNCTION
  const recordingStopFun = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({audio:true});
    const mediaRecorder = new MediaRecorder(mediaStream);
    setMediaRecorderAto(mediaRecorder)
    setIsRecordingStopAto(true);
    setStarBackgroundImageAto(true);
    setWaveAto(false);
    mediaRecorderAto?.stop();
  }, [mediaRecorderAto]);
  // FUNCTION FOR DONE BUTTON
  const doneFun = useCallback(()=>{
    setRecordingStartAto(false)
    router.refresh()
  },[])
  return isRecordingStopAto ? (
    <button onClick={doneFun} className="bg-white hover:text-[#FFB98A]  relative text-2xl font-medium shadow-md w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
      Done
      <div className="w-[10rem] absolute h-[10rem] hover:w-[8rem] hover:transition-all duration-150 hover:h-[8rem] border-[0.3px] hover:border-[#FFB98A] border-transparent rounded-full"></div>
    </button>
  ) : (
    <button
      onClick={recordingStopFun}
      className="bg-white  relative hover:text-[#FFB98A] text-2xl font-medium shadow-md w-[10rem] h-[10rem] rounded-full flex items-center justify-center"
    >
      Stop
      <div className="w-[10rem] absolute h-[10rem] hover:w-[8rem] hover:transition-all duration-150 hover:h-[8rem] border-[0.3px] hover:border-[#FFB98A] border-transparent rounded-full"></div>
    </button>
  );
}
