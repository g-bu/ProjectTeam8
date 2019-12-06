Team 8 Class Shortcut Tool 

This app helps students navigate between certain buildings at BCIT and gives info about each one. 
Includes the navigation page, information page and recent locations.

The top level contains these files:

index.html (landing page, login page)
main.html (main page after authentication, navigation page, information page)
page2.html (navigation input with recent locations)
readme.txt

It has the following subfolders:

images:
        interactive.jpg:        a base image of the school with paths.
        logo.png:               our custom made logo.
        se12se14.jpg:           an outlined path from se12 to se14 with placemarkers.
        SE12SE14info.jpg:       step by step directions from se12 to se14.
        sw5se12.jpg:            an outlined path from se5 to se12 with placemarkers.
        SW5SE12info.jpg:        step by step directions from se5 to se12.
        sw5se14.jpg:            an outlined path from se5 to se14 with placemarkers.
        SW5SE14info.jpg:        step by step directions from se5 to se14.
        
        
        
scripts:
        authbody.js:       logs you in and confirms email, takes you to the main page.
        create_user.js:    creates a user with name and email. Logs the user in and stores their info in firebase.
        dbConfig.js:       The API key for firebase to work.
        dummy.js:          the functions to display the info about each place_marker.
        page2.js:          the function takes you to the recent location when key is pressed, then grabs you the directions for your path.      

style:
       index.css:       sets the styling for the landing and login page (container, logo, etc.).
       main.css:        sets the style for the main page. Includes the header, map with place markers, etc.
       page2.css:       sets the style for the page2 (navigation input page with recent locations). Includes header and container for recent and favorite locations, etc.




Authors:  
          Jeffry Lam Tang
          Grace Bu
          Robert Wilson
