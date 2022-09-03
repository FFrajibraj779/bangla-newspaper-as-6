const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res =>res.json())
    .then(data => showCategory(data.data))
    
    
 }



  const showCategory =(data) =>{
  
 const{news_category} = data;
  
 const categorySection = document.getElementById('category-section');
 news_category.forEach(singleData => {
     const{category_id, category_name} = singleData;
      console.log(category_id);
      const div = document.createElement('div');

      div.classList.add('mx-auto');
      div.classList.add('news-color');

      div.innerHTML = `
      <ul>
 
   <li>${category_name ? category_name : 'Not Found'}</li>
       
  </ul>
   `;
      categorySection.appendChild(div);
 });
  

  }


       const displayNewsDetails =()=>{

 
      const url = ` https://openapi.programming-hero.com/api/news/category/01`;
      console.log(url);
      fetch(url)
      .then(res =>res.json())
      .then(newsId => console.log(newsId))

   
       }

        displayNewsDetails();

   // document.getElementById('news-Details').addEventListener('click', function(){

   //         const newsDetails = document.getElementById('news-Details');
   //         const newsValue= newsDetails.innerText;

   //         console.log(newsValue);

       
   // })

 














  loadNews();