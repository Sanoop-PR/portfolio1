import React from "react";
import "./work.css";
import { TypeAnimation } from "react-type-animation";
 
function Work() {
  return (
    <div id="work">
      <section className="work_container">
        <h1>Work Experience</h1>
        <div className="box_container">
          <div className="box">
            <div className="inner_box_header">
              <div>
                <h2>work</h2>
                <h3>position</h3>
              </div>
              <div className="year">2022-2023</div>
            </div>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="para"
              cursor={false}
            />
          </div>
          <div className="box left">
            <div className="inner_box_header">
              <div>
                <h2>work</h2>
                <h3>position</h3>
              </div>
              <div className="year">2022-2023</div>
            </div>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="para"
              cursor={false}
            />
          </div>
          <div className="box">
            <div className="inner_box_header">
              <div>
                <h2>work</h2>
                <h3>position</h3>
              </div>
              <div className="year">2022-2023</div>
            </div>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="para"
              cursor={false}
            />
          </div>
          <div className="box left">
            <div className="inner_box_header">
              <div>
                <h2>work</h2>
                <h3>position</h3>
              </div>
              <div className="year">2022-2023</div>
            </div>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ,voluptate dignissimos asperiores quas ducimus culpa hic repellat, possimus, voluptatum dolorum pariatur nesciunt quaerat consectetur doloribus reprehenderit veritatis velit vel ut?",
              ]}
              speed={80}
              wrapper="p"
              className="para"
              cursor={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
