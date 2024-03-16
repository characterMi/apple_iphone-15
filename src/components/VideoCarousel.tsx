// This component is quite complicated, you must know gsap.

"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { hightlightsSlides } from "@/constants";

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);

  // these two refs refers to those progressive dots
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);

  // as you can guess, this state is for our videos
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<any[]>([]);

  useGSAP(() => {
    // animation for our slider
    gsap.to("#slider", {
      transform: `translateX(${-100 * video.videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [video.isEnd, video.videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!video.isPlaying) {
        // we pause the video if it's not playing according to our state
        videoRef.current[video.videoId].pause();
      } else {
        video.startPlay && videoRef.current[video.videoId].play();
      }
    }
  }, [video.startPlay, video.videoId, video.isPlaying, loadedData]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span) {
      // animate the progress of the video

      let anim = gsap.to(span[video.videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[video.videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[video.videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (video.isPlaying) {
            gsap.to(videoDivRef.current[video.videoId], {
              width: "12px",
            });

            gsap.to(span[video.videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (video.videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[video.videoId].currentTime /
            hightlightsSlides[video.videoId].videoDuration
        );
      };
      if (video.isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [video.videoId, video.startPlay]);

  const handleProcess = (type: string, i?: number) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i! + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: true }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: false }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div className="sm:pr-20 pr-10" key={list.id} id="slider">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  ref={(el) => (videoRef.current[i] = el as any)}
                  onPlay={() =>
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }))
                  }
                  onLoadedMetadata={(e) =>
                    setLoadedData((prev) => [...prev, e])
                  } // this will get triggered with the event once the metadata of the video has loaded
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current?.map((_, i) => (
            <div
              key={i}
              ref={(el) => (videoDivRef.current[i] = el as any)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el as any)}
              />
            </div>
          ))}
        </div>

        <button className="control-btn">
          <Image
            src={
              video.isLastVideo
                ? "/assets/images/replay.svg"
                : !video.isPlaying
                ? "/assets/images/play.svg"
                : "/assets/images/pause.svg"
            }
            alt={
              video.isLastVideo ? "Replay" : !video.isPlaying ? "Play" : "Pause"
            }
            width={20}
            height={20}
            onClick={
              video.isLastVideo
                ? () => handleProcess("video-reset")
                : !video.isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
