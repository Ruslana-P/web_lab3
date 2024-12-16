const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

function applyDiscount(medicines) {
  return medicines.map((medicine, index) => {
    const discountedPrice =
      medicine.price > 300 ? medicine.price * 0.7 : medicine.price;
    return {
      ...medicine,
      price: discountedPrice,
      id: index + 1,
    };
  });
}

console.log(applyDiscount(medicines));
