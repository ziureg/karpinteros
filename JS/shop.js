/*import { dataCategories } from '../data/data.js';
import { dataProducts } from '../data/data.js'; */

export function showCategories() {

    const galleryCategories = document.getElementById("galleryCategories");
    let dataSet = 0;
    for (let i = 0; i < dataCategories.length; i++) {
        dataSet = i;
        const galleryCategoriesSelector = document.createElement("div");
        galleryCategoriesSelector.setAttribute("class", "galleryCategoriesSelector");
        galleryCategoriesSelector.setAttribute("id", "galleryCategoriesSelector");

        if (i === 0) {
            galleryCategoriesSelector.classList.add("galleryCategoriesSelector--active");
        }
        /*galleryCategoriesSelector.setAttribute("data-category", dataSet);*/
        galleryCategoriesSelector.setAttribute("data-categoriesid", dataCategories[i].id);
        galleryCategoriesSelector.setAttribute("data-categoriesname", dataCategories[i].name);

        galleryCategories.appendChild(galleryCategoriesSelector);

        const galleryCategoriesImage = document.createElement("div");
        galleryCategoriesImage.setAttribute("class", "galleryCategoriesImage");
        galleryCategoriesSelector.appendChild(galleryCategoriesImage);

        const categoryImage = document.createElement("img");
        categoryImage.setAttribute("src", dataCategories[i].image);
        categoryImage.setAttribute("class", "img_thumbnails");
        /*categoryImage.setAttribute(
            "onclick",
            `showProductsByCategory('${dataCategories[i].name}')`
        );*/
        const galleryCategoriesDesc = document.createElement("div");
        galleryCategoriesDesc.setAttribute("class", "galleryCategoriesDesc");
        galleryCategoriesSelector.appendChild(galleryCategoriesDesc);
        const categoryDesc = document.createTextNode(dataCategories[i].description);

        galleryCategoriesImage.appendChild(categoryImage);
        galleryCategoriesDesc.appendChild(categoryDesc);
    }
    // console.log("Fn: showCategories", galleryCategories)
    const galleryCategory = document.getElementById("galleryCategories");
    console.log("Fn: showCategories", galleryCategory)
};

galleryCategories.addEventListener("click", function (event) {
    const target = event.target.closest(".galleryCategoriesSelector");
    if (target) {
        /*const dataSetValue = target.getAttribute("data-category");*/
        const dataSetValueId = target.getAttribute("data-categoriesid");
        const dataSetValueName = target.getAttribute("data-categoriesname");
        console.log("Fn: galleryCategories-EventListener: dataSetValueId, dataSetValueName:", dataSetValueId, dataSetValueName)

        /*showProductsByCategory(dataCategories[dataSetValue].name);
        showProductDetails(dataCategories[dataSetValue].name, 1) // Show first product by default*/

        showProductsByCategory(dataSetValueName);
        showProductDetails(dataSetValueName, dataSetValueId)
        /*showProductDetails(dataSetValueName, 1)*/

        // console.log("galleryCategories - Event / dataCategories[dataSetValue].name",dataCategories[dataSetValue].name);
        // console.log(dataProducts.itemProducts);
        // console.log("Selected dataset value:", dataSetValue);

        const galleryCategoriesSelectors = document.querySelectorAll(".galleryCategoriesSelector");
        galleryCategoriesSelectors.forEach(selector => {
            selector.classList.remove("galleryCategoriesSelector--active");
        });
        target.classList.add("galleryCategoriesSelector--active");
    }
});

