import { IconSpotify } from "../icons/IconSpotify";
import { IconPause } from "../icons/IconPause";
import { IconPlay } from "../icons/IconPlay";
import { IconNext } from "../icons/IconNext";
import { useSpotifyPlayer } from "../hooks/useSpotifyPlayer";

interface SpotifyPlayerProps {
  token: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ token }) => {
  const {
    isPremium,
    track,
    device,
    previousTrack,
    togglePlay,
    nextTrack,
    isPlaying,
    setActiveDevice,
  } = useSpotifyPlayer({ token });

  if (isPremium === false) {
    return (
      <div className="spotify-player">
        <p>⚠️ Necesitas una cuenta Premium para usar el reproductor.</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 filter backdrop-blur-md p-3 rounded-2xl w-full">
      {track ? (
        <div className="flex items-center w-full gap-2">
          <img
            src={track.cover}
            alt="Album cover"
            className="w-14 h-14 rounded-2xl"
          />
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center">
                <IconSpotify width={12} height={12} />
                <span className="text-xs text-neutral-300">
                  {device ? device.name : "Other device"}
                </span>
              </div>
              {device?.name != "Pomodoro Player" && (
                <button
                  className="rounded-2xl text-xs px-2 py-[2px] bg-[#1ed760] ml-2 font-bold text-neutral-800 cursor-pointer"
                  onClick={setActiveDevice}
                >
                  Use this device
                </button>
              )}
            </div>
            <div className="flex justify-between gap-1">
              <div>
                <h3 className="font-medium limited-text">{track.name}</h3>
                <p className="text-xs text-neutral-400">{track.artist}</p>
              </div>
              <div
                className={`flex space-x-4 items-center ${
                  device?.name != "Pomodoro Player" &&
                  "grayscale filter pointer-events-none"
                }`}
              >
                <button
                  className="rotate-y-180 cursor-pointer"
                  onClick={previousTrack}
                >
                  <IconNext width={15} height={15} />
                </button>
                <button onClick={togglePlay} className="cursor-pointer">
                  {isPlaying ? (
                    <IconPause width={18} height={18} />
                  ) : (
                    <IconPlay width={18} height={18} />
                  )}
                </button>
                <button className="cursor-pointer" onClick={nextTrack}>
                  <IconNext width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-4">conectando...</div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
