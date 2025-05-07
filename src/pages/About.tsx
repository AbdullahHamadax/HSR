import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Crosshair,
  Medal,
  Play,
  Shield,
  Target,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

import featuredPoster from "../images/FeaturedPoster.png";
import vidOnePoster from "../images/VidOnePoster.webp";
import vidTwoPoster from "../images/VidTwoPoster.webp";
import bannerImage from "../images/banner3.webp";

import featuredVideo from "../videos/Featured1.mp4";
import vid1 from "../videos/Vid1.mp4";
import vid3 from "../videos/Vid3.mp4";

function About() {
  const visionItems = [
    {
      title: "Professional Training",
      description:
        "Expert instruction from skilled marksmen for all experience levels",
      icon: Medal,
    },
    {
      title: "Safe Environment",
      description:
        "Rigorous safety protocols and supervised shooting experiences",
      icon: Shield,
    },
    {
      title: "Precision Focus",
      description: "Develop accuracy and technique through structured programs",
      icon: Crosshair,
    },
    {
      title: "Inclusive Community",
      description: "Welcoming space for all ages from 8 to 60+ years",
      icon: UserPlus,
    },
  ];

  const videoContent = [
    {
      id: "equipment-showcase",
      title: "Equipment & Instruction",
      description:
        "See our logo, professional firearms collection, and expert instructors preparing equipment",
      thumbnail: vidOnePoster,
      videoUrl: vid1,
    },
    {
      id: "target-showcase",
      title: "Target Practice Area",
      description:
        "Explore our various target setups designed for different skill levels and training objectives",
      thumbnail: vidTwoPoster,
      videoUrl: vid3,
    },
  ];

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <div className="bg-[#1C1C1C] text-white">
      <div className="relative overflow-hidden">
        <div className="relative px-4 py-16 mx-auto sm:py-24 max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl sm:text-5xl font-bold text-center text-[#FFD700] md:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-center sm:text-xl text-zinc-300"
          >
            Precision is not luck — it's the result of relentless focus.{" "}
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
              Our Mission
            </h2>
            <p className="text-base sm:text-lg">
              At our range, precision and professionalism meet passion. We're
              not just a shooting range — we are a community where beginners
              become experts and marksmen become masters.
            </p>
            <p className="text-base sm:text-lg">
              Our mission is to offer top-tier firearms training and
              recreational shooting in a safe, inclusive, and cutting-edge
              facility.
            </p>
            <p className="text-base sm:text-lg">
              Whether you're pursuing sport, self-defense skills, or just an
              adrenaline-filled hobby, you'll find support, expertise, and
              camaraderie at every turn.
            </p>
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
            See Us In Action
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {videoContent.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="overflow-hidden transition-all rounded-lg border border-zinc-800 hover:border-[#FFD700]/30 bg-black/50"
              >
                <div className="relative group">
                  {playingVideo === video.id ? (
                    <video
                      className="object-cover w-full aspect-[25/30]"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-[#FFD700]">
            What we offer
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
              Programs for All Ages
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
                  Adults (12-60+)
                </h4>
                <p className="mb-3 text-zinc-400">
                  Professional training programs designed for all skill levels,
                  from beginners to expert marksmen.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Flexible monthly training options</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Skilled Sniper and Hunter specializations</span>
                  </li>
                  <li className="flex items-center">
                    <UserPlus className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Private training sessions available</span>
                  </li>
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
                  Children (8-14)
                </h4>
                <p className="mb-3 text-zinc-400">
                  Safe, educational, and fun recreational shooting courses
                  specially designed for young enthusiasts.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Weekly sessions (4 per month)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Safety-first approach with close supervision</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Focus on fundamentals and enjoyment</span>
                  </li>
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
              Featured Video
            </h3>

            <div className="relative w-full overflow-hidden rounded-lg aspect-[25/17]">
              <video
                className="absolute inset-0 object-cover w-full h-full"
                controls
                poster={featuredPoster}
              >
                <source src={featuredVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
