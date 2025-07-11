const faqItem = document.querySelectorAll(".faq-item");
const faqIcon = document.querySelectorAll(".faq-icon");

faqItem.forEach((item, i) => {
    item.addEventListener("click", function () {
        faqItem.forEach((itm, idx) => {
            itm.classList.remove("active");
            faqIcon[idx].textContent = "+";
            const ans = itm.querySelector(".faq-answer");
            console.log("a", ans)
            ans.style.maxHeight = "0";
        });

        item.classList.add("active");
        faqIcon[i].textContent = "-";
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
    });
});



const sizeDetailsBtn = document.querySelectorAll(".size-details-btn");
const sizeValue = document.querySelector(".size-value")
const newPrice = document.querySelector(".new-price")
const oldPrice = document.querySelector(".old-price")
const discount = document.querySelector(".discount")
const btnAddCart = document.querySelector(".btn-add-cart")
const btnBuy = document.querySelector(".btn-buy")



sizeDetailsBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        sizeDetailsBtn.forEach(btn => btn.classList.remove("active"))
        btn.classList.add("active")

        sizeValue.textContent = btn.textContent

        const price = parseFloat(btn.dataset.price)
        const old = parseFloat(btn.dataset.old)

        newPrice.textContent = `$${price.toFixed(2)}`
        oldPrice.textContent = `$${old.toFixed(2)}`


        if (btn.classList.contains("out-of-stock")) {
            discount.textContent = `Sold Out`;
            btnAddCart.textContent = "SOLD OUT"
            btnBuy.style.cursor = "not-allowed"
            btnAddCart.style.cursor = "not-allowed"
            discount.style.backgroundColor = "black"
            btnAddCart.style.backgroundColor = "rgba(226, 190, 176, 1)"
        }
        else {
            const percent = Math.floor(((old - price) / old) * 100);
            discount.textContent = `Save ${percent}%`;
            btnAddCart.style.cursor = "pointer"
            btnBuy.style.cursor = "pointer"
            btnAddCart.style.backgroundColor = "rgb(153, 96, 74)"
            discount.style.backgroundColor = "color(srgb 0.741176 0.0509804 0.0509804)"
        }
    })
})



const btnReduce = document.querySelector(".btn-reduce")
const btnIncrease = document.querySelector(".btn-increase")
function isOutOfStock() {
    return document.querySelector(".size-details-btn.active").classList.contains("out-of-stock");
}

btnIncrease.addEventListener("click", function () {
    let inputValue = document.querySelector(".quantity input").value
    if (isOutOfStock()) {
        return
    }
    inputValue++
    document.querySelector(".quantity input").value = inputValue
})

btnReduce.addEventListener("click", function () {
    let inputValue = document.querySelector(".quantity input").value
    if (inputValue <= 1 || isOutOfStock()) {
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
    setTimeout(() => {
        modalSection.style.display = "none";
    }, 300);
})
showImage.addEventListener("click", function () {
    modalSection.style.display = "block";
    setTimeout(() => {
        modalSection.classList.add("show-effect");
    }, 10);
})