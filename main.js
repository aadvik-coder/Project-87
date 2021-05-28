var canvas = new fabric.Canvas('myCanvas');
superhero_x = 10;
superhero_y = 10;
block_width = 30;
block_height = 30;
var hero_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        hero_object = Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(hero_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keyPressed == '70'){
        new_image('ironman_face.png');
        console.log("f");
    }
    if(keyPressed == '66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right")
    }
}