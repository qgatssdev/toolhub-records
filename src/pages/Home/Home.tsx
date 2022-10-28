import Header from "../../components/Header/Header";
import "./Home.scss";
import { tools } from "./tools";
import PublicIcon from "@mui/icons-material/Public";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ConstructionIcon from "@mui/icons-material/Construction";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Lottie from "lottie-react";
import * as animation from "../../lottie/72390-happy-mail.json";
import Footer from "../../components/Footer/Footer";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  AOS.init();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".home__body h1",
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      { opacity: 1, duration: 0.7, delay: 0.4, yPercent: 0, zIndex: 0 }
    );
    tl.fromTo(
      "#body__text2",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.5, delay: 0.2 },
      "+0.5"
    );
    tl.fromTo(
      ".home__image",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.5, delay: 0.3 },
      "+0.4"
    );
  }, []);

  return (
    <div className="home__root">
      <header>
        <Header />
      </header>
      <section className="home__body">
        <h1>Smart Solution for Toolhub</h1>
        <div className="home__body__p">
          <p id="body__text2">
            Organize your work, manage your tools, tasks and goals. with
            powerful analytics to help you grow, engage and manage tools
          </p>
        </div>
        <div className="home__image">
          <img src={require("../../assets/XMLID_34_.svg").default} alt="Logo" />
        </div>
      </section>
      <section className="home__cards" ref={bodyRef}>
        <p className="home__cards__header">Some Of Our Most Popular Tools</p>
        <div className="home__cards__roots">
          {tools.map((tools) => {
            return (
              <div
                className="home__cards__card"
                key={tools.id}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
              >
                <div className="card__image">
                  {tools.logo === "scroll" ? (
                    <GroupWorkIcon style={{ fontSize: "10em" }} />
                  ) : tools.logo === "globe" ? (
                    <PublicIcon style={{ fontSize: "10em" }} />
                  ) : tools.logo === "robot" ? (
                    <PrecisionManufacturingIcon style={{ fontSize: "10em" }} />
                  ) : tools.logo === "tool" ? (
                    <ConstructionIcon style={{ fontSize: "10em" }} />
                  ) : (
                    ""
                  )}
                </div>
                <p className="card__name">{tools.toolName}</p>
                <p className="card__desc">{tools.description}</p>
                <p className="card__authors">Author(s): {tools.Authors}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="home__tools">
        <div className="home__tools__animation">
          <Lottie
            animationData={animation}
            height={400}
            width={400}
            loop={true}
          />
        </div>
        <div className="home__tools__greeting">
          <p className="greeting__1">
            Toolhub is a community-authored catalog of Wikimedia tools.
          </p>
          <p className="greeting__2">
            Discover new tools,
            <br /> promote their use in your wiki community, <br /> help improve
            them by contributing data.
          </p>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
