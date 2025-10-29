export default function BulletSection({
  heading, bullets
}:{ heading:string; bullets:string[] }){
  return (
    <section className="container max-w-7xl mt-8">
      <h3 className="text-lg md:text-xl font-semibold">{heading}</h3>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700 leading-7">
        {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
      </ul>
    </section>
  );
}
