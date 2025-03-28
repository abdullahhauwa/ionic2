import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonFooter, 
  IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Form from './form';
import { colorFill } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage style={{background: "beige"}}>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent> */}
      <IonContent style={{
        // background: "hotPink",
      }}>
        <IonTitle style={{ 
          texAlign: "center", 
          padding: "40px",
          paddingTop: "60px",
          paddingLeft: "90px",
          fontFamily: "roboto",
          margin: "auto",
          fontSize: "30px",
          color: 'hotPink',
          marginTop: "80px" }}>
          Welcome to MY SPACE
        </IonTitle>
      </IonContent>
      {/* <IonFooter 
      style={{
        background: "black", 
        padding: "20px"
        // box-shadow: "0px 0px 10px 0px black",
        }}>
        <IonText 
        style={{color: "snow", 
        // text-align:"center"
        }}>Footer
        </IonText>
      </IonFooter> */}
    </IonPage>
  );
};

export default Home;
