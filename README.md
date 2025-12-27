# Ex.07 Design of Interactive Image Gallery
## Date:26/12/25

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
i.html 

<html>
    <head>
        <title>Gallery</title>
        <link rel="stylesheet" href="i.css">
        <script src="i.js"></script>
    </head>
    <body>
        <div class="head">
            <h1>STRANGER THINGS</h1>
        </div>
        <div class="image">
            <img src="steveh.jpg" id="playerid" width="300" height="300">
            <h3 id="nameid"></h3>
            <div class="button">
                <button onclick="prev()">Previous</button>
                <button onclick="next()">Next</button>
            </div>
            <div class="footer">
             PARAMESHWARAN J (25005306)
            </div>
        </div>
    </body>
</html>

i.css

.image{
    border: solid 3px red;
    width: 430px;
    height: 430px;
    margin: 120px auto;
    background-color:brown;
    border-radius: 10px;
}

.button{
    display: flex;
    justify-content: space-around;
}

h3{
    display: flex;
    justify-content: center;
}

img{
    display: block;
    margin: 20px auto;
    border: solid 10px maroon;
}

body{
    background-image: url(stbg.jpg);
    background-size: cover;
}

.footer{
    position: fixed;
    bottom: 0%;
    width: 100%;
    font-size: large;
    background-color:silver;
    color:crimson;
    text-align: center;
    padding: 5px;
    left: 0%;
}

.head{
    text-align: center;
    font-size: x-large;
    color: beige;
}

i.js

let Index=0;
var Images=[
    {player: "steveh.jpg",name:"STEVE HARRIGNTON"},
    {player: "dustin.jpg",name:"DUSTIN HENDERSON"},
    {player: "eleven.jpg",name:"ELEVEN"},
    {player: "max.webp",name:"MAX MAYFIELD"},
    {player: "will.jpg",name:"WILL BUYERS"},
    {player: "mike.webp",name:"Michael Wheeler"},
];
function prev()
{
    Index--;
    if(Index==0)
        Index=Images.length-1;
    display();
}
function next()
{
    Index++;
    if(Index>=Images.length-1)
        Index=0;
    display();
}
function display()
{
    document.getElementById("playerid").src=Images[Index].player;
    document.getElementById("nameid").innerHTML=Images[Index].name;
}
```

## OUTPUT:
![alt text](<Screenshot (41).png>) ![alt text](<Screenshot (42).png>) ![alt text](<Screenshot (43).png>) ![alt text](<Screenshot (44).png>) ![alt text](<Screenshot (45).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.