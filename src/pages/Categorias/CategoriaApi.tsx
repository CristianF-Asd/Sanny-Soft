import Category from "./Category";

export async function searchCategory(){


    
    let response = await fetch('http://localhost:8080/api/category', {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
    
}

export async function removeCategory(id: string){
    await fetch(`http://localhost:8080/api/category/${id}`, {
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })



}

export async function searchCategoryById(id: string){
    let response = await fetch(`http://localhost:8080/api/category/${id}`, {
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    return await response.json();
}

export async function saveCategory(category:Category){
    await fetch('http://localhost:8080/api/category/', {
        "method":'POST',
        "body": JSON.stringify(category),
        "headers": {
            "Content-Type": 'application/json'
        }
    })


  



}