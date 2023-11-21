import Mesa from "./Mesa";


export async function searchMesa(){
   
    let response = await fetch('http://localhost:8080/api/mesa', {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return await response.json();   
}

export async function removeMesa(id: string){
    await fetch(`http://localhost:8080/api/mesa/${id}`, {
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export async function searchMesaById(id: string){
    let response = await fetch(`http://localhost:8080/api/mesa/${id}`, {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return await response.json();
}

export async function saveMesa(mesa:Mesa){
    await fetch('http://localhost:8080/api/mesa/', {
        "method":'POST',
        "body": JSON.stringify(mesa),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}
