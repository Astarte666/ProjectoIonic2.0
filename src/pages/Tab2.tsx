import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  useEffect(() => {
    // CONSTANTES
    const startButton = document.querySelector('.startButton') as HTMLElement;
    const textContainer = document.querySelector('.text-container') as HTMLElement;
    const textContent = document.querySelector('.text-content') as HTMLElement;
    const questions = document.querySelector('.questions') as HTMLElement;
    const nextButton = document.getElementById('nextButton') as HTMLElement;
    const options = document.querySelectorAll('.grid-item') as NodeListOf<HTMLElement>;

    let sectionAdvance = 0;
    let correctAnswers = 0;

    // INICIO
    startButton.addEventListener('click', () => {
      textContainer.style.width = "100vw";
      textContainer.style.height = "100vh";
      textContainer.style.border = "0px";
      textContainer.style.borderRadius = "0px";

      textContent.style.transform = "scale(0)";
      startButton.style.transform = "scale(0)";
      questions.style.transform = "scale(1)";
    });

    // AVANCE
    nextButton.addEventListener('click', () => {
      sectionAdvance++;

      options.forEach(item => {
        if (item !== nextButton) {
          item.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
          item.classList.remove("option-correct", "option-incorrect");
        }
      });

      switch (sectionAdvance) {
        case 1:
          options[0].innerHTML = "¿Qué plantaban en la huerta los abuelos?";
          options[1].innerHTML = "Zanahorias";
          options[2].innerHTML = "Papas";
          options[3].innerHTML = "Calabazas";
          options[4].innerHTML = "Tomates";

          options[1].classList.add("option-incorrect");
          options[2].classList.add("option-incorrect");
          options[3].classList.add("option-incorrect");
          options[4].classList.add("option-correct");
          break;

        case 2:
          options[0].innerHTML = "¿Qué había al costado de la huerta?";
          options[1].innerHTML = "Una hamaca";
          options[2].innerHTML = "Una casa";
          options[3].innerHTML = "Un tobogán";
          options[4].innerHTML = "Una bicicleta";

          options[1].classList.add("option-correct");
          options[2].classList.add("option-incorrect");
          options[3].classList.add("option-incorrect");
          options[4].classList.add("option-incorrect");
          break;

        case 3:
          options[0].innerHTML = `<span id="scoreCounter">${correctAnswers}/3 respuestas correctas</span>`;

          options[0].style.gridColumn = "1 / 3";
          options[1].style.gridColumn = "1 / 3";

          options[1].style.display = "none";
          options[2].style.display = "none";
          options[3].style.display = "none";
          options[4].style.display = "none";
          break;
      }

      addOptionEventListeners();
    });

    function addOptionEventListeners() {
      document.querySelectorAll('.option-correct').forEach(option => {
        option.addEventListener('click', () => {
          if (!option.classList.contains('option-incorrect')) {
            (option as HTMLElement).style.background = "linear-gradient(to top, rgb(87, 168, 32), rgb(87, 168, 32))";
            correctAnswers++;
          }
        });
      });
    
      document.querySelectorAll('.option-incorrect').forEach(option => {
        option.addEventListener('click', () => {
          (option as HTMLElement).style.background = "linear-gradient(to top, rgb(168, 32, 32), rgb(168, 32, 32))";
        });
      });
    }    

    addOptionEventListeners();

    return () => {
      startButton.removeEventListener('click', () => {});
      nextButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <img className="tale" src="images/little-tale.webp" width="450px" alt="" />
          <section className="text">
            <div className="text-container">
              <p className="text-title">¡Recuerda!</p>
              <p className="text-content">
                    <span>En</span> <span>el</span> <span>centro</span> <span>del</span> <span>Jardín,</span> <span>yace</span> <span>un</span> <span>aljibe,</span> <span>cubierto</span> <span>de</span> <span>enredaderas</span> <span>que</span> <span>parecen</span> <span>habérselo</span> <span>tragado.</span><br/>
                    <span>En</span> <span>el</span> <span>fondo</span> <span>está</span> <span>la</span> <span>pequeña</span> <span>huerta</span> <span>que</span> <span>mis</span> <span>abuelos</span> <span>cuidaron</span> <span>durante</span> <span>años</span> <span>y</span> <span>de</span> <span>la</span> <span>que</span> <span>provenían</span> <span>los</span> <span>tomates</span> <span>que</span> <span>acompañaban</span> <span>cada</span> <span>comida</span> <span>que</span> <span>preparaba</span> <span>mi</span> <span>abuela.</span><br/>
                    <span>Al</span> <span>costado</span> <span>está</span> <span>la</span> <span>hamaca,</span> <span>casi</span> <span>intacta,</span> <span>con</span> <span>la</span> <span>que</span> <span>jugábamos</span> <span>cuando</span> <span>éramos</span> <span>niños.</span>
                </p>
              <p className="startButton">¡Comenzar!</p>
            </div>
          </section>
          <section className="questions">
            <article className="question1">
              <div className="grid-container">
                <div className="grid-item item1">¿Qué yace en el centro del jardín?</div>
                <div className="grid-item option-incorrect">Un árbol</div>
                <div className="grid-item option-correct">Un aljibe</div>
                <div className="grid-item option-incorrect">Un duende</div>
                <div className="grid-item option-incorrect">Un galpón</div>
                <div className="grid-item item1 no-background-change" id="nextButton">Siguiente</div>
              </div>
            </article>
          </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
