import Usuario from "./Usuario";

export async function searchUsuario(){
   
    let response = await fetch('http://localhost:8080/api/user', {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
    
}

export async function removeUsuario(id: string){
    await fetch(`http://localhost:8080/api/user/${id}`, {
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })



}

export async function searchUsuarioById(id: string){
    let response = await fetch(`http://localhost:8080/api/user/${id}`, {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
}

export async function saveUsuario(usuario:Usuario){
    await fetch('http://localhost:8080/api/user/', {
        "method":'POST',
        "body": JSON.stringify(usuario),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}