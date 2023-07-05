import "../scss/home.scss"
import Github from "./icons/github"
import Instagram from "./icons/instagram"
import Linkedin from "./icons/linkedin"

const Home: React.FC = () => {

  return(
    <div id="Home">
      <div className="text-box">
        <h1 className="title">subhadip001</h1>
        <p className="desc">Hi, I'm Subhadip Mandal (subhadip001) and currently, I work as a Fullstack developer and AI & ML engineer.</p>
        <div className="links-box">
          <button className="contactLink">Contact me</button>
          <a href="https://github.com/subhadip001">
            <Github/>
          </a>
          <a href="https://www.instagram.com/0_subhadip_1/">
            <Instagram/>
          </a>
          <a href="https://www.linkedin.com/in/subhadip-mandal-313a121b6/">
            <Linkedin/>
          </a>
        </div>
      </div>
      <div className="img-box">
        <img src="" loading="lazy"/>
      </div>
    </div>
  )
}

export default Home
