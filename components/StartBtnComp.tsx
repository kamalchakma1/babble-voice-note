import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "./Button";
import {
  IsRecordingStartAtom,
  MediaRecorderAtom,
  WaveAtom,
} from "@/store/atoms";
import { useCallback } from "react";
export default function StartBtnComp() {
  const setIsRecordingStartAto = useSetRecoilState(IsRecordingStartAtom);
  const [mediaRecorderAto, setMediaRecorderAto] = useRecoilState(MediaRecorderAtom);
  const setWaveAto = useSetRecoilState(WaveAtom);
  // RECORDING START FUNCTION
  const startRecordingFun = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
    const mediaRecorder = new MediaRecorder(mediaStream);
    setMediaRecorderAto(mediaRecorder);
    mediaRecorderAto?.start();
    setIsRecordingStartAto(true);
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
