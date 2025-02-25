function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_qolfq4n',
        'template_gffa09s',
        event.target,
        'sVUQa0-M7eQsK6VdQ'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The email service is temporarily unavailable. Please contact me directly at shanonwinkelman@yahoo.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() { 
    if (isModalOpen) {
        isModalOpen= false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open"
}