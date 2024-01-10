import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Mesalist.css';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  searchMesa, removeMesa,  searchMesaById, saveMesa  } from './MesaApi';
import Mesa from './Mesa';

const Categorialist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [mesa, setMesa] = useState<Mesa[]>([]);
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    let result =await searchMesa();
    setMesa(result);

  }
  const remove = async (id: string) =>{

    await removeMesa(id);
    search();
  }

  
const addMesa = () =>{
  history.push('/page/mesa/new');
}

const editMesa = (id:string) =>{
  history.push('/page/mesa/'+id);
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
          <IonTitle>Gestion de Mesa</IonTitle>

          <IonItem>
            <IonButton onClick={addMesa} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Mesa
            </IonButton>
          </IonItem>
          <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Numero de Mesa</IonCol>
                <IonCol>Estado de Mesa</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>


              {mesa.map((mesa:Mesa) =>

                <IonRow key={mesa.id_me}>
                  <IonCol >{mesa.id_me}</IonCol>
                  <IonCol>{mesa.num_me}</IonCol>
                  <IonCol>{mesa.est_me}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => editMesa(String(mesa.id_me))} color="primary" fill='clear'>
                      <IonIcon icon={pencil} slot="icon-only"/>

                    </IonButton>
                    <IonButton color="danger" fill='clear' onClick={() => remove(String(mesa.id_me))}>
                      <IonIcon icon={close} slot="icon-only"/>

                    </IonButton>

                  </IonCol>
                </IonRow>
                      
                )}      
          </IonGrid>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Categorialist;