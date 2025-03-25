import { Vibrant } from "node-vibrant/browser";
import { useState, useEffect, React } from "react";
import { useAudioProvider } from "../context/AudioContext";

export const ColorUtils = async () => {
  const [image, setImage] = useState(null);
  const { songData } = useAudioProvider();
  const img = songData.image[2]?.url; //extract image from songData
  useEffect(() => {
    const getImage = JSON.parse(localStorage.getItem("songData"));

    if (getImage) {
      setImage(getImage.image[2]?.url);
    }
  }, [songData]);
  const imageUrl = img || image;

  try {
    if(!imageUrl) return;

    const pallete = await Vibrant.from(imageUrl).getPalette();
    return pallete?.Vibrant?.hex || '#000000'
  } catch (error) {
    console.log('ERROR: while getting pallete' , error);
    return '#000000'
  }

};
