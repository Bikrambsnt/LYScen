import { Vibrant } from "node-vibrant/browser";
import { useState, useEffect } from "react";
import { useAudioProvider } from "../context/AudioContext";

 const darkenHex = (hex, factor = 1) => {
  if (!hex) return "#222222";
  const color = hex.replace("#", "");
  const num = parseInt(color, 16);
  const r = Math.floor(((num >> 16) & 0xff) * factor);
  const g = Math.floor(((num >> 8) & 0xff) * factor);
  const b = Math.floor((num & 0xff) * factor);
  return `rgb(${r}, ${g}, ${b})`;
};

export const colorUtils = () => {
  const [color, setColor] = useState("#222222");
  const { songData } = useAudioProvider();


  useEffect(() => {
    const getColorPalette = async () => {
      // Get image from context or fallback to localStorage
      const imageUrl =
        songData?.image?.[2]?.url ||
        JSON.parse(localStorage.getItem("songData"))?.image?.[2]?.url;
      if (!imageUrl) return;

      try {
        const palette = await Vibrant.from(imageUrl).getPalette();

       const baseColor=
          palette.Muted?.hex ||
          // palette.Muted?.hex ||
          palette.DarkVibrant?.hex ||
        
          "#222222";

      

        const smoothDarkColor = darkenHex(baseColor, 0.7);
        setColor(smoothDarkColor);
      } catch (error) {
        console.log("ERROR: While getting color palette", error);
        setColor("#222222");
      }
    };

    getColorPalette();
  }, [songData]);

  return color;
};
