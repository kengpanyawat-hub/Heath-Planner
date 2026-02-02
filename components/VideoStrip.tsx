const videos = [
  "https://www.youtube.com/embed/rdNMF1bbkdc",
  "https://www.youtube.com/embed/I8NNusd2-gY",
  "https://www.youtube.com/embed/YmYhOnwdvUQ",
  "https://www.youtube.com/embed/2so2J2PHqgU",
];

export default function VideoStrip(){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((src, i)=>(
        <div key={i} className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm">
          <div className="relative aspect-video">
            <iframe className="absolute inset-0 h-full w-full" src={src} title={`video-${i}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
        </div>
      ))}
    </div>
  );
}
