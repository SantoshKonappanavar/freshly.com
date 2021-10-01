let buttons=document.getElementsByTagName("button");
     for(var i=0;i<buttons.length;i++){
         buttons[i].addEventListener("click",cart1)
     }
       function cart1(){
            window.location.href="cart.html";
        }

        let data= [
    {
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1608747288/production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpg",
      name: "Steak Peppercorn",
    },
    {
      name: "Homestyle Chicken",
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1602723110/production-meal-image-0a78bae3-2e0c-4ab7-b420-154ed262d4d0.jpg",
    
    },
    {
      name: "Cauliflower Shell Beef Bolognese",
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1625862402/production-meal-image-2d69b7cf-1233-428f-a8b4-bc9f77559500.jpg",
 
    },
    {
      name: "Sausage Baked Penne",
 
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1611760579/production-meal-image-aba62473-4c2a-4708-a0c1-3ed792dc70c9.jpg",
     
    },
    {
      name: "Savory-Sweet Chicken Teriyaki Bowl",
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1631655768/production-meal-image-a9a473c8-c1e0-4b3e-a6f8-ffcbc4e8b21c.jpg",
    },
    {
      name: "Protein-Packed Chicken Parm",
      img: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,w_580/v1607770959/production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpg",
    },
];
        let items=document.getElementById("onthemenuboxs");
        function showproduct(data){
            data.forEach(function(product){
                let divs=document.createElement("div");
                let img=document.createElement("img");
                img.src=product.img;
                let name=document.createElement("div");
                name.textContent=product.name;
                divs.append(img,name);
                items.append(divs);
            })
        }
        showproduct(data);

        function shownum(num){
        let a=document.getElementById("nummeals");
        let b=document.getElementById("price1");
        let c=document.getElementById("mealsbutton");
        var arr1=[4,6,8,10,12]
        var arr=[11.79,9.99,9.49,9.29,8.99];
        for(var i=0;i<arr.length;i++){
            if(num==arr1[i]){
                b.textContent="$"+" "+arr[i]+" "+"/"+" "+"meal";
            }
        }
        a.textContent=num+" "+"Meals";
        c.textContent="Select The"+" "+num+" "+"Meal"+"Plan";
    }
       let small=document.getElementById("mealsbutton");
       small.addEventListener("click",opencart);
       function opencart(){
           window.location.href="cart.html"
       }