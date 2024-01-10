import RolUsuario from "../RolUsuario/RolUsuario";


export default interface Usuario{
    id_usu?: string;
    nom_usu?: string;
    ape_usu?: string; 
    dir_usu?: string;
    dni_usu?: string;
    ema_usu?: string;
    contr_usu?: string;
    rolUser?: RolUsuario;
    est_reg_usu?: string;
}