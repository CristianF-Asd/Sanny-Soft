import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Categorialist.css';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCategory, saveCategory, searchCategory } from './CategoriaApi';
import Category from './Category';

const Categorialist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [categorias, setCategorias] = useState<Category[]>([]);
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = async () =>{
    let result =await searchCategory();
    setCategorias(result);

  }
  const remove = async (id: string) =>{

    await removeCategory(id);
    search();


  }

  
const addCategory = () =>{
  history.push('/page/categorias/new');
}

const editCategory = (id:string) =>{
  history.push('/page/categorias/'+id);
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
          <IonTitle>Gestion de Productos</IonTitle>

          <IonItem>
            <IonButton onClick={addCategory} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Producto
            </IonButton>
          </IonItem>
          <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Nombre</IonCol>
                
              </IonRow>


              {categorias.map((categoria:Category) =>

                <IonRow>
                  <IonCol >{categoria.id_cat}</IonCol>
                  <IonCol>{categoria.nom_cat}</IonCol>
                  
                  <IonCol>
                    <IonButton onClick={() => editCategory(String(categoria.id_cat))} color="primary" fill='clear'>
                      <IonIcon icon={pencil} slot="icon-only"/>

                    </IonButton>
                    <IonButton color="danger" fill='clear' onClick={() => remove(String(categoria.id_cat))}>
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