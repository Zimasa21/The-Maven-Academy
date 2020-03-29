
let carts = document.querySelectorAll('.Add-to-enquiry');



for (let i=0; i < carts.length; i++) {
    carts(i).addEventListener('click',() => {
        console.log('Add to enquiry');
    })
}

