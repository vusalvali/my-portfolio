import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import drclean from "../assets/img/drclean.jpg";
// import drclean from "../assets/img/drclean.jpg";
// import drclean from '../assets/img/drclean.jpg';

import pascal from "../assets/img/pascal.jpg";
import multimedia from "../assets/img/multimedia.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import epin from "../assets/img/epin.jpg";
import expense from "../assets/img/expense.jpg";
import socialize from "../assets/img/socialize.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import matbaa from "../assets/img/matbaa.jpg";
import clothing from "../assets/img/clothing.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pascal,
      link: "https://drclean.az/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pascal,
      link: "https://pascal.az/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: multimedia,
      link: "https://multimedia.az/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: epin,
      link: "https://epin.az/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: socialize,
      link: "https://socialize-vusal-valiyev.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: expense,
      link: "https://expense-tracker-vusal-valiyev.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: portfolio,
      link: "https://portfolio-vusal-valiyev.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: matbaa,
      link: "https://matbaa.netlify.app/+",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: clothing,
      link: "https://vusal-clothing.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Commercials</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">In any case🙂</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return index > 5 ? null : (
                              <ProjectCard
                                key={index}
                                // {...project}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return index <= 5 ? null : (
                              <ProjectCard
                                key={index}
                                // {...project}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                              />
                            );
                          })}
                          {/* {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                // {...project}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                              />
                            );
                          })} */}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
