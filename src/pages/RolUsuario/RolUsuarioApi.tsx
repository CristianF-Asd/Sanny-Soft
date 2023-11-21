import RolUsuario from "./RolUsuario";

export async function searchRolUsuario(){   
    let response = await fetch('http://localhost:8080/api/rol-user', {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return await response.json(); 
}

export async function removeRolUsuario(id: string){
    await fetch(`http://localhost:8080/api/rol-user/${id}`, {
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export async function searchRolUsuarioById(id: string){
    let response = await fetch(`http://localhost:8080/api/rol-user/${id}`, {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
}

export async function saveRolUsuario(rolusuario:RolUsuario){
    await fetch('http://localhost:8080/api/rol-user/', {
        "method":'POST',
        "body": JSON.stringify(rolusuario),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}