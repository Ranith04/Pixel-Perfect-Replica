import type { ReactNode } from "react";

export function PageBanner({
  label,
  title,
  subtitle,
  image,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="page-banner">
      <div className="page-banner-img">
        <img src={image} alt="" loading="eager" />
      </div>
      <div className="container">
        <div className="page-banner-inner">
          <span className="section-label">{label}</span>
          <h1 className="page-banner-title">{title}</h1>
          {subtitle && <p className="page-banner-sub">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
