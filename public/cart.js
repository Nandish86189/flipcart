export const cart=[{
  productId:'29893-99283-hue7937-988',
  quantity:1
},{
   productId:'29893-98983-h65937-988',
  quantity:1

},{
   productId:'26753-99883-hu87937-988',
  quantity:1
},{
   productId:'298793-967583-hu46f37-988',
  quantity:1
}];



    export function addtocart(productId){
      
    let matchingitem;


    //chaecking if product is the cart and updating the cart quantity value

    cart.forEach((item)=>{

      if(item.productId===productId){
        matchingitem=item;
      }
    });


      if(matchingitem){
            matchingitem.quantity+=1;
          }  

          else{
          cart.push({
          productId:productId,
          quantity:1

        });

          }
    }



    