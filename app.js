
const loadNews = async () => {
   const url = `https://openapi.programming-hero.com/api/news/categories`;
   const res = await fetch(url);
   const data = await res.json();
  return data.data;
 
}



const showCategory = async ( ) => {

   const data = await loadNews();

   const { news_category } = data;

 const categorySection = document.getElementById('category-section');
                  news_category.forEach(singleData => {
      const { category_id, category_name } = singleData;

      const div = document.createElement('div');

      div.classList.add('mx-auto');
      div.classList.add('news-color');

      div.innerHTML = `
      <ul>
 
   <li onclick="AllnewsDetails('${category_id ? category_id : 'Empty'}')" >${category_name ? category_name : 'Not Found'}</li>
       
  </ul>
   `;
      categorySection.appendChild(div);
 
   
   });


  
}


showCategory( '');

const AllnewsDetails = async (category_id) => {
   const url = `https://openapi.programming-hero.com/api/news/category/${category_id ? category_id : 'Empty'}`;

       fetch(url)
      .then(res => res.json())
      .then(newsId => displayNewsDetails(newsId))

   
   //start loader
 

}

const displayNewsDetails = async (newsId) => {

   const { data } = newsId;
   
   const newsDetails = document.getElementById('news-Details');
     

   newsDetails.innerHTML = ' ';

   // const newsField = document.getElementById('news-field');
   //      console.log(newsField);

   // console.log(newsFieldValue.value);



   data.forEach(news => {

      toggleSnippers(true);

      const { image_url, details, rating, title, author, category_id } = news;

      const { name, published_date, img } = author;

      const div = document.createElement('div');
      div.innerHTML = `
       <div class="card mb-3 pb-2" >
          <div class="row g-0">
          <div class="col-md-4 ">
         <img src="${image_url ? image_url : 'no image found'}" class="img-fluid rounded-start w-100 h-100" alt="...">
        
        </div>
         <div class="col-md-8">
         <div class="card-body">
          <h4 class="card-title">${title ? title : 'Not Found'}</h4>
          <p class="card-text">${details ? details.slice(0, 300) : 'not found'}</p>
           
        
         <div class=" row d-flex">
          
      <div class="col-4 d-flex">
        <div>
      <img src="${img}" class="img-fluid rounded-circle w-100 h-50" alt="...">
 
        </div>
       
          <div class="">
              <p>${name}</p>
              <p>${published_date}</p>
              
          </div>    
      </div>

    <div class="col-4">
            <p p>${rating.number} M</p>
         </div>
       
    <div class="col-4">
        <button onclick="showModal('${category_id}')" type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" > Show More </button>

    </div>
 </div>
         </div>
      </div>
    </div>
  </div>


    `;


      newsDetails.appendChild(div);


   });

 
   toggleSnippers(false);
}





const showModal = (category_id) => {

      const url = `https://openapi.programming-hero.com/api/news/category/${category_id ? category_id : 'Empty'}`;

      fetch(url)
      .then(res => res.json())
      .then(dataNews => displayShowModal(dataNews.data))

  


}

const displayShowModal = (dataNews) => {

          console.log(dataNews);
      dataNews.forEach(newsModal => {
    
      const { image_url, details, rating, title, author, total_view
      } = newsModal;

      const { name, published_date, img } = author;

      const modalTitle = document.getElementById('exampleModalLabel');
      modalTitle.innerText = title ? title : 'no data found';
      const newsBody = document.getElementById('news-body');
      newsBody.innerHTML = `

       <div class="card"  >
    <img src="${image_url}" class="card-img-top" alt="...">
     <div class="card-body">
     <h3 class="card-title"> ${name ? name : 'no data found'}</h3>
           
     <p class="card-text">${details.slice(0, 100) ? details.slice(0, 100) : 'no data found'}</p
     <p>View: ${total_view ? total_view : 'data not found'}</p>
     <p> Author: ${name ? name :'data not found'}</p>
      
  
    </div>
    </div>
       `;

   })

}



const toggleSnippers = isloading => {

   const loaderSnippers = document.getElementById('loader');
   

   if (isloading) {
      loaderSnippers.classList.remove('d-none');
   }
 else{
   loaderSnippers.classList.add('d-none');
 }
}
 

 
AllnewsDetails(' ');
loadNews(' '); 