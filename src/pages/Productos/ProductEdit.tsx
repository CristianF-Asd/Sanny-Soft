import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Productolist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeProduct, saveProduct, searchProduct, searchProductById } from './ProductoApi';

const ProductEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const [producto, setProducto] = useState<any>({});
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , []);

  

  const search = () =>{
    if (id !== 'new'){
        let result = searchProductById(id);
        setProducto(result);

    }

  }

  const save = () => {
    
    saveProduct(producto);
    history.push('/page/productos');

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
          <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

          <IonList>

                <IonItem>
                    <IonLabel position='stacked'>Nombre</IonLabel>
                    <IonInput onIonChange={e =>  producto.name = e.detail.value}  
                    value={producto.name}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Precio</IonLabel>
                    <IonInput onIonChange={e =>  producto.price = e.detail.value}  
                    value={producto.price}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Categoria</IonLabel>
                    <IonInput onIonChange={e =>  producto.category = e.detail.value}  
                    value={producto.category}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Stock</IonLabel>
                    <IonInput onIonChange={e =>  producto.stock = e.detail.value}  
                    value={producto.stock}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Codigo de Barras</IonLabel>
                    <IonInput onIonChange={e =>  producto.barcode = e.detail.value}  
                    value={producto.barcode}></IonInput>
                </IonItem>

                
            </IonList> 
        </IonCard>

        
        
        
      </IonContent>


    </IonPage>
  );
};

export default ProductEdit;
