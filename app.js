"use strict";
const productPriceUnite1 = parseInt(
   document.getElementById("phone-price").innerHTML.slice(1)
);
const productPriceUnite2 = parseInt(
   document.getElementById("case-price").innerHTML.slice(1)
);

const totalPrice = function (productPrice) {
   const subTotal = document.getElementById("sub-total");
   const tax = document.getElementById("tax");
   const total = document.getElementById("total");
};

const productHandeler = function (el, status) {
   const productItem = document.getElementById(el + "-item");
   let totalProductItem;
   let productPrice;
   if (status) {
      totalProductItem = parseInt(productItem.value) + 1;
      productItem.value = totalProductItem;
      productPrice =
         totalProductItem *
         (productPrice =
            el === "phone" ? productPriceUnite1 : productPriceUnite2);
   } else {
      if (parseInt(productItem.value) > 0) {
         totalProductItem = parseInt(productItem.value) - 1;
      } else {
         totalProductItem = 0;
      }

      productItem.value = totalProductItem;
      productPrice =
         totalProductItem *
         (productPrice =
            el === "phone" ? productPriceUnite1 : productPriceUnite2);
   }
   document.getElementById(el + "-price").innerHTML = `$ ${productPrice}`;
   totalPrice();
};
