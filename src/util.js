import { v4 as uuidv4 } from "uuid";

function chilHop() {
  return [
    {
      id: uuidv4(),
      name: "Directions",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      color: ["#45405B", "#4E567A"],
      active: true,
    },
    {
      id: uuidv4(),
      name: "Chillhop Essentials Fall 2019",
      artist: "Chillhop Music",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9096",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/8ead77b24ce86e871c31691dec6a5983b9533db1-1024x1024.jpg",
      color: ["#F6D57F", "#B07863"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Lax Incense",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      color: ["#466012", "#4B6E6D"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Far From Home",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
      color: ["#FED57C", "#FED67C"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "After Dark",
      artist: "Sugi.wa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8105",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/be9e5dca9d4c9015c407a2d2590af8a0e5e278ce-1024x1024.jpg",
      color: ["#0D766D", "#60DB80"],
      active: false,
    },
  ];
}

export default chilHop;
