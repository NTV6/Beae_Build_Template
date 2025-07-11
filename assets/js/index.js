const faqItem = document.querySelectorAll(".faq-item");
const faqIcon = document.querySelectorAll(".faq-icon");

for (let i = 0; i < faqItem.length; i++) {
    faqItem[i].addEventListener("click", function () {
        faqItem.forEach((item, index) => {
            item.classList.remove("active")
            faqIcon[index].textContent = "+"
        })

        faqItem[i].classList.add("active")
        faqIcon[i].textContent = "-"
    })
}



const sizeDetailsBtn = document.querySelectorAll(".size-details-btn");
const sizeValue = document.querySelector(".size-value")
const newPrice = document.querySelector(".new-price")
const oldPrice = document.querySelector(".old-price")
const discount = document.querySelector(".discount")

for (let i = 0; i < sizeDetailsBtn.length; i++) {
    sizeDetailsBtn[i].addEventListener("click", function () {
        if (sizeDetailsBtn[i].classList.contains("out-of-stock")) {
            return
        }
        // console.log(` sizeDetailsBtn[i].classList.contains("out-of-stock")`, sizeDetailsBtn[i].classList.contains("out-of-stock"))
        sizeDetailsBtn.forEach(btn => btn.classList.remove("active"))
        sizeDetailsBtn[i].classList.add("active")

        sizeValue.textContent = sizeDetailsBtn[i].textContent

        const price = parseFloat(sizeDetailsBtn[i].dataset.price)
        const old = parseFloat(sizeDetailsBtn[i].dataset.old)

        newPrice.textContent = `$${price.toFixed(2)}`
        oldPrice.textContent = `$${old.toFixed(2)}`

        const percent = Math.floor(((old - price) / old) * 100);
        discount.textContent = `Save ${percent}%`;
    })
}



const btnReduce = document.querySelector(".btn-reduce")
const btnIncrease = document.querySelector(".btn-increase")

btnIncrease.addEventListener("click", function () {
    let inputValue = document.querySelector(".quantity input").value
    inputValue++
    document.querySelector(".quantity input").value = inputValue
})

btnReduce.addEventListener("click", function () {
    let inputValue = document.querySelector(".quantity input").value
    if (inputValue <= 1) {
        return
    }
    inputValue--
    document.querySelector(".quantity input").value = inputValue
})



const showImage = document.querySelector(".show-image")
const closeModal = document.querySelector(".close-modal")
const modalSection = document.querySelector(".modal-section")

closeModal.addEventListener("click", function () {
    modalSection.classList.remove("show-effect");
})
showImage.addEventListener("click", function () {
    modalSection.classList.add("show-effect");
})