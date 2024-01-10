import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Productolist.css';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeProduct, saveProduct, searchProduct, searchProductById } from './ProductoApi';
import { searchCategory } from '../Categorias/CategoriaApi';
import Product from './Products';
import Category from '../Categorias/Category';

const ProductEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [producto, setProducto] = useState<Product>({ category: {} as Category}); 
  const [categorias, setCategorias] = useState<Category[]>([]);
  const history = useHistory();
  const [estadoOptions, setEstadoOptions] = useState<string[]>(['A', 'I']);

  
  const routeMatch: any = useRouteMatch("/page/productos/:id");
  const id = routeMatch?.params?.id;


  useEffect(() => {
      search();
      loadCategorias();
  
  }
  , [history.location.pathname]);

  const loadCategorias = async () => {
    let result =await searchCategory();
    setCategorias(result);
  }

  

  const search = async () =>{
    
    if (id === 'new'){
        setProducto({});

    }else{
      let result =await searchProductById(id);
      setProducto(result);
      console.log(result)
    }

  }

  const save = async() => {

    
    console.log(producto)
    await saveProduct(producto);
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
                    <IonInput onIonChange={e =>  producto.nom_pro = String(e.detail.value)}  
                    value={producto.nom_pro}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Descripcion</IonLabel>
                    <IonInput onIonChange={e =>  producto.des_pro = String(e.detail.value)}  
                    value={producto.des_pro}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Precio</IonLabel>
                    <IonInput onIonChange={e =>  producto.prec_pro = Number(e.detail.value)}  
                    value={producto.prec_pro}></IonInput>
                </IonItem>

                
                <IonItem>
                    <IonLabel position='stacked'>Stock</IonLabel>
                    <IonInput onIonChange={e =>  producto.stock_pro = Number(e.detail.value)}  
                    value={producto.stock_pro}></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Categoría</IonLabel>
                  <IonSelect
                    value={producto.category?.id_cat}
                    onIonChange={(e) => {
                      const selectedCategoryId = e.detail.value;
                      const selectedCategory = categorias.find((categoria) => categoria.id_cat === selectedCategoryId);
                 
                      setProducto({
                        ...producto,
                        category: selectedCategory || {
                          id_cat: selectedCategoryId,
                          nom_cat: '',
                          est_reg_cat: '',
                        },
                      });
                    }}
                  >
                    {categorias.map((categoria:Category) => (
                      <IonSelectOption key={categoria.id_cat} value={categoria.id_cat}>
                        {categoria.nom_cat}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
                

                <IonItem>
                    <IonLabel position='stacked'>Codigo de Barras</IonLabel>
                    <IonInput onIonChange={e =>  producto.cod_bar_pro = String(e.detail.value)}  
                    value={producto.cod_bar_pro}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position='stacked'>Estado</IonLabel>
                    <IonSelect
                      value={producto.est_reg_pro} onIonChange={(e) => (producto.est_reg_pro = e.detail.value!)}>
                        
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

export default ProductEdit;
