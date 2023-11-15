import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Categorialist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  searchCategoryById, removeCategory, saveCategory, searchCategory } from './CategoriaApi';
import Category from './Category';

const CategoriaEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [categoria, setCategoria] = useState<Category>({});
  const history = useHistory();
  
  const routeMatch: any = useRouteMatch("/page/categorias/:id");
  const id = routeMatch?.params?.id;


  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    
    if (id === 'new'){
        setCategoria({});

    }else{
      let result =await searchCategoryById(id);
      setCategoria(result);
      console.log(result)
    }

  }

  const save = async() => {

    
    
    await saveCategory(categoria);
    history.push('/page/categorias');

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
          <IonTitle>{id === 'new' ? 'Agregar Categoria' : 'Editar Categoria'}</IonTitle>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

          <IonList>

                <IonItem>
                    <IonLabel position='stacked'>Id</IonLabel>
                    <IonInput onIonChange={e =>  categoria.id_cat = Number(e.detail.value)}  
                    value={categoria.id_cat}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Nombre</IonLabel>
                    <IonInput onIonChange={e =>  categoria.nom_cat = String(e.detail.value)}  
                    value={categoria.nom_cat}></IonInput>
                </IonItem>
               
            </IonList> 
        </IonCard>

        
        
        
      </IonContent>


    </IonPage>
  );
};

export default CategoriaEdit;