export function showProductsByCategory(category) {

    console.log("Fn showProductsByCategory: - Parametro de entrada: category ", category);

    /* agregar galleryCategoriesSelector--active al dataset seleccionado 
    const galleryCategoriesSelector = document.querySelectorAll(".galleryCategoriesSelector");
    galleryCategoriesSelector.forEach(galleryCategoriesSelector => {
        galleryCategoriesSelector.classList.add("galleryCategoriesSelector--active");
    });*/

    const galleryProductsByCategory = document.querySelector(".galleryProductsByCategory");
    galleryProductsByCategory.innerHTML = ""; // Clear previous content

    const galleryProductsByCategory_message = document.querySelector(".galleryProductsByCategory_message");
    galleryProductsByCategory_message.innerHTML = ""; // Clear previous content

    const activeProductImage = document.getElementById("activeProductImage");
    activeProductImage.setAttribute("src", "");; // Clear previous content /* */

    const activeProduct_gallery = document.getElementById("activeProduct_gallery");
    activeProduct_gallery.innerHTML = ""; // Clear previous content /* */

    const categoryProducts = dataProducts.filter(product => product.category === category);
    console.log("Fn: showProductsByCategory - filter(product.category===category): ", categoryProducts)

    if (categoryProducts.length === 0) {
        //alert("No products found for category: " + category);
        galleryProductsByCategory.innerHTML = "Products by Category Not Found";
        return;
    } /* Debug init -  only this line fron here*/ else {

    const gallery = document.getElementById("galleryProductsByCategory");

    let dataSet_productsByCategory = 0;
    categoryProducts.forEach(product => {

        dataSet_productsByCategory++;

        const galleryProductsByCategorySelector = document.createElement("div");
        galleryProductsByCategorySelector.setAttribute("class", "galleryProductsByCategorySelector");
        galleryProductsByCategorySelector.setAttribute("id", "galleryProductsByCategorySelector");


        if (dataSet_productsByCategory === 1) {
            galleryProductsByCategorySelector.classList.add("galleryProductsByCategorySelector--active");
        }
        galleryProductsByCategorySelector.setAttribute("data-productsByCategory", dataSet_productsByCategory);
        galleryProductsByCategorySelector.setAttribute("data-productsByCategoriesid", product.id);
        galleryProductsByCategorySelector.setAttribute("data-productsByCategoriesCategory", product.category);


        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.images[0]);
        productImage.setAttribute("class", "img_thumbnails");
        productImage.setAttribute("onclick", `showProductDetails('${product.category}','${product.id}')`);

        //console.log("fn showProductsByCategory forEach - product: ", product.category, product.id);

        const productDesc = document.createTextNode(product.description);

        gallery.appendChild(galleryProductsByCategorySelector);

        galleryProductsByCategorySelector.appendChild(productImage);
    });

/* Debug End - only this line*/ }
    const $galleryProductsByCategorySelector = document.getElementById("galleryProductsByCategory");

    console.log("Fn: showProductsByCategory - Div: galleryProductsByCategorySelector", $galleryProductsByCategorySelector )


};

galleryProductsByCategory.addEventListener("click", function (event) {
    const target = event.target.closest(".galleryProductsByCategorySelector");
    if (target) {
        const dataSet_productsValue = target.getAttribute("data-productsByCategory");

        /*showProductsByCategory(dataSetValueName);
        showProductDetails(dataSetValueName, dataSetValueId)*/

        const $galleryProductsByCategorySelectors = document.querySelectorAll(".galleryProductsByCategorySelector");
        $galleryProductsByCategorySelectors.forEach(selector => {
            selector.classList.remove("galleryProductsByCategorySelector--active");
        });
        target.classList.add("galleryProductsByCategorySelector--active");
    }
});/**/

