export function searchProduct(){
    if (!localStorage['products']){
        localStorage['products'] = '[]';
    }


    let products = localStorage['products']
    products = JSON.parse(products);
    return products;

}
export function removeProduct(id: string){
    let products = searchProduct();
    let indice = products.findIndex((product: any) => product.id == id )
    products.splice(indice,1);
    localStorage['products'] = JSON.stringify(products)

}

export function searchProductById(id: string){
    let products = searchProduct();
    return products.find((product:any) => product.id == id);
}

export function saveProduct(product:any){
    let products = searchProduct();
    if(product.id){
       //Editar
       let indice = products.findIndex((c: any) => c.id == product.id );
       products[indice] = product;
    }else{
        //Nuevo
        product.id = Math.round(Math.random()*100000);
        products.push(product);
    }
    
    localStorage['products'] = JSON.stringify(products)



}