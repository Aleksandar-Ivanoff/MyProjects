function Details(event) {
    event.preventDefault();

    let currentProduct = event.target;
    let parent = currentProduct.parentElement.parentElement.parentElement;
     console.log(parent)
     let productDetails=document.querySelector('#productDetails');
    let price = parent.querySelector('#price');
    let image = parent.querySelector('#image');

    let details = document.querySelector('#details');
    let parentContainer=document.querySelector('.detailsContainer');

    let detailsName = details.querySelector('#detailsName');
    let detailsPrice = details.querySelector('#detailsPrice');
    let detailsImage = details.querySelector('#detailsImage');
    console.log(detailsImage)


    detailsPrice.innerHTML = price.textContent;
    detailsName.innerHTML = currentProduct.textContent;
    detailsImage.setAttribute('src', image.src);


    let page = document.querySelector('#pageContent');
    let header = document.querySelector('#header');
    let footer = document.querySelector('#footer');


    header.style.display = 'none';
    page.style.display = 'none';
    footer.style.display = 'none';
    details.style.display = 'block';
    parentContainer.style.display='block';
    productDetails.style.display='block';





}

function Close(event) {
    event.preventDefault();
    let button = event.target;
    let parent = button.parentElement;
    let page = document.querySelector('#pageContent');
    let header = document.querySelector('#header');
    let footer = document.querySelector('#footer');
    let parentContainer=document.querySelector('.detailsContainer');
    let productDetails=document.querySelector('#productDetails');
    let form=document.querySelector('#contactForm');
    
    parentContainer.style.display='none';
    parent.style.display = 'none';
    header.style.display = 'block';
    page.style.display = 'block';
    footer.style.display = 'block';
    productDetails.style.display='none';
    form.style.display='none'

}
function Purchase(event){
    //let productcontainer=document.querySelector('.detailsContainer');
    let purchase=document.querySelector('#details');
    let container = document.querySelector('.contains');
    let parentContainer=document.querySelector('.detailsContainer');
   
    let parent= event.target.parentElement.parentElement

    let page = document.querySelector('#pageContent');
    let header = document.querySelector('#header');
    let footer = document.querySelector('#footer');
    let details=document.querySelector('.shadow-sm');

    let image=parent.querySelector('.card-img-top');

    header.style.display = 'none';
    footer.style.display = 'none';
    page.style.display = 'none';
    container.style.display='none';
     purchase.style.display='block';
     parentContainer.style.display='block';

     let form=document.querySelector('#contactForm');
     form.style.display='block'
     let productImage = details.querySelector('#productImage');
     productImage.setAttribute('src', image.src);

     console.log(productImage);
     console.log(image.src);
}
function Alert(event){
    event.preventDefault();
   let alert=document.querySelector('.infoBox');
   let container=document.querySelector('.detailsContainer');
   let form=document.querySelector('#contactForm');
   let page = document.querySelector('#pageContent');
   let header = document.querySelector('#header');
   let footer = document.querySelector('#footer');

     container.style.display='none';
     header.style.display = 'block';
    footer.style.display = 'block';
    page.style.display = 'block';
    form.style.display='none';
    alert.style.display='block'

    setTimeout(()=>{alert.style.display='none'},2000)
    
}

