import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  setupIonicReact, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonFooter, 
  IonText, 
  IonContent, } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Tab from './pages/tab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Router>
          <IonHeader style={{
            background: "beige",
            }}>
            <IonToolbar>
              <IonTitle style={{
                color: "lightBlue"
              }}>
                Hello, people!
              </IonTitle>
            </IonToolbar>
          </IonHeader>
  <IonContent>
      <Tab/>
  </IonContent>
   {/* <IonFooter 
        style={{
          background: "black", 
          padding: "20px"
          }}>
          <IonToolbar>
          <IonText 
          style={{color: "snow", 
          // text-align:"center"
          }}>Footer
          </IonText>
          </IonToolbar>
        </IonFooter> */}
        </Router>  
  </IonApp>
);

export default App;
