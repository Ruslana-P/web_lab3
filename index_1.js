function getShippingMessage(country, price, deliveryFee) {
  if (
    typeof country !== "string" ||
    typeof price !== "number" ||
    typeof deliveryFee !== "number"
  ) {
    return "Invalid arguments. Please try one more with valid params ";
  }

  const totalPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Ukraine", 10, 22));
console.log(getShippingMessage("Poland", 3, 32));
console.log(getShippingMessage("Germany", 9, 392));
