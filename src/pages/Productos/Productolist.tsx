import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Productolist.css';

const Productolist: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

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
        
        <IonGrid>
            <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
            <IonCol>4</IonCol>
            <IonCol>5</IonCol>
            <IonCol>6</IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
            <IonCol>4</IonCol>
            <IonCol>5</IonCol>
            <IonCol>6</IonCol>
            <IonCol>7</IonCol>
            <IonCol>8</IonCol>
            <IonCol>9</IonCol>
            <IonCol>10</IonCol>
            <IonCol>11</IonCol>
            <IonCol>12</IonCol>
            </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Productolist;
