import "./banner.scss";

export default function Banner({ img, text, alt }) {
  return (
    <div className="banner">
      <img className="banner__image" src={img} alt={alt} />
      <h2 className="banner__text">{text}</h2>
    </div>
  );
}
