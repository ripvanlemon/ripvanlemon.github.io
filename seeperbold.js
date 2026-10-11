const images = ["images/circles.png",
"images/rays.png",
"images/laetitia.png"
];

document.addEventListener('DOMContentLoaded', _ => {
  const randImageIndex = ~~(Math.random() * images.length);
  document.getElementById('randImg').src = images[randImageIndex];
});