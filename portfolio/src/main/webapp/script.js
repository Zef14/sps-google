// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addRandomImage() {
  const images =
      [<img src="images/image_1.jpg" />, <img src="images/image_2.jpg" />, <img src="images/image_3.png" />, <img src="images/image_4.jpg" />,<img src="images/image_5.jpg" />];

  // Pick a random image.
  const image = images[Math.floor(Math.random() * images.length)];

  // Add it to the page.
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerText = image;
}