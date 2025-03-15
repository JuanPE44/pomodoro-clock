import { useSpotifyPlayer } from "../../../hooks/useSpotifyPlayer";
import Icon from "../../../icons/Icon";
import { IconSpotify } from "../../../icons/IconSpotify";
import { Spinner } from "../../ui/Spinner";

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
    isLoadingDevice,
  } = useSpotifyPlayer({ token });

  if (isPremium === false) {
    return (
      <div className="spotify-player">
        <p>⚠️ Necesitas una cuenta Premium para usar el reproductor.</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl bg-neutral-800 p-3 filter backdrop-blur-md">
      {track ? (
        <div className="flex w-full items-center gap-2">
          <img
            src={track.cover}
            alt="Album cover"
            className="h-14 w-14 rounded-2xl"
          />
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <IconSpotify width={12} height={12} />
                <span className="text-xs text-neutral-300">
                  {!isLoadingDevice
                    ? device && device.name
                    : "Changing device..."}
                </span>
              </div>
              {device?.name != "Pomodoro Player" && (
                <button
                  className="ml-2 cursor-pointer rounded-2xl bg-[#1ed760] px-2 py-[2px] text-xs font-bold text-neutral-800"
                  onClick={setActiveDevice}
                >
                  Use this device
                </button>
              )}
            </div>
            <div className="flex justify-between gap-1">
              <div>
                <h3 className="limited-text font-medium">{track.name}</h3>
                <p className="text-xs text-neutral-400">{track.artist}</p>
              </div>
              <div
                className={`flex items-center space-x-4 ${
                  (device?.name != "Pomodoro Player" ||
                    isLoadingDevice == true) &&
                  "pointer-events-none grayscale filter"
                }`}
              >
                <button
                  className="rotate-y-180 cursor-pointer"
                  onClick={previousTrack}
                >
                  <Icon name="next" />
                </button>
                <button onClick={togglePlay} className="cursor-pointer">
                  {isPlaying ? (
                    <Icon name="pause" size={18} />
                  ) : (
                    <Icon name="play" size={18} />
                  )}
                </button>
                <button className="cursor-pointer" onClick={nextTrack}>
                  <Icon name="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center p-5">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
