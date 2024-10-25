import React, { useState } from "react";
import { Chart as ChartJS, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./Summary.css";
import information from "../assets/information.png";
import arrowupright from "../assets/arrowupright.png";
import arrowdownright from "../assets/arrowdownright.png";
import example from "../assets/example.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import nexticon from "../assets/nexticon.png";
import backicon from "../assets/backicon.png";
import downicon from "../assets/downicon.png";
import download from "../assets/download.png";
import dots from "../assets/dots.png";

const Summary = () => {
  const slides = [
    {
      img: slide1,
      h6: "Latest News and Updates",
      p: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      img: slide2,
      h6: "Latest News and Updates",
      p: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      img: slide3,
      h6: "Latest News and Updates",
      p: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
  ];

  const [eachSlide, setEachSlide] = useState(0);

  const nextSlide = () => {
    setEachSlide(eachSlide === slides.length - 1 ? 0 : eachSlide + 1);
  };

  const prevSlide = () => {
    setEachSlide(eachSlide === 0 ? slides.length - 1 : eachSlide - 1);
  };

  return (
    <div className="summary">
      <div className="welcome">Welcome! here's your summary</div>
      <div className="stats">
        <div className="stat">
          <div className="label">
            Total events <img src={information} />
          </div>
          <div className="value">
            100,000 <img src={arrowupright} />{" "}
            <text className="percentage positive">+5.0%</text>
          </div>
        </div>
        <div className="stat">
          <div className="label">
            Active Speakers <img src={information} />
          </div>
          <div className="value">
            25 <img src={arrowdownright} />
            <text className="percentage negative"> -5.0%</text>
          </div>
        </div>
        <div className="stat">
          <div className="label">
            Total Registrations <img src={information} />
          </div>
          <div className="value">
            300 <img src={arrowupright} />{" "}
            <text className="percentage positive">+5.0%</text>
          </div>
        </div>
        <div className="stat">
          <div className="label">
            Total Revenue <img src={information} />
          </div>
          <div className="value">
            $500,000 <img src={arrowupright} />{" "}
            <text className="percentage positive">+5.0%</text>
          </div>
        </div>
      </div>
      <text className="writeup">Event Registrations per month</text>
      <div className="summarytop">
        <div className="chart">
          <Bar
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "",
                  data: [
                    670, 930, 770, 430, 1000, 570, 860, 360, 850, 670, 960, 610,
                  ],
                  backgroundColor: "#8576FF",
                },
              ],
            }}
          />
        </div>
        <div className="carousel">
          <img src={backicon} className="backbtn" onClick={prevSlide} />
          <img src={nexticon} className="nextbtn" onClick={nextSlide} />
          <div className="slider">
            {slides.map((slide, idx) => {
              return (
                <div>
                  <div>
                    <img
                      src={slide.img}
                      key={idx}
                      className={
                        eachSlide === idx ? "slide" : "slide hiddenslide"
                      }
                    ></img>
                  </div>
                  <div
                    className={
                      eachSlide === idx ? "caption" : "caption hiddencaptions"
                    }
                  >
                    <h6 className="header">{slide.h6}</h6>
                    <p className="paragraph">{slide.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="caption"></div>
          <span className="indicators">
            {slides.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setEachSlide(idx)}
                  className={
                    eachSlide === idx
                      ? "indicator"
                      : "indicator inactiveindicator"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
      <div className="history">
        <text className="writeup">Events History</text>
        <div className="tablemodule">
          <div className="toolbar">
            <div className="left">
              <input type="search" placeholder="Search" className="search" />
              <div className="dropdown">
                Date <img src={downicon} />
              </div>
              <div className="dropdown">
                Status <img src={downicon} />
              </div>
              <div className="dropdown">
                Name <img src={downicon} />
              </div>
              <text className="writeup">Displaying 100 results</text>
            </div>
            <div className="right">
              <text className="writeup">Sort</text>
              <div className="dropdown">
                Most Recent
                <img src={downicon} />
              </div>
              <div className="dropdown dots">
                <img src={dots} />
              </div>
              <div className="dropdown">
                <img src={download} />
                Export
              </div>
            </div>
          </div>
          <div className="table">
            <div className="column">
              <div className="cell th">Event Name</div>
              <div className="cell">Cloud Innovation Summit</div>
              <div className="cell">Blockchain Revolution Conference</div>
              <div className="cell">AI in Healthcare Symposium</div>
              <div className="cell">Future of Fintech Forum</div>
              <div className="cell">Data Analytics in Business</div>
              <div className="cell">Sustainable Energy Expo</div>
              <div className="cell">Web3 Interfaces Workshop</div>
              <div className="cell">Cybersecurity for Startups</div>
              <div className="cell">Smart Cities Forum</div>
              <div className="cell">Tech Safari Mixer</div>
            </div>
            <div className="column">
              <div className="cell th">Date</div>
              <div className="cell">2024-10-15</div>
              <div className="cell">2024-11-05</div>
              <div className="cell">2024-12-01</div>
              <div className="cell">2024-10-25</div>
              <div className="cell">2024-11-12</div>
              <div className="cell">2024-09-28</div>
              <div className="cell">2024-10-10</div>
              <div className="cell">2024-11-19</div>
              <div className="cell">2024-10-18</div>
              <div className="cell">2024-09-30</div>
            </div>
            <div className="column">
              <div className="cell th">Speaker</div>
              <div className="cell">Jane Doe</div>
              <div className="cell">Dr. Peter Smith</div>
              <div className="cell">Sr. Aisha Malik</div>
              <div className="cell">John Lee</div>
              <div className="cell">Rachael More</div>
              <div className="cell">Prof. Alan Green</div>
              <div className="cell">Kevin Adams</div>
              <div className="cell">Emily Zhang</div>
              <div className="cell">Dr. Maria Hernandez</div>
              <div className="cell">Guest Panel</div>
            </div>
            <div className="column">
              <div className="cell th">Status</div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category blue">
                  <div className="dot bluedot"></div>In Progress
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category blue">
                  <div className="dot bluedot"></div>In Progress
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category green">
                  <div className="dot greendot"></div>Completed
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category blue">
                  <div className="dot bluedot"></div>In Progress
                </div>
              </div>
              <div className="cell">
                {" "}
                <div className="category blue">
                  <div className="dot bluedot"></div>In Progress
                </div>
              </div>
            </div>
          </div>
          <div className="modulebottom">
            <div className="pagination">
              <div className="prev">
                <img src={backicon} />
              </div>
              <div className="numbers one">1</div>
              <div className="numbers writeup">2</div>
              <div className=" writeup">3</div>
              <div className="next">
                <img src={nexticon} />
              </div>
            </div>
            <div className="rows">
              Show:
              <div className="dropdown">
                10 Rows
                <img src={downicon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
