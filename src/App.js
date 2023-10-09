import { useRef, useState } from 'react';
import './App.css';


function BMICalculator() {
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState(null);

  const calculateBMI = () => {
    const heightInCm = parseFloat(heightRef.current.value);
    const weightInKg = parseFloat(weightRef.current.value);

    if (!isNaN(heightInCm) && !isNaN(weightInKg)) {
      const heightInM = heightInCm / 100; // แปลงเป็นเมตร
      const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
      setBMI(bmiValue);

      // กำหนดเกณฑ์ BMI
      if (bmiValue < 18.5) {
        setBMICategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBMICategory('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obese');
      }
    } else {
      setBMI(null);
      setBMICategory(null);
    }
  };

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>
      <div className='input-container'>
        <label>Height (cm):</label>
        <input type="number" step="0.01" ref={heightRef} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="number" step="0.01" ref={weightRef} />
      </div>
      <button  onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && <p>Your BMI is: {bmi}</p>}
      {bmiCategory !== null && <p>BMI Category: {bmiCategory}</p>}
    </div>
  );
}

export default BMICalculator;

