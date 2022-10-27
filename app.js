"use strict";
const productPriceUnite1 = parseInt(
   document.getElementById("phone-price").innerHTML.slice(1)
);

const productPriceUnite2 = parseInt(
   document.getElementById("case-price").innerHTML.slice(1)
);

const TotalProductPrice = function () {
   const subTotal = document.getElementById("sub-total");
   console.log("🚀 ~ productPrice ~ subTotal", subTotal);
   const tax = document.getElementById("tax");
   const total = document.getElementById("total");

   const phonePrice = parseInt(
      document.getElementById("phone-price").innerHTML.slice(1)
   );
   const casePrice = parseInt(
      document.getElementById("case-price").innerHTML.slice(1)
   );
   subTotal.innerHTML = phonePrice + casePrice;

   tax.innerHTML = Math.round(Number(subTotal.innerHTML) * 0.1);

   total.innerHTML = Math.round(
      Number(subTotal.innerHTML) + Number(tax.innerHTML)
   );
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

   TotalProductPrice();
};
