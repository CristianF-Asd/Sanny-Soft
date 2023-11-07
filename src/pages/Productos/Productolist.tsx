import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Productolist.css';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeProduct, saveProduct, searchProduct } from './ProductoApi';
import Product from './Products';

const Productolist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [productos, setProductos] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
      search();
  }
  , [history.location.pathname]);

  

  const search = () =>{
    let result = searchProduct();
    setProductos(result);

  }
  const remove = (id: string) =>{

    removeProduct(id);
    search();


  }

  const pruebaLocalStorage = () =>{
    const ejemplo = {
      id: '1',
      name: 'Aceite',
      price: '2.50',
      category: 'Viveres',
      stock: '10'
                 
    }
    saveProduct(ejemplo)

  }
const addProduct = () =>{
  history.push('/page/productos/new');
}

const editProduct = (id:string) =>{
  history.push('/page/productos/'+id);
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
            <IonButton onClick={addProduct} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Producto
            </IonButton>
          </IonItem>
          <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Precio</IonCol>
                <IonCol>Categoria</IonCol>
                <IonCol>Stock</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>


              {productos.map((producto:Product) =>

                <IonRow>
                  <IonCol>{producto.id}</IonCol>
                  <IonCol>{producto.name}</IonCol>
                  <IonCol>{producto.price}</IonCol>
                  <IonCol>{producto.category}</IonCol>
                  <IonCol>{producto.stock}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => editProduct(String(producto.id))} color="primary" fill='clear'>
                      <IonIcon icon={pencil} slot="icon-only"/>

                    </IonButton>
                    <IonButton color="danger" fill='clear' onClick={() => remove(String(producto.id))}>
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

export default Productolist;
