import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './RolUsuariolist.css';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchRolUsuario, removeRolUsuario, searchRolUsuarioById, saveRolUsuario } from './RolUsuarioApi';
import RolUsuario from './RolUsuario';

const RolUsuariolist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [rolusuario, setRolusuario] = useState<RolUsuario[]>([]);
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    let result =await searchRolUsuario();
    setRolusuario(result);

  }
  const remove = async (id: string) =>{

    await removeRolUsuario(id);
    search();


  }

  
const addRolUsuario = () =>{
  history.push('/page/rol-usuario/new');
}

const editRolUsuario = (id:string) =>{
  history.push('/page/rol-usuario/'+id);
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
          <IonTitle>Gestion de Roles de Usuario</IonTitle>

          <IonItem>
            <IonButton onClick={addRolUsuario} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Rol Usuario
            </IonButton>
          </IonItem>
          <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Descripcion</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>


              {rolusuario.map((rolusuario:RolUsuario) =>

                <IonRow>
                  <IonCol >{rolusuario.id_rol}</IonCol>
                  <IonCol>{rolusuario.des_rol}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => editRolUsuario(String(rolusuario.id_rol))} color="primary" fill='clear'>
                      <IonIcon icon={pencil} slot="icon-only"/>

                    </IonButton>
                    <IonButton color="danger" fill='clear' onClick={() => remove(String(rolusuario.id_rol))}>
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

export default RolUsuariolist;
