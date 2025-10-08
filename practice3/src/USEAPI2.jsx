// it can handle the promise and return data from promise;
// it can use in suspense
// it can handle context api


import { use } from "react";
import { Suspense } from "react";

let fetctcdata = () => fetch("https://dummyjson.com/products").then((response) => response.json());

let UseResource = fetctcdata()

console.log(UseResource);
console.log(UseResource.products)

export default function USEAPI() {
    return (
        <>

            <Suspense fallback={<h1>Loading...........</h1>} ><UseProducts UseResource={UseResource} /></Suspense>

        </>
    )
}


export function UseProducts({ UseResource }) {
    let product = use(UseResource)
    console.log(product)
    console.log(product.products)
    return (
        <>
         <div>
            {
              product.products.length>0 &&  product.products.map((item)=>{
                    return(
                        <div key={item.id}>
                           <div>
                            <img src={item.thumbnail} alt="" />
                           </div>
                        </div>
                    )
                })
            }
         </div>
        </>
    )
}