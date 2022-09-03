 
 const loadNews = async()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
     const data = await res.json();
     return data.data;
 }



const showCategory= async() =>{
   
    const data = await loadNews();
   
    const{news_category} = data;
   

 
       
        
   const categorySection = document.getElementById('category-section');

       
   news_category.forEach(singleData => {
       const{category_id, category_name}=singleData;
      //  console.log(category_id);
     const div =document.createElement('div');
    
      div.classList.add('mx-auto');
      div.classList.add('news-color');

      div.innerHTML = `
     
      <ul>
 
   <li onclick="newsDetails('${category_id}')" >${category_name ?category_name : 'Not Found'}</li>
       
  </ul>
   `;
      categorySection.appendChild(div);
    
   });
}


showCategory()




const newsDetails= async(category_id)=>{
   const url=`https://openapi.programming-hero.com/api/news/category/${category_id ? category_id : 'Empty'}`;
   console.log(url);
 fetch(url)
 .then(res =>res.json())
 .then(newsId=>displayNewsDetails(newsId))

    
   

       
}

const displayNewsDetails = async(newsId)=>{
  
     console.log(newsId);
      const{data}= newsId;

   const newsDetails = document.getElementById('news-Details');

   
    
    
    data.forEach(news =>{
      
      const{image_url, details, thumbnail_url, rating, title,author
      } =news;
 
   const{name, published_date, img}=author;

      newsDetails.innerHTML =`
      <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${image_url}" class="img-fluid rounded-start w-100 h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">${title ? title : 'Not Found'}</h4>
            <p class="card-text">${details ? details.slice(0, 200) : 'not found'}</p>
             
          
        <div class="d-flex align-items-end justify-content-around">
            
        <div class="d-flex align-items-center">
            <img src="${img}" class="img-fluid rounded-circle w-25 h-25" alt="...">

            <div>
                <p>${name}</p>
                <p>${published_date}</p>
            </div>

           
        </div>

        <div>
            <p>${rating.number}</p>
        </div>

        <div>
            <button class="btn btn-outline-dark">Show More</button>
        </div>

 
 </div>
          
            

           
          </div>
        </div>
      </div>
    </div>
      `;
    })
    

     
       
}    
displayNewsDetails('');

 newsDetails();
loadNews(); 