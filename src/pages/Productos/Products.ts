import Category from "../Categorias/Category";


export default interface Product{
    id_pro?: string;
    nom_pro?: string;
    des_pro?: string; 
    prec_pro?: number;
    category?: Category;
    est_reg_pro?: number;
    stock_pro?: number;
    cod_bar_pro?: string;
}