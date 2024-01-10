import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Usuariolist.css';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchUsuario, removeUsuario, searchUsuarioById, saveUsuario } from './UsuarioApi';
import Usuario from './Usuario';

const Usuariolist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [usuario, setUsuario] = useState<Usuario[]>([]);
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    let result =await searchUsuario();
    setUsuario(result);

  }
  const remove = async (id: string) =>{

    await removeUsuario(id);
    search();


  }

  
const addUsuario = () =>{
  history.push('/page/usuario/new');
}

const editUsuario = (id:string) =>{
  history.push('/page/usuario/'+id);
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
          <IonTitle>Gestion de Usuarios</IonTitle>

          <IonItem>
            <IonButton onClick={addUsuario} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Usuario
            </IonButton>
          </IonItem>
          <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Descripcion</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>


              {usuario.map((usuario:Usuario) =>

                <IonRow key={usuario.id_usu}>
                  <IonCol >{usuario.id_usu}</IonCol>
                  <IonCol>{usuario.nom_usu}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => editUsuario(String(usuario.id_usu))} color="primary" fill='clear'>
                      <IonIcon icon={pencil} slot="icon-only"/>

                    </IonButton>
                    <IonButton color="danger" fill='clear' onClick={() => remove(String(usuario.id_usu))}>
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

export default Usuariolist;
