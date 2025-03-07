// Watch data
const watchData = {
 watches: [
  {
   id: 1,
   title: "Exquisite Watches",
   subtitle: "Gold Luxury,",
   subtitle2: "Choose Us", 
   description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
   price: "$499.00",
   image: "watchOrange.png",
   bgGradient: "linear-gradient(to right, #F4A764, #FFDEC2)"
 },
 {
  id: 2,
  title: "Dainty Timepieces",
  subtitle: "Silver Luxury,",
  subtitle2: "Choose Us",
  description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
  price: "$469.00",
  image: "watchBlack.png",
  bgGradient: "linear-gradient(to right, #ADB0B0, #E1E1E1)"
},
{
  id: 3,
  title: "Elegant Timepieces",
  subtitle: "Choose Luxury,",
  subtitle2: "Choose Us",
  description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
  price: "$529.00",
  image: "watchGreen.png",
  bgGradient: "linear-gradient(to right, #30A357, #75E39A)"
},
{
  id: 4,
  title: "Refined Timepieces",
  subtitle: "Gold Luxury,",
  subtitle2: "Choose Us",
  description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
  price: "$599.00",
  image: "watchRed.png",
  bgGradient: "linear-gradient(to right, #F24F4F, #FFA895)"
},
 ],
 socialIcons: [
   { name: "facebook", image: "facebook.png", link: "#facebook" },
   { name: "twitter", image: "twitter.png", link: "#twitter" },
   { name: "youtube", image: "twitter.png", link: "#twitter" },
 ]
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
 const container = document.querySelector('.container');
 const textContent = document.querySelector('.text-content');
 const socialIcons = document.querySelector('.social-icons');
 const splideList = document.querySelector('.splide__list');
 
 // Generate slides
 watchData.watches.forEach(watch => {
   const slide = document.createElement('li');
   slide.className = 'splide__slide';
   slide.innerHTML = `<img src="${watch.image}" alt="${watch.title}" width="300px" height="400px">`;
   splideList.appendChild(slide);
 });
 
 // Generate social icons
 watchData.socialIcons.forEach(icon => {
   const link = document.createElement('a');
   link.href = icon.link;
   link.innerHTML = `<img src="${icon.image}" alt="${icon.name}">`;
   socialIcons.appendChild(link);
 });
 
 // Update content function
 function updateContent(index) {
   const watch = watchData.watches[index];

   document.documentElement.style.setProperty('--bg-gradient', watch.bgGradient);
   textContent.innerHTML = `
     <h1 class="title">${watch.title}</h1>
     <div class="h2-div">
     <h2>${watch.subtitle}</h2>
     <h2 class="subtitle-2">${watch.subtitle2}</h2>
     </div>
     <p class="description">${watch.description}</p>
     <div class="price">${watch.price}</div>
   `;
 }
 
 // Initialize with first slide
 updateContent(0);
 
 // Initialize Splide
 const splide = new Splide('.splide', {
   type: 'fade',
   rewind: false,
   pagination: false,
 });
 
 splide.mount();
 
 // Update content on slide change
 splide.on('moved', function(newIndex) {
   updateContent(newIndex);
 });
});