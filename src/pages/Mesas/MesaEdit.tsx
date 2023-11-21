import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Mesalist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  searchMesa, removeMesa,  searchMesaById, saveMesa  } from './MesaApi';
import Mesa from './Mesa';

const CategoriaEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [mesa, setMesa] = useState<Mesa>({});
  const [estadoOptions, setEstadoOptions] = useState<string[]>(['A', 'I']);
  const [estadoMesa, setEstadoMesa] = useState<string[]>(['DISPONIBLE', 'ENCOCINA', 'DESPACHADA', 'INDISPUESTA']);

  const history = useHistory();
  
  const routeMatch: any = useRouteMatch("/page/mesa/:id");
  
  const id = routeMatch?.params?.id;


  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    
    if (id === 'new'){
        setMesa({});

    }else{
      let result =await searchMesaById(id);
      setMesa(result);
      console.log(result)
    }

  }

  const save = async() => {

    
    
    await saveMesa(mesa);
    history.push('/page/mesa');

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
          <IonTitle>{id === 'new' ? 'Agregar Mesa' : 'Editar Mesa'}</IonTitle>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

          <IonList>

                

                <IonItem>
                    <IonLabel position='stacked'>Numero de Mesa</IonLabel>
                    <IonInput onIonChange={e =>  mesa.num_me = String(e.detail.value)}  
                    value={mesa.num_me}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Estado de Mesa</IonLabel>
                    <IonSelect
                      value={mesa.est_me} onIonChange={(e) => (mesa.est_me = e.detail.value!)}>
                        
                      {estadoMesa.map((option, index) => (
                        <IonSelectOption key={index} value={option}>
                          {option}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                </IonItem>



                <IonItem>
                    <IonLabel position='stacked'>Estado</IonLabel>
                    <IonSelect
                      value={mesa.est_reg_me} onIonChange={(e) => (mesa.est_reg_me = e.detail.value!)}>
                        
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

export default CategoriaEdit;

