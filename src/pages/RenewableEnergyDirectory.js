// src/pages/RenewableEnergyDirectory.js
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


const RenewableEnergyDirectory = () => {
  return (
    <div>
          <header
        className="hero bg text-white text-center py-5"
        style={{ background: "#54BA9E" }}
      >
        <Container>
          <h1 className="display-4">Renewable Energy for a Greener Future</h1>
          <p className="lead">
          Renewable energy sources like solar, wind, and hydro provide clean and sustainable power, reducing our reliance on fossil fuels and cutting greenhouse gas emissions. By harnessing these resources, we promote environmental health, drive innovation, and create green jobs. Embracing renewable energy is key to a sustainable future and combating climate change.
          </p>
        </Container>
      </header>
      <main className='main1'>
        <div className='p1'>
          <h2>Solar Energy</h2>
          <p>
            Solar energy is a renewable and sustainable energy source that harnesses sunlight to generate electricity and heat. It is considered one of the cleanest energy sources, as it produces no greenhouse gas emissions during operation. There are two primary types of solar energy technologies: photovoltaic (PV) systems and solar thermal systems. PV systems use solar panels made of semiconductor materials, such as silicon, to convert sunlight directly into electricity. These panels are commonly used in residential, commercial, and industrial applications. On the other hand, solar thermal systems capture sunlight to heat a fluid, which then generates steam to drive a turbine and produce electricity. Solar energy offers numerous benefits, including reducing reliance on fossil fuels, decreasing electricity bills, and minimizing environmental impact. However, challenges such as the initial cost of installation and the need for efficient energy storage systems remain. As technology advances and costs decrease, solar energy is expected to play a significant role in the global transition to renewable energy.
          </p>
          <span>
            <Link className="nav-link" to="https://en.wikipedia.org/wiki/Solar_energy">Know More &rarr;</Link>
          </span>
        </div>
        <div className='p1'>
          <h2>Wind Power</h2>
          <p>
            Wind power is a renewable energy source that harnesses the kinetic energy of the wind to generate electricity. It is achieved using wind turbines, which have large blades that rotate when the wind blows. The movement of these blades turns a rotor connected to a generator, converting wind energy into electrical energy. Wind power is one of the fastest-growing energy sources globally due to its environmental benefits and decreasing costs. It produces no greenhouse gas emissions during operation, making it a clean alternative to fossil fuels. Wind farms can be installed on land (onshore) or in bodies of water (offshore), with offshore wind farms benefiting from stronger and more consistent winds. The rapid advancements in technology have made wind turbines more efficient and affordable, contributing to the increased adoption of wind power worldwide. Despite challenges such as variability in wind speeds and the need for large areas for wind farms, wind power remains a crucial component of the transition to sustainable energy systems, helping reduce reliance on fossil fuels and combat climate change.
          </p>
          <span>
            <Link className="nav-link" to="https://en.wikipedia.org/wiki/Wind_power">Know More &rarr;</Link>
          </span>
        </div>
        <div className='p1'>
          <h2>Energy Conservation</h2>
          <p>
            Energy conservation refers to the practice of reducing energy consumption through efficient use and management of energy resources. It involves adopting measures that minimize energy waste and promote sustainable energy usage, which can significantly contribute to environmental protection and cost savings. By conserving energy, individuals and organizations can lower their energy bills, reduce greenhouse gas emissions, and decrease reliance on non-renewable energy sources like fossil fuels. Energy conservation can be achieved through various strategies, such as improving insulation in buildings, using energy-efficient appliances, implementing smart energy management systems, and encouraging behavioral changes like turning off lights and unplugging devices when not in use. On a larger scale, governments and industries can support energy conservation by investing in renewable energy technologies, enforcing stricter energy efficiency standards, and raising public awareness about the benefits of energy conservation. Overall, energy conservation is a crucial element in addressing global energy challenges and promoting a more sustainable and resilient energy future.
          </p>
          <span>
            <Link className="nav-link" to="https://en.wikipedia.org/wiki/Energy_conservation">Know More &rarr;</Link>
          </span>
        </div>

        <div className='oo'>
          <h2>Featured Article</h2>
        </div>
        <div className='p1' id="p1">
          <div className="s1">
            <a href="https://cbseacademic.in/guides/essay/energy-conservation/#:~:text=We%20can%20all%20do%20our,and%20the%20generations%20to%20come." target="_blank" rel="noopener noreferrer" className='nav-link'>
              Energy Conservation &rarr;
            </a>
          </div>
          <div className="s1">
            <a href="https://education.nationalgeographic.org/resource/solar-energy/" target="_blank" rel="noopener noreferrer" className='nav-link'>
              Solar Power &rarr;
            </a>
          </div>
          <div className="s1">
            <a href="https://education.nationalgeographic.org/resource/wind-energy/" target="_blank" rel="noopener noreferrer" className='nav-link'>
              Wind Energy &rarr;
            </a>
          </div>
          <div className="s1">
            <a href="https://education.nationalgeographic.org/resource/hydroelectric-energy/" target="_blank" rel="noopener noreferrer" className='nav-link'>
              Hydro Power &rarr;
            </a>
          </div>
        </div>

        <div className='video-section'>
  <h2>Green Energy Videos</h2>
  <div className='video-row'>
    <div className='video-item'>
      <iframe
        src="https://www.youtube.com/embed/RnvCbquYeIM?si=LZ10OJHQuSMzixp_"
        title="How Renewable Energy Works"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className='video-item'>
      <iframe
        src="https://www.youtube.com/embed/1kUE0BZtTRc"
        title="Understanding Solar Power"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  <div className='video-row'>
    <div className='video-item'>
      <iframe
        src="https://www.youtube.com/embed/T4xKThjcKaE?si=gss-bmDCreYMByIm"
        title="The Basics of Wind Energy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className='video-item'>
      <iframe
        src="https://www.youtube.com/embed/UVf2Yw7uFoE?si=rTufVOfDGFcOebUq"
        title="Geothermal Energy: Harnessing Earth's Heat"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>


      </main>
    </div>
  );
};

export default RenewableEnergyDirectory;
