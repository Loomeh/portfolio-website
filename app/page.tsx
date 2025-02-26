"use client";

import { useEffect, useState } from "react";

function DisplayMusic() {
  const [songData, setSongData] = useState(null);
  const [loading, setLoading] = useState(true);
  // Store the previous (active) song text
  const [prevSongStr, setPrevSongStr] = useState("");
  // Control when the fade-out element should be removed
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch("/api/now-playing");
        if (!response.ok) {
          throw new Error("Failed to fetch song data");
        }
        const data = await response.json();
        setSongData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching song data:", error);
      }
    };

    fetchSongData();
    const intervalId = setInterval(fetchSongData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // Update the displayed message or trigger fade-out when not playing
  useEffect(() => {
    if (!loading && songData) {
      if (songData[3] === "not playing") {
        // Trigger fade-out animation, then remove after animation completes
        const timer = setTimeout(() => {
          setShouldRender(false);
          setPrevSongStr(""); // clear the previous song text
        }, 150); // duration matches the fade-out animation
        return () => clearTimeout(timer);
      } else {
        // When a song is playing, update the message and ensure it's rendered
        const newSongStr = `loomeh is currently listening to ${songData[0]} by ${songData[1]}.`;
        setPrevSongStr(newSongStr);
        setShouldRender(true);
      }
    }
  }, [loading, songData]);

  if (loading || !songData) {
    return <div />;
  }

  // Once fade-out completes, remove the element
  if (songData[3] === "not playing" && !shouldRender) {
    return <div />;
  }

  return (
    <div
      className={`text-xl text-[#8a8a8a] py-4 ${
        songData[3] === "not playing" ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <h1>{prevSongStr}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="text-4xl">loomeh</div>
      <div className="text-xl text-[#bababa] py-4">
        this is my website where you can find out about me and what i do, which is
        something that you really want to do because im an absolutely very
        interesting person and the bestest programmer ever.
      </div>
      <DisplayMusic />
    </div>
  );
}
