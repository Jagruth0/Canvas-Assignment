### Steps to run code locally
1. Make sure you have the latest version of Node VSCode installed.
  
2. Open Terminal and Navigate to the code directory.
  
3. Install dependencies
`npm install`

4. Start the server
`npm run dev`

5. Open browser and head over to the local address shown (usually http://localhost:5173/).

6. After loading the page choose an image file by clicking on the button to the left of webpage(A sample image is provided in /src/assets).

7. You can change the brush radius by sliding the slider on the left.

8. After you're done creating mask, click on save button.

9. To restart/select another image file restart the webpage.


### Libraries used
**react-canvas-draw**

**bootstrap**(for quick flexbox/grid styles)

### Challenges faced
During the assignment I got across a problem where adjusting the canvasHeight and canvasWidth properties to image height and width throws an error. Later I've realized that this is caused by the inital state defined for height and width variables(initial states being too low i.e sub 200). I've rectified after going through a couple of forums online.
  
Also this is my first time working on image as a main elemnt in react projects. I got to learn various methods involving images through this assignment.
