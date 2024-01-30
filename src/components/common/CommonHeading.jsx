export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-primary text-uppercase">
          {heading}
        </h6>
        <h1 className="mb-5">
          {subtitle}{" "}
          <span className="text-primary text-uppercase">{title}</span>
        </h1>
      </div>
    </>
  );
}
