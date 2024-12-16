function getProductDetails(productId, successCallback, errorCallback) {
  //мок база даних
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Tablet", price: 400 },
  ];

  const product = products.find((p) => p.id === productId);

  if (product) {
    successCallback(product);
  } else {
    errorCallback("Product not found.");
  }
}

function successCallback(product) {
  console.log("Product details:", product);
}

function errorCallback(errorMessage) {
  console.error(errorMessage);
}

getProductDetails(1, successCallback, errorCallback); // Успішний випадок
getProductDetails(5, successCallback, errorCallback); // Помилка: товар не знайдений
