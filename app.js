 
 const loadNews = async()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
     const data = await res.json();
     return data.data.news_category;
 }



const showCategory= async() =>{

    const data = await loadNews();
   console.log(data);
   const categorySection = document.getElementById('category-section');
   
const{category_name} = data;
   data.forEach(singleData => {
    console.log(singleData);

     const div =document.createElement('div');
    
      div.classList.add('mx-auto');
      div.classList.add('news-color');

      div.innerHTML = `
     
      <ul>
      <li >${singleData.category_name ? singleData.category_name : 'Not Found'}</li>
  </ul>
         
      
      `;
      categorySection.appendChild(div);
    
   });
}



// loadNews();
showCategory()