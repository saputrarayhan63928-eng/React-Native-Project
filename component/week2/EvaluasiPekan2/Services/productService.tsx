export interface Product {
    id: string
    title: string
    image: string
    price: number
}

export async function getAllProduct() : Promise<{
    data: Product[]
    status: number
}>{
    const response = await fetch("https://fakestoreapi.com/products")

    if(!response.ok){
        return {
            data: [],
            status: response.status
        }
    }

    const data = await response.json()

    return{
        data,
        status: response.status
    }
}