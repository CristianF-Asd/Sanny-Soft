import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';


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

/* Theme variables */
import './theme/variables.css';
import Productolist from './pages/Productos/Productolist';
import ProductEdit from './pages/Productos/ProductEdit';
import Categorialist from './pages/Categorias/Categorialist';
import CategoriaEdit from './pages/Categorias/CategoriaEdit';
import Mesalist from './pages/Mesas/Mesalist';
import MesaEdit from './pages/Mesas/MesaEdit';
import RolUsuariolist from './pages/RolUsuario/RolUsuariolist';
import RolUsuarioEdit from './pages/RolUsuario/RolUsuarioEdit';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/productos" />
            </Route>

            

            <Route path="/page/:name" exact={true}>  
              <Page />
            </Route>
            

            <Route path="/page/productos" exact={true}>  
              <Productolist />
            </Route>

            <Route path="/page/categorias" exact={true}>  
              <Categorialist />
            </Route>

            <Route path="/page/mesa" exact={true}>  
              <Mesalist />
            </Route>

            <Route path="/page/rol-usuario" exact={true}>  
              <RolUsuariolist />
            </Route>


            

            <Route path="/page/productos/:id" exact={true}>  
              <ProductEdit />
            </Route>

            <Route path="/page/categorias/:id" exact={true}>  
              <CategoriaEdit />
            </Route>

            <Route path="/page/mesa/:id" exact={true}>  
              <MesaEdit />
            </Route>

            <Route path="/page/rol-usuario/:id" exact={true}>  
              <RolUsuarioEdit />
            </Route>

          
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
