import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import BannerImg1 from "../../../assets/banner-img-111.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            laboriosam magni iure nostrum non ratione pariatur maxime vero
            itaque veniam doloremque, quibusdam, beatae sit odio exercitationem
            magnam? Repellat, consequuntur earum?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg1} alt="BannerImg" />
      </div>
    </div>
  );
};

export default Banner;
