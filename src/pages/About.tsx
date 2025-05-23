import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Crosshair,
  Medal,
  Play,
  Shield,
  Target,
  UserPlus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import featuredPoster from "../images/FeaturedPoster.png";
import vidFivePoster from "../images/VidFivePoster.webp";
import vidFourPoster from "../images/VidFourPoster.webp";
import vidOnePoster from "../images/VidOnePoster.webp";
import vidSixPoster from "../images/VidSixPoster.webp";
import vidTwoPoster from "../images/VidTwoPoster.webp";
import bannerImage from "../images/banner3.webp";

import featuredVideo from "../videos/Featured1.mp4";
import vid1 from "../videos/Vid1.mp4";
import vid3 from "../videos/Vid3.mp4";
import vid4 from "../videos/Vid4.mp4";
import vid5 from "../videos/Vid5.mp4";
import vid6 from "../videos/Vid6.mp4";

function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Map icons and media to the translated arrays
  const visionIcons = [Medal, Shield, Crosshair, UserPlus];
  const visionItemsRaw = t("about.vision", { returnObjects: true }) as { title: string; description: string }[];
  const visionItems = visionItemsRaw.map((item, idx) => ({ ...item, icon: visionIcons[idx] }));

  const videoThumbnails = [vidOnePoster, vidTwoPoster, vidFourPoster, vidFivePoster, vidSixPoster];
  const videoUrls = [vid1, vid3, vid4, vid5, vid6];
  const videoContentRaw = t("about.videos", { returnObjects: true }) as { title: string; description: string }[];
  const videoContent = videoContentRaw.map((item, idx) => ({
    ...item,
    id: `video-${idx}`,
    thumbnail: videoThumbnails[idx],
    videoUrl: videoUrls[idx],
  }));

  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = (videoId: string) => {
    setPlayingVideoId(videoId);
    setIsPlaying(true);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => {
      if (prev === 0) return 4;
      return prev - 2;
    });
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => {
      if (prev >= 4) return 0;
      return prev + 2;
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, playingVideoId]);

  const totalDots = Math.ceil(videoContent.length / 2);
  const currentDotIndex = Math.floor(currentVideoIndex / 2);

  return (
    <div className={`bg-[#1C1C1C] text-white${isRTL ? ' text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative overflow-hidden">
        <div className="relative px-4 py-16 mx-auto sm:py-24 max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl sm:text-5xl font-bold text-center text-[#FFD700] md:text-6xl"
          >
            {t("about.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-center sm:text-xl text-zinc-300"
          >
            {t("about.subtitle")}
          </motion.p>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-zinc-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FFD700]">
              {t("about.missionTitle")}
            </h2>
            <p className="text-base sm:text-lg">{t("about.mission1")}</p>
            <p className="text-base sm:text-lg">{t("about.mission2")}</p>
            <p className="text-base sm:text-lg">{t("about.mission3")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={bannerImage}
              alt="Hunting Shooting Range logo with the motto: 'A true marksman masters the wind, not fears it.'"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-[#FFD700]">
            {t("about.seeUs")}
          </h2>

          <div className="relative">
            <div className="flex justify-center mb-4 md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevVideo}
                className="p-2 text-[#FFD700] bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous video"
              >
                <ChevronUp className="w-8 h-8" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {videoContent
                .slice(currentVideoIndex, currentVideoIndex + 2)
                .map((video) => (
                  <motion.div
                    key={video.id}
                    className="overflow-hidden transition-all rounded-lg border border-zinc-800 hover:border-[#FFD700]/30 bg-black/50"
                  >
                    <div className="relative group">
                      {playingVideoId === video.id ? (
                        <video
                          ref={videoRef}
                          className="object-cover w-full aspect-[25/30]"
                          controls
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          onEnded={() => {
                            setPlayingVideoId(null);
                            setIsPlaying(false);
                          }}
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <>
                          <img
                            src={video.thumbnail}
                            alt={`Thumbnail for ${video.title}`}
                            className="object-cover w-full aspect-video"
                          />
                          <button
                            onClick={() => handlePlayClick(video.id)}
                            className="absolute inset-0 flex items-center justify-center transition-opacity bg-black/60 group-hover:bg-black/40"
                            aria-label={`Play ${video.title} video`}
                          >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#B22222] shadow-lg">
                              <Play className="w-6 h-6 text-[#FFD700]" />
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {video.title}
                      </h3>
                      <p className="text-zinc-400">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-4 md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextVideo}
                className="p-2 text-[#FFD700] bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next video"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.button>
            </div>

            <div className="absolute inset-y-0 z-10 items-center justify-between hidden pointer-events-none md:flex left-4 right-4 sm:-left-16 sm:-right-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevVideo}
                className="p-2 pointer-events-auto text-[#FFD700] bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextVideo}
                className="p-2 pointer-events-auto text-[#FFD700] bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next video"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center mt-6">
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {Array.from({ length: totalDots }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index * 2)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentDotIndex === index
                        ? "bg-[#FFD700]"
                        : "bg-zinc-600 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to video set ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-[#FFD700]">
            {t("about.whatWeOffer")}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-black/50 border border-zinc-800 hover:border-[#FFD700]/30 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#B22222] shadow-lg">
                  <item.icon
                    className="w-6 h-6 text-[#FFD700]"
                    aria-label={`Icon for ${item.title}`}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 mt-12 border rounded-lg sm:mt-16 bg-black/30 border-zinc-800">
            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-center text-[#FFD700]">
              {t("about.programsTitle")}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-4 border rounded-lg bg-black/20 border-zinc-800"
              >
                <h4 className="mb-2 text-lg font-bold text-white">
                  {t("about.adultsTitle")}
                </h4>
                <p className="mb-3 text-zinc-400">
                  {t("about.adultsDesc")}
                </p>
                <ul className="space-y-2 text-zinc-400">
                  {(t("about.adultsFeatures", { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li className={`flex items-center${isRTL ? ' flex-row-reverse' : ''}`} key={idx}>
                      {idx === 0 && <Clock className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      {idx === 1 && <Target className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      {idx === 2 && <UserPlus className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-4 border rounded-lg bg-black/20 border-zinc-800"
              >
                <h4 className="mb-2 text-lg font-bold text-white">
                  {t("about.childrenTitle")}
                </h4>
                <p className="mb-3 text-zinc-400">
                  {t("about.childrenDesc")}
                </p>
                <ul className="space-y-2 text-zinc-400">
                  {(t("about.childrenFeatures", { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li className={`flex items-center${isRTL ? ' flex-row-reverse' : ''}`} key={idx}>
                      {idx === 0 && <Calendar className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      {idx === 1 && <Shield className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      {idx === 2 && <Target className={`w-4 h-4 text-[#FFD700]${isRTL ? ' ml-2' : ' mr-2'}`} />}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <div className="p-6 border rounded-lg bg-black/30 border-zinc-800">
            <h3 className="mb-6 text-xl sm:text-2xl font-bold text-center text-[#FFD700]">
              {t("common.featuredVideo", "Featured Video")}
            </h3>

            <div className="relative w-full overflow-hidden rounded-lg aspect-[25/17]">
              <video
                className="absolute inset-0 object-cover w-full h-full"
                controls
                poster={featuredPoster}
              >
                <source src={featuredVideo} type="video/mp4" />
                {t("common.noVideoSupport", "Your browser does not support the video tag.")}
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;