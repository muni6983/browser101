const rabbit_positoin = document.getElementById("rabbit");
const find_rabbit = document.querySelector(".btn");

find_rabbit.addEventListener("click", (event) => {
  rabbit_positoin.scrollIntoView({ behavior: "smooth", block: "center" });
});
