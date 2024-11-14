import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [showCompleteSection, setShowCompleteSection] = useState(false);
  const [showEndingSection, setShowEndingSection] = useState(false);
  const [completionResult, setCompletionResult] = useState('');
  const [score, setScore] = useState('');
  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const startGame = () => {
    const introSection = document.querySelector('.intro-section');
    const rememberText = document.getElementById('remember-text');
    
    rememberText!.style.transition = "opacity 0.5s";
    rememberText!.style.opacity = "0"; 
    introSection!.style.transition = "opacity 0.5s"; 
    introSection!.style.opacity = "0"; 

    setTimeout(() => {
      setShowCompleteSection(true);
    }, 500);
  };

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const checkCompletion = () => {
    const correctWords = ["centro", "enredaderas", "huerta", "tomates", "hamaca"];
    let correctCount = 0;

    correctWords.forEach((word, index) => {
      const inputElement = document.getElementById(`input${index + 1}`) as HTMLInputElement;
      if (inputValues[index].toLowerCase() === word.toLowerCase()) {
        correctCount++;
        inputElement.style.borderColor = "green";
      } else {
        inputElement.style.borderColor = "red";
      }
      inputElement.disabled = true;
    });

    setCompletionResult(correctCount === correctWords.length ? "Genial! Completaste todo correctamente." : "Algunas palabras son incorrectas u.u");
    setScore(`Puntos: ${correctCount} / ${correctWords.length}`);
    document.getElementById('end-btn')!.style.display = 'block';
  };

  const showEnding = () => {
    setShowCompleteSection(false);

    setTimeout(() => {
      setShowEndingSection(true);
    }, 2000);
  };

  const retryGame = () => {
    setShowEndingSection(false);
    setShowCompleteSection(false);
    setCompletionResult('');
    setScore('');
    setInputValues(Array(5).fill(''));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Juego del Jardín</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <h1>Jueguito del Cuentito</h1>
          {!showCompleteSection && !showEndingSection && (
            <div className="intro-section">
              <h2 id="remember-text">Recuerda el siguiente cuento...</h2>
              <p id="intro-text">
                En el centro del Jardín, yace un aljibe, cubierto de enredaderas que parecen habérselo tragado. 
                En el fondo está la pequeña huerta que mis abuelos cuidaron durante años y de la que provenían 
                los tomates que acompañaban cada comida que preparaba mi abuela. Al costado está la hamaca, 
                casi intacta, con la que jugábamos cuando éramos niños.
              </p>
              <button id="start-btn" onClick={startGame}>Comenzar</button>
            </div>
          )}
          
          {showCompleteSection && (
            <div className="complete-section">
              <h2>Completa el cuento</h2>
              <p id="complete-text">
                En el <input type="text" id="input1" placeholder="" value={inputValues[0]} onChange={(e) => handleInputChange(0, e.target.value)} /> 
                del Jardín, yace un aljibe, cubierto de <input type="text" id="input2" placeholder="" value={inputValues[1]} onChange={(e) => handleInputChange(1, e.target.value)} /> 
                que parecen habérselo tragado. En el fondo está la pequeña <input type="text" id="input3" placeholder="" value={inputValues[2]} onChange={(e) => handleInputChange(2, e.target.value)} /> 
                que mis abuelos cuidaron durante años y de la que provenían los <input type="text" id="input4" placeholder="" value={inputValues[3]} onChange={(e) => handleInputChange(3, e.target.value)} /> 
                que acompañaban cada comida que preparaba mi abuela. Al costado está la <input type="text" id="input5" placeholder="" value={inputValues[4]} onChange={(e) => handleInputChange(4, e.target.value)} />, 
                casi intacta, con la que jugábamos cuando éramos niños.
              </p>
              <button onClick={checkCompletion}>Comprobar</button>
              <p id="completion-result">{completionResult}</p>
              <p id="score">{score}</p>
              <button id="end-btn" style={{ display: 'none' }} onClick={showEnding}>Finalizar</button>
            </div>
          )}
          
          {showEndingSection && (
            <div className="ending-section">
              <h2 id="thanks-message">Gracias por Jugar!</h2>
              <p id="goodbye-text">Espero que hayas disfrutado de este pequeño juego :)</p>
              <button onClick={retryGame}>Reintentar</button>
              <button onClick={() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>Salir</button>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;