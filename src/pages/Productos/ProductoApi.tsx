import Product from "./Products";

export async function searchProduct(){


    
    let response = await fetch('http://localhost:8080/api/products', {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
    
}

export async function removeProduct(id: string){
    await fetch(`http://localhost:8080/api/products/${id}`, {
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })



}

export async function searchProductById(id: string){
    let response = await fetch(`http://localhost:8080/api/products/${id}`, {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
}

export async function saveProduct(product:Product){
    await fetch('http://localhost:8080/api/products/', {
        "method":'POST',
        "body": JSON.stringify(product),
        "headers": {
            "Content-Type": 'application/json'
        }
    })


  



}