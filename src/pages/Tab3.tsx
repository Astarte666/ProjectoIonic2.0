import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonRadio, IonRadioGroup } from '@ionic/react';
import { useState } from 'react';

const Tab3: React.FC = () => {
  const respuestasCorrectas = {
    q1: 'Aljibe',
    q2: 'Tomate',
    q3: 'Al costado'
  };

  const [respuestas, setRespuestas] = useState<{ [key: string]: string }>({});
  const [resultado, setResultado] = useState<string>('');

  const chequear = () => {
    let puntaje = 0;
    const totalPreguntas = Object.keys(respuestasCorrectas).length;

    for (const pregunta in respuestasCorrectas) {
      if (respuestas[pregunta] === respuestasCorrectas[pregunta]) {
        puntaje++;
      }
    }

    setResultado(`Obtuviste ${puntaje} de ${totalPreguntas} preguntas correctas.`);
  };

  const actualizarRespuesta = (pregunta: string, valor: string) => {
    setRespuestas({ ...respuestas, [pregunta]: valor });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3 - Cuestionario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard style={{
          backgroundColor: '#ffdead',
          border: '3px dashed #d45f97',
          borderRadius: '15px',
          padding: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <IonCardHeader>
            <IonCardTitle style={{
              color: '#d45f97',
              fontSize: '28px'
            }}>Cuentito:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#8b4513'
            }}>
              En el centro del jardín yace un aljibe, cubierto de enredaderas que parecen habérselo tragado. En el fondo está la pequeña huerta que mis abuelos cuidaron durante años y de la que provenían los tomates que acompañaban cada comida que preparaba mi abuela. Al costado está la hamaca, casi intacta, con la que jugábamos cuando éramos niños.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Pregunta 1 */}
        <IonCard>
          <IonCardContent>
            <IonRadioGroup
              value={respuestas.q1}
              onIonChange={(e) => actualizarRespuesta('q1', e.detail.value)}
            >
              <IonItem>
                <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>¿Qué hay en el centro del jardín?</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Aljibe" />
                <IonLabel>Aljibe</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Altar" />
                <IonLabel>Altar</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Yacimiento petrolifero" />
                <IonLabel>Yacimiento petrolífero</IonLabel>
              </IonItem>
            </IonRadioGroup>
          </IonCardContent>
        </IonCard>

        {/* Pregunta 2 */}
        <IonCard>
          <IonCardContent>
            <IonRadioGroup
              value={respuestas.q2}
              onIonChange={(e) => actualizarRespuesta('q2', e.detail.value)}
            >
              <IonItem>
                <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>¿Qué plantan los abuelos en la huerta?</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Calabaza" />
                <IonLabel>Calabaza</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Tomate" />
                <IonLabel>Tomate</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Maracuyá" />
                <IonLabel>Maracuyá</IonLabel>
              </IonItem>
            </IonRadioGroup>
          </IonCardContent>
        </IonCard>

        {/* Pregunta 3 */}
        <IonCard>
          <IonCardContent>
            <IonRadioGroup
              value={respuestas.q3}
              onIonChange={(e) => actualizarRespuesta('q3', e.detail.value)}
            >
              <IonItem>
                <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>¿Dónde se encuentra la hamaca?</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Al frente" />
                <IonLabel>Al frente</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Detrás" />
                <IonLabel>Detrás</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="Al costado" />
                <IonLabel>Al costado</IonLabel>
              </IonItem>
            </IonRadioGroup>
          </IonCardContent>
        </IonCard>

        <IonButton
          expand="block"
          onClick={chequear}
          style={{
            backgroundColor: '#d45f97',
            color: 'white',
            borderRadius: '10px',
            fontSize: '18px',
            boxShadow: '0 4px #a44c7a',
            transition: 'background-color 0.3s ease'
          }}
        >
          Enviar
        </IonButton>

        {resultado && (
          <IonCard style={{
            backgroundColor: '#f4a460',
            border: '2px solid #d45f97',
            borderRadius: '10px',
            marginTop: '20px',
            padding: '10px'
          }}>
            <IonCardContent>
              <p style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#2f5a9e',
                textAlign: 'center'
              }}>{resultado}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
