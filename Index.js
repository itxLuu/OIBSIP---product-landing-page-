let currentIndex = 0;
const images = document.querySelectorAll('#image-slider');

function showImage (index) {
    images.forEach(image => image.computedStyleMap.display= "none");
    images[index].computedStyleMap.display="block";

}

function nextImage () {
    currentIndex=(currentIndex + 1) % images,length;
    showImage(currentIndex);
}

//show the first image 
showImage(currentIndex);

//Interval for the images 
setInterval(nextImage, 3000);

// form Submition 

const form = document.getElementById('#contact-us');
form.addEventListener('submit',function(event) {
    event.preventDefault(); // prevent default form submition 
    
    alert("Your message has been sent! We'll get back to you soon");
    form.reset(); // reset form input fields 
});