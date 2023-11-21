import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './RolUsuariolist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  searchRolUsuario, removeRolUsuario, searchRolUsuarioById, saveRolUsuario } from './RolUsuarioApi';
import RolUsuario from './RolUsuario';

const RolUsuarioEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [rolusuario, setRolusuario] = useState<RolUsuario>({});
  const [estadoOptions, setEstadoOptions] = useState<string[]>(['A', 'I']);
  const history = useHistory();
  
  const routeMatch: any = useRouteMatch("/page/rol-usuario/:id");
  
  const id = routeMatch?.params?.id;


  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    
    if (id === 'new'){
        setRolusuario({});

    }else{
      let result =await searchRolUsuarioById(id);
      setRolusuario(result);
      console.log(result)
    }

  }

  const save = async() => {

    
    
    await saveRolUsuario(rolusuario);
    history.push('/page/rol-usuario');

  }
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonTitle>{id === 'new' ? 'Agregar Rol Usuario' : 'Editar Rol Usuario'}</IonTitle>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

          <IonList>

                

                <IonItem>
                    <IonLabel position='stacked'>Descripcion</IonLabel>
                    <IonInput onIonChange={e =>  rolusuario.des_rol = String(e.detail.value)}  
                    value={rolusuario.des_rol}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Estado</IonLabel>
                    <IonSelect
                      value={rolusuario.est_reg_rol} onIonChange={(e) => (rolusuario.est_reg_rol = e.detail.value!)}>
                        
                      {estadoOptions.map((option, index) => (
                        <IonSelectOption key={index} value={option}>
                          {option}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                </IonItem>
               
            </IonList> 
        </IonCard>

        
        
        
      </IonContent>


    </IonPage>
  );
};

export default RolUsuarioEdit;