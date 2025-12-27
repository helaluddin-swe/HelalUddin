const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid].id === target) {
      return mid;
    } else if (arr[mid].id > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    } 
  }
  return -1
};
// test case-01
// const test=[1,2,3,4,5,6,7]
// const targetTest=5
// console.log(binarySearch(test,targetTest))

// test case-02: ecommerce price searchin
const orders = [
  { id: 1001, customer: "Rahim", total: 1200 },
  { id: 1005, customer: "Karim", total: 3500 },
  { id: 1010, customer: "Helal", total: 2200 },
  { id: 1020, customer: "Ayesha", total: 5000 },
  { id: 1035, customer: "Sadia", total: 1800 }
];
const target=1020

const order =binarySearch(orders, target);

if (order) {
  console.log("Order Found:");
  console.log(order);
} else {
  console.log("Order Not Found");
}

// // Inventory Management – SKU Search ⭐⭐⭐⭐⭐
// const skus = ["A100", "A200", "A350", "B100", "C200"];
// console.log(binarySearch(skus, "A200"))

// // 5️⃣ Banking – Transaction ID Search ⭐⭐⭐⭐⭐
// const transactions = [101, 150, 200, 260, 310, 400];
// console.log(binarySearch(transactions, 260))

/*Binary search is used when data is sorted and fast lookup is required.
It reduces the search space by half on each iteration, giving O(log n) time complexity.
It is widely used in databases, operating systems, and large-scale systems.”*/