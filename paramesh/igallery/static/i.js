let Index=0;
var Images=[
    {player: "steveh.jpg",name:"STEVE HARRIGNTON"},
    {player: "dustin.jpg",name:"DUSTIN HENDERSON"},
    {player: "eleven.jpg",name:"ELEVEN"},
    {player: "max.jpg",name:"MAX MAYFIELD"},
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
