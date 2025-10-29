import Image from "next/image";

export default function CategoryHero({
  title, hero, intro
}:{ title:string; hero:string; intro?:string }){
  return (
    <div className="container max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h1>
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-gray-200/70">
        <Image src={hero} alt={title} fill className="object-cover"/>
      </div>
      {intro ? <p className="text-gray-700 mt-5 leading-7">{intro}</p> : null}
    </div>
  );
}
