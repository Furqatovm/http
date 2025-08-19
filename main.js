

// const http = new XMLHttpRequest();
// http.addEventListener("readystatechange", ()=>{
//     console.log(http);
//     if(http.readyState === 4){
//         console.log(JSON.parse(http.response));
//     }
// });
// http.open("GET", "https://jsonplaceholder.typicode.com/users");
// http.send();

// 200 ma'lumot get
// 201 edit delete post

// 404 error not found
// 500 interval server error

// 403 Forbidden
// login 403 token expired

let cards =document.querySelector(".lists");

function getData(){
    const http =new XMLHttpRequest();

    return new Promise((res, rej) =>{
        http.addEventListener("readystatechange", ()=> {
            if(http.readyState ===4 && http.status === 200){
                res(JSON.parse(http.response));
            } else if (http.readyState ===4){
                rej("Opps nimadir xato ketdi");
            }
        });
        http.open("GET", "https://fakestoreapi.com/products");

        http.send();
    });
}

getData()
.then((data) =>addUi(data))
.catch((error) => console.log(error));

function addUi(data){
    data.forEach((elemen) => {
        console.log(elemen)
        let div =document.createElement("div");
        div.classList.add("card");

        div.innerHTML =`
            <div class="overflow-hidden">
            <div class="w-full h-[310px] flex items-center justify-center">
                <img src="${elemen.image}" class="w-full h-full object-contain bg-[#efefef] rounded-[8px]" alt="">
            </div>
            <div class="flex flex-col gap-[10px] py-[10px] px-[5px]">
                <p class="title text-[#1F2026] text-[12.8px]">${elemen.title}</p>
                <div class="star flex items-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.61751 10.844L11.2225 13.0199L10.2658 8.91902L13.4508 6.15986L9.25668 5.80402L7.61751 1.93652L5.97835 5.80402L1.78418 6.15986L4.96918 8.91902L4.01251 13.0199L7.61751 10.844Z" fill="#FFB54C"/>
                        </svg>
                        <span class="text-[#8B8E99] text-[11.2px] font-[300]">${elemen.rating.rate}</span>
                        <span class="sharx text-[#8B8E99] text-[11.2px] font-[300]">(${elemen.rating.count} sharh)</span>                      
                </div>
                <div class="prize text-[11px] text-[#1F1F26] bg-[#fefe00] max-w-[100px] text-center p-[2px] rounded-[4px] overflow-hidden">${(elemen.price *12600)/12} so'm/oyiga</div>
                <div class="flex justify-between items-center">
                    <div class="left flex flex-col">
                        <span class="text-[11.2px] text-[#8B8E99] line-through">${(elemen.price*12600) +20000}so'm</span>
                        <span class="text-[14px] text-[#1F2026] font-[500]">${elemen.price *12600} so'm</span>
                    </div>
                    <div class="p-[5px] rounded-[50%] border border-[#8B8E99] w-[32px] flex items-center justify-between">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.61755 11.2698V9.26984H6.61755V13.7698C6.61755 14.0459 6.39369 14.2698 6.11755 14.2698C5.84141 14.2698 5.61755 14.0459 5.61755 13.7698V8.26984H8.61755C8.61755 5.86612 10.5698 4.26984 12.6176 4.26984C14.6751 4.26984 16.6176 5.9754 16.6176 8.26984H19.6176V20.7698C19.6176 21.5982 18.946 22.2698 18.1176 22.2698H13.1176C12.8415 22.2698 12.6176 22.0459 12.6176 21.7698C12.6176 21.4937 12.8415 21.2698 13.1176 21.2698H18.1176C18.3937 21.2698 18.6176 21.0459 18.6176 20.7698V9.26984H16.6176V11.2698H15.6176V9.26984H9.61755V11.2698H8.61755ZM12.6176 5.26984C11.0653 5.26984 9.61755 6.47356 9.61755 8.26984H15.6176C15.6176 6.56428 14.1601 5.26984 12.6176 5.26984Z" fill="#1F2026"/>
                            <path d="M8.11755 15.2698C8.39369 15.2698 8.61755 15.4937 8.61755 15.7698V18.2698H11.1176C11.3937 18.2698 11.6176 18.4937 11.6176 18.7698C11.6176 19.0459 11.3937 19.2698 11.1176 19.2698H8.61755V21.7698C8.61755 22.0459 8.39369 22.2698 8.11755 22.2698C7.84141 22.2698 7.61755 22.0459 7.61755 21.7698V19.2698H5.11755C4.84141 19.2698 4.61755 19.0459 4.61755 18.7698C4.61755 18.4937 4.84141 18.2698 5.11755 18.2698H7.61755V15.7698C7.61755 15.4937 7.84141 15.2698 8.11755 15.2698Z" fill="#1F2026"/>
                            </svg>                            
                    </div>
                </div>
            </div>
        </div>
        `;

        cards.append(div);
    })
}



var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });