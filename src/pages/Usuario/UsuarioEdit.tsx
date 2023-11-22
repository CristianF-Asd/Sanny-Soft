import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Usuariolist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchUsuario, removeUsuario, searchUsuarioById, saveUsuario  } from './UsuarioApi';
import { searchRolUsuario } from '../RolUsuario/RolUsuarioApi';
import Usuario from './Usuario';
import RolUsuario from '../RolUsuario/RolUsuario';

const UsuarioEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [usuario, setUsuario] = useState<Usuario>({ rolusuario: {} as RolUsuario}); 
  const [rolusuario, setRolusuario] = useState<RolUsuario[]>([]);
  const history = useHistory();
  const [estadoOptions, setEstadoOptions] = useState<string[]>(['A', 'I']);

  
  const routeMatch: any = useRouteMatch("/page/usuario/:id");
  const id = routeMatch?.params?.id;


  useEffect(() => {
      search();
      loadUsuario();
  
  }
  , [history.location.pathname]);

  const loadUsuario = async () => {
    let result =await searchRolUsuario();
    setRolusuario(result);
  }

  

  const search = async () =>{
    
    if (id === 'new'){
        setUsuario({});

    }else{
      let result =await searchUsuarioById(id);
      setUsuario(result);
      console.log(result)
    }

  }

  const save = async() => {

    
    console.log(usuario)
    await saveUsuario(usuario);
    history.push('/page/usuario');

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
          <IonTitle>{id === 'new' ? 'Agregar Usuario' : 'Editar Usuario'}</IonTitle>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

          <IonList>

                <IonItem>
                    <IonLabel position='stacked'>Nombre</IonLabel>
                    <IonInput onIonChange={e =>  usuario.nom_usu = String(e.detail.value)}  
                    value={usuario.nom_usu}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Apellido</IonLabel>
                    <IonInput onIonChange={e =>  usuario.ape_usu = String(e.detail.value)}  
                    value={usuario.ape_usu}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Direccion</IonLabel>
                    <IonInput onIonChange={e =>  usuario.dir_usu = String(e.detail.value)}  
                    value={usuario.dir_usu}></IonInput>
                </IonItem>

                
                <IonItem>
                    <IonLabel position='stacked'>DNI</IonLabel>
                    <IonInput onIonChange={e =>  usuario.dni_usu = String(e.detail.value)}  
                    value={usuario.dni_usu}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Email</IonLabel>
                    <IonInput onIonChange={e =>  usuario.ema_usu = String(e.detail.value)}  
                    value={usuario.ema_usu}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Contraseña</IonLabel>
                    <IonInput onIonChange={e =>  usuario.contr_usu = String(e.detail.value)}  
                    value={usuario.contr_usu}></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Rol de Usuario</IonLabel>
                  <IonSelect
                    value={usuario.rolusuario?.id_rol}
                    onIonChange={(e) => {
                      const selectedRolUsuarioId = e.detail.value;
                      const selectedRolUsuario = rolusuario.find((rolusuario) => rolusuario.id_rol === selectedRolUsuarioId);
        
                      setUsuario({
                        ...usuario,
                        rolusuario: selectedRolUsuario || {
                          id_rol: selectedRolUsuarioId,
                          des_rol: '',
                          est_reg_rol: '',
                        },
                      });
                    }}
                  >
                    {rolusuario.map((rolusuario:RolUsuario) => (
                      <IonSelectOption key={rolusuario.id_rol} value={rolusuario.id_rol}>
                        {rolusuario.des_rol}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
                

                <IonItem>
                    <IonLabel position='stacked'>Estado</IonLabel>
                    <IonSelect
                      value={usuario.est_reg_usu} onIonChange={(e) => (usuario.est_reg_usu = e.detail.value!)}>
                        
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

export default UsuarioEdit;
