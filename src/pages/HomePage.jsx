import React, { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokImg from '../assets/imagenes/pok.png';
import "./HomePage.css";


const HomePage = () => {
  const inputName = useRef();

  const dispatch = useDispatch();

 const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim())); // Usando dispatch para ejecutar la acción
  navigate("/pokedex")
};

  return (
<section className="content">
  <img src={pokImg} alt="Pokemon" className='Poke'/>
  <h2 className="HiTrainer">Hi Trainer</h2>
  <p className='ToStart'>To start, please give me your trainer name</p>
  <form onSubmit={handleSubmit}>
    <input ref={inputName} type="text" />
    <button className='catch'>Catch them all</button>
  </form>
</section>

        
      
   
  );
};

export default HomePage;
