import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import energyAudit from '../assets/energyaudit.avif';
import solarCalculator from '../assets/solarCalculator.png';
import hvacEfficiency from '../assets/hvacEfficiency.png';
import lightingGuide from '../assets/lightingGuide.png';
import insulationTips from '../assets/insulationTips.png';
import energyStarProduct from '../assets/energyStarProduct.png';
import renewableEnergy from '../assets/renewableEnergy.png';
import greenBuilding from '../assets/greenBuilding.png';
import ecoFriendlyProducts from '../assets/ecoFriendlyProducts.png';

import TopPicks from '../assets/TopPicks.png';
import SmartThermostat from '../assets/SmartThermostat.png';
import SolarPanels from '../assets/SolarPanels.avif';
import { color } from 'chart.js/helpers';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyEfficiencyTools = () => {
  const [currentUsage, setCurrentUsage] = useState('');
  const [projectedUsage, setProjectedUsage] = useState('');
  const [energySavings, setEnergySavings] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming energy savings calculation: Energy Savings = Current Usage - Projected Usage
    const savings = parseFloat(currentUsage) - parseFloat(projectedUsage);
    setEnergySavings(savings);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#54BA9E',
    padding: '20px',
    minHeight: '100vh',
    textAlign: 'center',
    boxSizing: 'border-box'
  };

  const sectionStyle = {
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '40px'
  };

  const titleStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add a subtle shadow
    color: 'white', // Set text color to white
    fontSize: '3em', // Increase font size for better visibility
    fontWeight: 'bold', // Make the text bold
    padding: '10px', // Add some padding for spacing
    borderRadius: '5px', // Add a border-radius for rounded edges
    fontFamily: 'Poppins, sans-serif', // Use the Poppins font
  };

  const subtitleStyle = {
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add a subtle shadow

    fontSize: '1.2em',
    margin: '10px 0 20px 0'
  };

  const toolsContainerStyle = {
    backgroundColor:'#468585',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '15px',
  };

  const toolStyle = {
    backgroundColor: '#F1FAEE',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px', // Curved borders
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow
    flex: '1 1 30%',
    boxSizing: 'border-box',
    padding: '10px'
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '15px' // Curved borders for images
  };

  const toolTextStyle = {
    marginTop: '10px',
    fontSize: '1em',
    fontWeight: 'bold'
  };

  const calculatorToolStyle = {
    backgroundColor: '#F1FAEE',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px', // Curved borders
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow
    flex: '1 1 30%',
    boxSizing: 'border-box',
    padding: '10px'
  };

  const calculatorImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '10px',
    borderRadius: '15px' // Curved borders for images
  };

  const descriptionStyle = {
    fontSize: '0.9em',
    color: '#468585',
    textAlign: 'left'
  };

  const graphsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  };

  const graphStyle = {
    backgroundColor: '#F1FAEE',
    margin: '10px',
    padding: '20px',
    borderRadius: '15px', // Curved borders
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow
    flex: '1 1 45%',
    boxSizing: 'border-box',
    textAlign: 'left'
  };

  const buttonStyle = {
    margin: '10px',
    padding: '5px 10px',
    backgroundColor: '#457B9D',
    color: '#468585',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const tools = [
    { name: 'Energy Audit', imgSrc: energyAudit },
    { name: 'Solar Calculator', imgSrc: solarCalculator },
    { name: 'HVAC Efficiency', imgSrc: hvacEfficiency },
    { name: 'Lighting Guide', imgSrc: lightingGuide },
    { name: 'Insulation Tips', imgSrc: insulationTips },
    { name: 'Energy Star Product', imgSrc: energyStarProduct },
    { name: 'Renewable Energy', imgSrc: renewableEnergy },
    { name: 'Green Building', imgSrc: greenBuilding },
    { name: 'Eco-Friendly Products', imgSrc: ecoFriendlyProducts }
  ];

  const calculators = [
    { name: 'Top Picks', imgSrc: TopPicks, description: 'Explore the best energy-efficient products for your home.' },
    { name: 'Smart Thermostat', imgSrc: SmartThermostat, description: 'Learn about smart thermostats that help you save energy.' },
    { name: 'Solar Panels', imgSrc: SolarPanels, description: 'Find out how solar panels can reduce your energy bills.' }
  ];

  const graphData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Current Usage',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
      {
        label: 'Potential Savings',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  const graphData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Current Usage',
        data: [70, 50, 90, 80, 60, 40],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true,
      },
      {
        label: 'Potential Savings',
        data: [30, 40, 50, 20, 70, 30],
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <div style={titleStyle}>Energy Efficiency Tools</div>
        <div style={subtitleStyle}>
          Connecting you with renewable energy resources and community initiatives
        </div>
        <div style={toolsContainerStyle}>
          {tools.map((tool) => (
            <div key={tool.name} style={toolStyle}>
              <img src={tool.imgSrc} alt={tool.name} style={imageStyle} />
              <div style={toolTextStyle}>{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={titleStyle}>Energy Calculator</div>
        <form
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Current Usage"
            style={{ width: '300px', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
            value={currentUsage}
            onChange={(e) => setCurrentUsage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Projected Usage"
            style={{ width: '300px', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
            value={projectedUsage}
            onChange={(e) => setProjectedUsage(e.target.value)}
          />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#457B9D', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Calculate
          </button>
        </form>
        {energySavings !== null && (
          <div style={{ padding: '10px', backgroundColor: '#F1FAEE', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            Energy Savings: {energySavings.toFixed(2)}
          </div>
        )}
        <div style={toolsContainerStyle}>
          {calculators.map((calculator) => (
            <div key={calculator.name} style={calculatorToolStyle}>
              <img src={calculator.imgSrc} alt={calculator.name} style={calculatorImageStyle} />
              <div>
                <div style={toolTextStyle}>{calculator.name}</div>
                <div style={descriptionStyle}>{calculator.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={titleStyle}>Graphs and Visuals</div>
        <div style={graphsContainerStyle}>
          <div style={graphStyle}>
            <div style={{ marginBottom: '10px' }}>
              Monthly Energy Consumption
              
            </div>
            <Line data={graphData1} />
          </div>
          <div style={graphStyle}>
            <div style={{ marginBottom: '10px' }}>
              Monthly Energy Savings
            
            </div>
            <Line data={graphData2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyEfficiencyTools;
