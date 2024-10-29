const categoriesAll = document.querySelectorAll('#categories .item');
console.log(`Number of categores: ${categoriesAll.length}`);

categoriesAll.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItem = category.querySelectorAll('ul li').length;
 console.log(`Category: ${categoryTitle}`);
 console.log(`Elements: ${categoryItem}`);  
});
