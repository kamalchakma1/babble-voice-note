import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "./Button";
import {
  IsRecordingStartAtom,
  MediaRecorderAtom,
  StarBackgroundImageAtom,
  WaveAtom,
} from "@/store/atoms";
import { useCallback } from "react";
export default function StartBtnComp() {
  const setIsRecordingStartAto = useSetRecoilState(IsRecordingStartAtom);
  const setStarBackgroundImageAto = useSetRecoilState(StarBackgroundImageAtom);
  const [mediaRecorderAto, setMediaRecorderAto] = useRecoilState(MediaRecorderAtom);
  const setWaveAto = useSetRecoilState(WaveAtom);
  // RECORDING START FUNCTION
  const startRecordingFun = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
    const mediaRecorder = new MediaRecorder(mediaStream);
    setMediaRecorderAto(mediaRecorder);
    mediaRecorderAto?.start();
    setIsRecordingStartAto(true);
    setStarBackgroundImageAto(false);
    setWaveAto(true);
  }, [mediaRecorderAto]);
  return (
    <>
      <span onClick={startRecordingFun}>
        <Button title={"Babble"} isStartBtn={true} />
      </span>
    </>
  );
}