function showProductDetails(category, productId) {

    console.log("Fn showProductsDetails Params: category & productID", category, productId);

    const products = dataProducts.filter(products => products.category === category);
    console.log("Fn: showProductsDetails - product = ", products);

    const product = products.find(product => product.id === Number(productId)); /*  && productX.id === Number(productId) */
    console.log("Fn: showProductsDetails - products = ", product);

    const activeProduct_gallery = document.querySelector(".activeProduct_gallery")
    activeProduct_gallery.innerHTML = "";

    if (!product ) {
        const activeImageTitle = document.getElementById("activeProductTitle");
        activeImageTitle.innerHTML = "Product active not found"; // Clear previous
        //alert("Fn: showProductsDetails - Product not found");/*  */
        return;
    }

    //const selectedProduct = product.filter(product => product.id === Number(productId)); /*  && productX.id === Number(productId) */
    //console.log("Fn: showProductsDetails - slectedProduct = selectedCategory.find", selectedProduct);

    const $activeProduct_gallery = document.getElementById("activeProduct_gallery");
    $activeProduct_gallery.innerHTML = ""; // Clear previous content /**/

    const activeProductImage = document.getElementById("activeProductImage");
    activeProductImage.setAttribute("src", product.images[0]);
    activeProductImage.setAttribute("alt", product.name);

    const activeProductName = document.querySelector(".activeProductName");
    activeProductName.textContent = product.name;

    const activeProductDescription = document.querySelector(".activeProductDescription");
    activeProductDescription.textContent = product.description;

    const activeProductPrice = document.querySelector(".productPrice");
    activeProductPrice.textContent = `$${product.price}`;

    let dataSet_productActiveDetail = 0;

    /*const $activeProduct_gallery = document.getElementById("activeProduct_gallery");*/

    product.images.forEach(image => {

        const activeProductGallerySelector = document.createElement("div");
        activeProductGallerySelector.setAttribute("class", "activeProductGallerySelector");

        /*const activeProduct_gallery = document.getElementById("activeProduct_gallery");*/
        if (dataSet_productActiveDetail === 0) {
            activeProductGallerySelector.classList.add("activeProductGallerySelector--active");
        };
        dataSet_productActiveDetail++
        activeProductGallerySelector.classList.add("data-activeProductGallery",dataSet_productActiveDetail);

        $activeProduct_gallery.appendChild(activeProductGallerySelector);
        
        const productImage = document.createElement("img");
        productImage.setAttribute("src", image);
        productImage.setAttribute("class", "activeImg_thumbnails");
        productImage.setAttribute("onclick", `showLargeImage('${image}')`);
        activeProductGallerySelector.appendChild(productImage);
    });

    const $activeProductGallerySelector = document.querySelectorAll(".activeProductGallerySelector")
    console.log("Fn: showProductDtails - activeProduct_gallery ",$activeProduct_gallery)
    //console.log("Fn: showProductDtails - activeProductGallerySelector ",$activeProductGallerySelector)

    /*productDetailsDiv.appendChild(productName);
    productDetailsDiv.appendChild(productDescription);
    productDetailsDiv.appendChild(productPrice);
    productDetailsDiv.appendChild(productImagesDiv);*/
};


activeProduct_gallery.addEventListener("click", function (event) {
    const target = event.target.closest(".activeProductGallerySelector");
    if (target) {
        const dataSet_productsValue = target.getAttribute("data-activeProduct_gallery");

        console.log("activeproduct_gallery-Event", activeProduct_gallery)

        //showProductsByCategory(dataCategories[dataSet_productsValue].name);
        //showProductDetails(dataCategories[dataSet_productsValue].name,1) // Show first product by default


        //console.log(dataCategories[dataSet_productsValue].name);
        //console.log(dataProducts.itemProducts);

        //console.log("Selected dataset value:", dataSet_productsValue);
        const galleryProductByCategorySelectors = document.querySelectorAll(".activeProductGallerySelector");
        galleryProductByCategorySelectors.forEach(selector => {
            selector.classList.remove("activeProductGallerySelector--active");
        });
        target.classList.add("activeProductGallerySelector--active");
    }
});/**/

function showLargeImage(imageSrc) {
    const activeProductImage = document.getElementById("activeProductImage");
    activeProductImage.innerHTML = ""; // Clear previous content 

    /*const largeImage = document.createElement("img");*/
    activeProductImage.setAttribute("src", imageSrc);
    /*activeProductImage.setAttribute("class", "largeImage");*/

    /*largeImageDiv.appendChild(largeImage);*/
};

window.showCategories = showCategories;
window.showProductsByCategory = showProductsByCategory;
window.showProductDetails = showProductDetails;
window.showLargeImage = showLargeImage

window.onload = showProductsByCategory("Cocinas"); // Show products by default category
window.onload = showProductDetails("Cocinas", 1); // Show categories by default category