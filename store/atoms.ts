import { atom } from "recoil";

export const IsRecordingStartAtom = atom({
  key: "IsRecordingStartAtom",
  default: false,
});
export const IsRecordingStopAtom = atom({
  key: "IsRecordingStopAtom",
  default: false,
});
export const IsTimerUpAtom = atom({
  key: "IsTimerUpAtom",
  default: false,
});
export const MediaRecorderAtom = atom<MediaRecorder | null>({
  key: "MediaRecorderAtom",
  default: null,
});
export const WaveAtom = atom({
  key: "WaveAtom",
  default: false,
});
export const StarBackgroundImageAtom = atom({
  key:"StarBackgroundImageAtom",
  default: true
})
