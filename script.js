function generate() {
const districts = [
  "District 1 - Luxury",
  "District 2 - Masonry",
  "District 3 - Electronics",
  "District 4 - Fishing",
  "District 5 - Power",
  "District 6 - Transportation",
  "District 7 - Lumber",
  "District 8 - Textiles",
  "District 9 - Grain",
  "District 10 - Livestock",
  "District 11 - Agriculture",
  "District 12 - Coal Mining",
  "District 13 - Nuclear Weapons (obliterated)"

  ];
  const name = document.getElementById("name").value;
  const randomDistrict = districts[Math.floor(Math.random() * districts.length)];
  const output = document.getElementById("output");
  output.innerHTML = ` ${name}, you belong to ${randomDistrict}!`;

}

function restyle() {
  const output = document.getElementById("output");
  const styles = ["color", "font-size", "text-decoration"];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
}


