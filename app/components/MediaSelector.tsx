import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "~/stores";
import { gameActions } from "~/stores/gameState";
import Button from "./Button";
type Props = {
    show?: boolean;
    onClose?: () => void;
};
const MediaSelector: React.FC<Props> = ({ show: showProp, onClose }) => {
    const [show, setShow] = useState(showProp);
    const [videoDevices, setVideoDevices] = useState<InputDeviceInfo[]>([]);
    const [audioDevices, setAudioDevices] = useState<InputDeviceInfo[]>([]);
    const videoDeviceId = useSelector((state: AppState) => state.game.videoDeviceId);
    const audioDeviceId = useSelector((state: AppState) => state.game.audioDeviceId);
    const dispatch = useDispatch();

    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            const videoDevices = devices.filter((device) => device.kind === "videoinput");
            const audioDevices = devices.filter((device) => device.kind === "audioinput");
            setVideoDevices(videoDevices);
            setAudioDevices(audioDevices);
        });
    }, []);
    return show ? (
        <div className="fixed top-0 left-0 z-50 flex flex-col z-10 w-screen h-screen justify-center items-center backdrop-blur-2xl">
            <div className="bg-slate-600 p-8 flex flex-col justify-center items-center rounded-md">
                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-white">Select your video capture device</p>
                    <select
                        value={videoDeviceId}
                        className="px-4 py-2 w-full bg-slate-700 text-white font-exo"
                        onChange={(e) => dispatch(gameActions.setVideoDeviceId(e.target.value))}
                    >
                        {videoDevices.map((device, i) => (
                            <option key={i} value={device.deviceId}>
                                {device.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col space-y-2 w-full mt-4">
                    <p className="text-white">Select your audio input</p>
                    <select
                        value={audioDeviceId}
                        className="px-4 py-2 w-full bg-slate-700 text-white font-exo"
                        onChange={(e) => dispatch(gameActions.setAudioDeviceId(e.target.value))}
                    >
                        {audioDevices.map((device, i) => (
                            <option key={i} value={device.deviceId}>
                                {device.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-row w-full justify-end items-center mt-4">
                    <Button
                        className="bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4"
                        onClick={() => {
                            setShow(false);
                            onClose && onClose();
                        }}
                    >
                        OK
                    </Button>
                </div>
            </div>
        </div>
    ) : null;
};

export default React.memo(MediaSelector);
