export default function Section({
  title, subtitle, children
}:{
  title: string; subtitle?: string; children: React.ReactNode;
}){
  return (
    <section className="section">
      <div className="container max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="heading">{title}</h2>
          {subtitle ? <p className="subheading">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
