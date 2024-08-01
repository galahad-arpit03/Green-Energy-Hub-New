// src/components/HomePage.js

import React from "react";
import "./HomePage.css";
import treeImage from "../assets/tree.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const HomePage = () => {
  return (
    <div>
       <header
        className="hero bg text-white text-center py-5"
        style={{ background: "#54BA9E" }}
      >
        <Container>
          <h1 className="display-4">Empowering  a  Sustainable  Future</h1>
          <p className="lead">
          Connecting you with renewable energy  resources and community initiatives          </p>
        </Container>
      </header>
      
      <main className="main1">
        <div className="c1">
          <img src={treeImage} alt="tree" />
          <p>
            Empowering a sustainable future involves integrating eco-friendly
            practices and technologies into everyday life and industries. By
            embracing renewable energy sources, reducing waste, and promoting
            green innovations, we can mitigate environmental impact and foster a
            healthier planet. Education and collaboration are key, as they
            enable communities to adopt sustainable habits and support policies
            that drive meaningful change. Together, we can build a resilient and
            sustainable future for generations to come.
          </p>
        </div>

        <div className="p1">
          <h2> Renewable Energy Directory</h2>
          <p>
            A Renewable Energy Directory is a comprehensive, centralized
            database that lists various renewable energy resources,
            technologies, companies, projects, and experts. This directory
            serves as a valuable tool for individuals, businesses, and
            policymakers interested in the renewable energy sector. It can
            include information on solar, wind, hydro, geothermal, and biomass
            energy sources, along with details on the latest innovations,
            funding opportunities, and regulatory guidelines. By providing easy
            access to crucial information, a Renewable Energy Directory helps
            promote the adoption and development of clean energy solutions,
            contributing to a more sustainable and eco-friendly future.
          </p>
          <span>
            {" "}
            <Link className="nav-link" to="/renewable-energy-directory">
              Know More &rarr;
            </Link>
          </span>
        </div>
        <div className="p1">
          <h2> Renewable Energy </h2>
          <p>
            Energy efficiency refers to using less energy to perform the same
            task, thereby reducing energy waste. This concept is crucial for
            sustainable development as it helps lower energy consumption, reduce
            greenhouse gas emissions, and decrease energy costs. Energy
            efficiency can be achieved through various means, including
            upgrading to energy-efficient appliances, improving insulation in
            buildings, optimizing industrial processes, and adopting smart
            energy management systems. Enhancing energy efficiency not only
            conserves resources but also contributes to a healthier environment
            and a more sustainable future.
          </p>
          <span>
            <Link className="nav-link" to="/renewable-energy">
              Know More &rarr;
            </Link>
          </span>
        </div>
        <div className="p1">
          <h2> Educational Resources</h2>
          <p>
            Educational resources are materials or tools used to support
            teaching and learning. They come in various formats, including
            textbooks, online courses, videos, interactive simulations, and
            educational games. These resources aim to enhance understanding,
            provide practical examples, and engage learners in active learning.
            They are essential for students, educators, and lifelong learners,
            offering opportunities to gain knowledge, develop skills, and stay
            updated with the latest advancements in various fields. Whether
            through formal education or self-directed learning, educational
            resources play a crucial role in personal and professional
            development.
          </p>

          <span>
            <Link className="nav-link" to="/educational-resources">
              Know More &rarr;
            </Link>
          </span>
        </div>
        <div className="p1">
          <h2> Community Projects</h2>
          <p>
            Community projects are collaborative efforts where individuals come
            together to work on initiatives that benefit their local or wider
            community. These projects can address a wide range of issues, from
            environmental sustainability and public health to education and
            social services. By leveraging the skills and resources of
            volunteers, community projects often aim to create positive social
            change, enhance community well-being, and foster a sense of
            collective responsibility. They not only solve immediate problems
            but also build stronger, more connected communities.
          </p>
          <span>
            <Link className="nav-link" to="/community-projects">
              Know More &rarr;
            </Link>
          </span>
        </div>
        <div className="p1">
          <h2> Energy Efficiency</h2>
          <p>
            Certainly! Here's a more detailed paragraph on energy efficiency:
            Energy efficiency refers to the practice of using less energy to
            perform the same tasks, thereby reducing energy waste and maximizing
            the utility of available resources. This approach is crucial for
            both environmental sustainability and economic viability. By
            adopting energy-efficient technologies and practices, such as LED
            lighting, high-efficiency heating and cooling systems, and
            energy-efficient appliances, individuals and organizations can
            significantly decrease their energy consumption. In buildings,
            improved insulation, energy-efficient windows, and smart thermostats
            can dramatically lower heating and cooling costs. Industrial
            processes can also be optimized to use energy more effectively,
            reducing operational costs and enhancing competitiveness.
          </p>
          <span>
            <Link className="nav-link" to="/community-projects">
              Know More &rarr;
            </Link>
          </span>
        </div>

        <div className="p1" id="p1">
          <div className="s1">
            <a
              href="https://greenhub.energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Know More &rarr;
            </a>
          </div>{" "}
          <div className="s1">
            <a
              href="https://en.wikipedia.org/wiki/Green_Energy_Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
