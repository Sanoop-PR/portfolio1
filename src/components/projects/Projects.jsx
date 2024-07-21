import React from "react";
import "./project.css";
import { TypeAnimation } from "react-type-animation";

function Projects() {
  return (
    <section id="projects" className="work_container">
      <h1>Projects</h1>
      <section className="box_container">
        <div className="box">
          <div className="project_inner_box">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.1.261072285.1721543277&semt=sph"
              alt=""
            />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="project_text"
              cursor={false}
            />
          </div>
        </div> 
        <div className="box left">
          <div className="project_inner_box">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.1.261072285.1721543277&semt=sph"
              alt=""
            />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="project_text"
              cursor={false}
            />
          </div>
        </div>
        <div className="box">
          <div className="project_inner_box">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.1.261072285.1721543277&semt=sph"
              alt=""
            />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="project_text"
              cursor={false}
            />
          </div>
        </div>
        <div className="box left">
          <div className="project_inner_box">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.1.261072285.1721543277&semt=sph"
              alt=""
            />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="project_text"
              cursor={false}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
