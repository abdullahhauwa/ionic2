// import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
// import { home, documentText } from 'ionicons/icons';
// import { Route } from 'react-router-dom';
// import HomePage from './Home';
// import FormPage from './form';

// const Tab: React.FC = () => {
//     return (
//         <IonTabs>
//             <IonRouterOutlet>
//                 <Route exact path="/home" component={HomePage} />
//                 <Route exact path="/form" component={FormPage} />
//             </IonRouterOutlet>
//             <IonTabBar slot="bottom">
//                 <IonTabButton tab="home" href="/home">
//                     <IonIcon icon={home} />
//                     <IonLabel>Home</IonLabel>
//                 </IonTabButton>
//                 <IonTabButton tab="form" href="/form">
//                     <IonIcon icon={documentText} />
//                     <IonLabel>Form</IonLabel>
//                 </IonTabButton>
//             </IonTabBar>
//         </IonTabs>
//     );
// };

// export default Tab;


import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  homeOutline,
  filmOutline, 
  documentTextOutline, 
  listOutline,
  cameraOutline, } from 'ionicons/icons';
import Home from '../pages/Home';
import Form from '../pages/form';
// import List from './pages/list';
import List from '../pages/list';
import TakePhoto from '../pages/camera';

const tab: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {/* <Redirect exact path="/home" to="/home"/> */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} exact/>
      <Route path="/form" component={Form} exact/>
      <Route path="/list" component={List} exact/>
      <Route path="/image" component={TakePhoto} exact/>

      {/* <Route exact path="/tabs/home">
        <Home />
      </Route>
      <Route exact path="/tabs/form">
        <Form />
      </Route>
      <Route exact path="/tabs">
        <Redirect to="/tabs/home" />
      </Route> */}
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="form" href="/form">
        <IonIcon icon={documentTextOutline} />
        <IonLabel>Form</IonLabel>
      </IonTabButton>
      <IonTabButton tab="list" href="/list">
        <IonIcon icon={listOutline} />
        <IonLabel>List</IonLabel>
      </IonTabButton>
      <IonTabButton tab="image" href="/image">
        <IonIcon icon={cameraOutline} />
        <IonLabel>Photo</IonLabel>
      </IonTabButton>
      {/* <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton> */}
    </IonTabBar>
  </IonTabs>
);

export default tab;