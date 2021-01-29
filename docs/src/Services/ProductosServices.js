import instance from "../Config/axios"

export function getProductos(){
    /*return fetch("https://jsonfy.com/items")
    .then(res=>res.json())*/
    return instance.get("items")
}


export function getProducto(id){
    //return instance.get("items/"+id)
    return fetch("https://jsonfy.com/items/"+id)
            .then(res=>res.json())
}