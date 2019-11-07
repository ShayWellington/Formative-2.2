console.log('Phone Comparison Site');

var coll = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var phones = [
  {
    name: "Apple iPhone 11",
    price: "$1649.99",
    description: "A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. And the highest‑quality video in a smartphone makes your memories look better than ever.",
    colours: "Purple, Yellow, Green, Black, White, Red",
    purple: "Yes",
    yellow: "Yes",
    green: "Yes",
    black: "Yes",
    white: "Yes",
    blue: "No",
    red: "Yes",
    gold: "No",
    silver: "No",
    other: "No",
    system: "IOS",
    camera: "Duel 12- megapixel Ultra Wide and Wide Cameras with night mode",
    screen: "6.1\" Liquid Retina HD display",
    capacity: "256GB",
    dimensions: "5.94 x 2.98 x 0.33 inches",
  },
  {
    name: "Apple Iphone XS Max",
    price: "$2049.99",
    description: "Welcome to the biggest screen on an iPhone. 6.5-inch Super Retina display — the largest display ever on an iPhone. 1 Advanced Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual-camera system. iPhone XS Max is everything you love about iPhone and more.",
    colours: "Gold, Silver, Black",
    purple: "No",
    yellow: "No",
    green: "NO",
    black: "Yes",
    white: "No",
    blue: "No",
    red: "No",
    gold: "Yes",
    silver: "Yes",
    other: "No",
    system: "IOS",
    camera: "Duel 12- megapixel wide and Telephoto cameras",
    screen: "6.5\" Super Retina HD display",
    capacity: "64GB",
    dimensions: "6.2 x 3.05 x 0.30 inches",
  },
  {
    name: "Samsung Galaxy A10",
    price: "$194.99",
    description: "Samsung Galaxy A10 Smartphone, a screen with a better view. You'll love to watch videos, play games or scan the internet on the immersive and vibrant 6.2\" HD+ screen. Samsung Galaxy A10\'s Immersive-V Display changes the way you experience your content by putting you right in the action. Featuring a simple design in living colour the Samsung Galaxy A10\'s slender 7.9 mm body feels like it\'s made for your hand. Once it\'s in your grip, you\'ll never let go.",
    colours: "Black, Blue, Gold",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "No",
    blue: "Yes",
    red: "No",
    gold: "Yes",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "13MP rear and 5MP front cameras",
    screen: "6.2\" LCD",
    capacity: "32GB",
    dimensions: "7.56 x .15.56 x 0.79 cm",
  },
  {
    name: "Samsung Galaxy A30",
    price: "$377.99",
    description: "The Samsung Galaxy A30 takes you into midrange territory but you'll think you're in the premium zone thanks to outstanding features and performance.",
    colours: "Black",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "No",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "Duel Back Ultrawide 5MP and 16MP Cameras",
    screen: "6.4\" FHD+ sAMOLED screen",
    capacity: "64GB",
    dimensions: "15.8 x 7.5 x 0.7 cm",
  },
  {
    name: "Huawei Nova 3i",
    price: "$339.99",
    description: "HUAWEI nova 3i provides three colour models for you to choose from, Pearl White, Black and Iris Purple. With beautiful hues of colour on the back glass and metal mid-frame, you will enjoy wonderful visual and handling experience. The 6.3-inch FHD+ (2,340 x 1,080) provides a wide view of your world while fitting in your pocket.",
    colours: "Black, Purple",
    purple: "Yes",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "No",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "24 MP + 2 MP front cameras and 16 MP + 2 MP back cameras",
    screen: "6.3\"",
    capacity: "128GB",
    dimensions: "15.7 x 7.5 x 0.7 cm",
  },
  {
    name: "Google Pixel 3a",
    price: "$729.99",
    description: "Sleek and stylish, the Google Pixel 3a comes with a 5.6” OLED display that takes your viewing experience to a whole new level.",
    colours: "Black, Purple, White",
    purple: "Yes",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "Yes",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "12.2MP Rear camera and 8MP front camera",
    screen: "5.6\" OLED Display",
    capacity: "64GB",
    dimensions: "15.1 x 7 x 0.8 cm",
  },
  {
    name: "Huawei P30 Pro",
    price: "$1499.99",
    description: "Zoom in to explore the mystery of the celestial at night, watch an eagle hovering over trees or examine the delicate details of crystal. Capture the best things happening now and create your vision for the future. The Huawei P30 Pro is accentuating a new peak of smartphone photography.",
    colours: "Breathing Crystal, Aurora, Black",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "No",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "Yes",
    system: "Android",
    camera: "40MP/f1.6 and 20MP read camera ad 8MP front facing camera",
    screen: "6.47\" OLED Display",
    capacity: "256GB",
    dimensions: "7.3 x 15.8 x 0.8 cm",
  },
  {
    name: "Samsung Galaxy Note 10",
    price: "$1699.99",
    description: "With Galaxy Note10 we've designed a mobile experience that’s like a laptop, a gaming console, a movie studio, and an intelligent pen, all in one device.",
    colours: "Black, White",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "Yes",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "4 Rear Wide Angle, Telephoto and Ultra Wide Cameras",
    screen: "6.3\" AMOLED Display",
    capacity: "256GB",
    dimensions: "15.1 x 0.8 x 7.2 cm",
  },
  {
    name: "Google Pixel 2",
    price: "$699.99",
    description: "The Pixel 2 is the sequel to Google’s highly regarded flagship phone. Fine-tuning the Pixel’s gorgeous design and packing in new features, Google Pixel 2 delivers an astounding smartphone.",
    colours: "Blue, Black, White",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "Yes",
    blue: "Yes",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "12.2MP Dual-Led Back camera and 8MP HDR Front camera",
    screen: "5.0\" AMOLED Display",
    capacity: "256GB",
    dimensions: "14.5 x 6.9 x 0.8 cm",
  },
  {
    name: "Huawei Y6 Pro",
    price: "$371.99",
    description: "Discover a new world without boundaries in the 6.09\" HD+ display and capture great pictures with an enhanced selfie camera and powerful main camera with optimised low light performance.",
    colours: "Black",
    purple: "No",
    yellow: "No",
    green: "No",
    black: "Yes",
    white: "No",
    blue: "No",
    red: "No",
    gold: "No",
    silver: "No",
    other: "No",
    system: "Android",
    camera: "13MP Rear camera and 8MP Front Camera",
    screen: "6.09\" HD+",
    capacity: "38GB",
    dimensions: "14.3 x 7.2 x 0.9 cm",
  }
];

// All phones
function allPhones(){
  document.getElementById('phones').innerHTML = " ";
for(var i = 0; i < phones.length; i++) {
  document.getElementById('phones').innerHTML
  +=     '<div class="card a" id="iphone11">'
  +      '<img src="images/iphone11-1.jpg" class="card-img-top" alt="iPhone 11">'
  +          '<div class="card-body">'
  +            '<h5 class="card-title">' + phones[i].name + '</h5>'
  +            '<p class="card-text">' + phones[i].price + '</p>'
  +            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">View More</button>'
  +      '</div>'

  ;
  }
}

allPhones();