window.addEventListener("load", function(){
    //canvas setup
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const overlay = document.querySelector(".overlay");
    const deviceDisplay = document.querySelector("#deviceName");
    canvas.width = 1000;
    canvas.height = 500;


class Utilities{
    constructor(game){
        this.game = game;
    }

    sendMail(){
        this.game.gameStart = false;
        let email  = prompt("what is your email?");
        let name  = prompt("what is your name?");
    
     if (email === "" && name === "") {
         // user pressed OK, but the input field was empty
         alert("Fields Cannot be empty!");
        // localStorage.setItem("king_isVerified", false);
       
     }else if(email && name){

        // user typed something and hit OK

        if(this.validateEmail(email)){
            alert("E-mail Verified, Enjoy!");
            this.game.gameStart = true;
            this.game.gameTime = 0;
            localStorage.setItem("king_isVerified", true);
            localStorage.setItem("king_email", email);
            
            localStorage.setItem("king_name", name);
            
             var templateParams = {
             to_name: name,
             from_name: 'Onuoha Kingsley',
             message: "Hi, bro",
             reply_to : email,
             device: this.isMobile()[1] || this.isMobile()[2],
             browser: this.isMobile()[3]
         };
          
         emailjs.send('service_491d0wd', 'template_awbuezh', templateParams)
             .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
            
        }else{
            alert("Invalid E-mail!!");
            
        }
        
    }else{
        // user hit cancel
        alert("Fields are Required!!");

// localStorage.setItem("king_isVerified", false);

     }

    }
    showPrompt(){

    }
    validateEmail(email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
      }
   
      isMobile(){
        let check = false;
        let device = navigator.userAgent.match(/^[^\(]+\((\w+)/)[1];
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        if (check) {
            var md = new MobileDetect(window.navigator.userAgent);
            var os = md.os(),
            browser = md.userAgent();
            if (md.is('iPhone')) {
                os = "Iphone";
            }

    // console.log( md.mobile() ); // null if not mobile device
    // console.log( md.phone() ); // null if not smartphone
    // // console.log( md.tablet() ); // null if not tablet
    // // console.log( md.userAgent() ); // Browser used. Chrome, Firefox, Dolfin, etc...
    // // console.log( md.os() ); // Android, iOS, Windwows, OSX, or Linux
    // // console.log( md.version('Webkit') ); // Webkit version
    // // console.log( md.versionStr('Build') ); // Build
    // alert( "browser "+md.userAgent() ); // Browser used. Chrome, Firefox, Dolfin, etc...
    // alert( "os: "+md.os() ); // Android, iOS, Windwows, OSX, or Linux
            
        }
        return [check, device, os , browser];
      }
}
    
class InputHandler{
    constructor(game){
        this.game = game ;
       
        window.addEventListener("keydown", e => {
            if(((e.key === "ArrowUp") || (e.key === "ArrowDown") ) && this.game.keys.indexOf(e.key) === -1){
                this.game.keys.push(e.key);
            } else if(e.key === " "){
                this.game.player.shootTop();
            }else if(e.key === "d"){
                this.game.debug =  !this.game.debug;
            }else if(e.key === 'q' && e.ctrlKey){
                this.game.cheat = true;
                console.log("cheat activated");
            
            }else if(e.ctrlKey && e.shiftKey && e.key === 'E'  ){
                this.game.endless = true;
                console.warn("Endless activated");
            
            }else if( e.key === '/'  ){
                this.game.notification.instructions();
            }else if(e.key === 'm'){
                this.game.gameStart = !this.game.gameStart;
                console.log('paused');
            }else if (e.key == 'p'){
             
            }
            // console.log(e);
            
        });
        
        // console.info(this.controls, "color:green");
        
        
        window.addEventListener("keyup", e =>{
            if(this.game.keys.indexOf(e.key) > -1){
                this.game.keys.splice(this.game.keys.indexOf(e.key), 1)
            }
            // console.log(this.game.keys);
        })
        
        // this.game.notification.instructions();
    }

    // write(context){
    //     context.fillStyle = 'pink';
    //     context.shadowOffsetX = 2;
    //     context.shadowOffsetY = 2;
    //     context.shadowColor = "black";
    //     this.fontFamily = "Bangers";
    //     context.font = "18px " + this.fontFamily;
    //     // context.fillStyle = 'yellow';
    //     context.fillRect( this.game.width * 0.76, -2, 300, 40);
    //     context.fillText("cheat activated!!", this.game.width * 0.83, this.game.height * 0.04 )
    // }
}
class Notification {
    constructor(game){
        this.game = game
        this.sendNoti("this is title", "this is body");
        console.log("%c press the '?' key o your keyboard to see game detais on the console ",  "color:white; opacity:0.7;border:2px solid white; background:black; width:fit-content; padding:6px")
    }
    sendNoti(title, body){

    }
    instructions(){
        this.controls = [
            ["Up Arrow","Move player Upward"],
            ["Down Arrow","Move player Downward"],
            ["Space","Shoot ProJectiles"],
            [ "ctrl + d" , "Activate Debug Mode"],
            [ "M" , "Pause"],
             ["ctrl + shift e","Activate Endless Mode"],
         ]
         this.instruction = "you have been invaded by an alien race who wants tp take over your planet, so its left to you to save the day and restore sanity to your land";
         this.about = [
            ["Developer:", "Onuoha Kingsley"],
            ["Email:", "kingonuoha01@gmail.com"],
            ["whatsapp:", "0809 077 5994"]
         ]
         this.closure = "Thanks for playing my game, \nHope you enjoyed it, and also the MOD version of the game is available, just DM me on whatsapp and i will give you the key codes for the Cheat Version, Ciao"
          // consoling out the shorcut keys available in the game 
        console.clear()
        console.log("%c Welcome to Steam Punk Game", "color:Yellow;text-shadow: 2px 2px blue, 4px 4px red,6px 6px orange; font-size:20px;border-bottom:2px solid white");
        console.info("%c Game Controls", "color:green; font-size:16px;border-bottom:2px solid white");
        for (let i = 0; i < this.controls.length; i++) {
            const ctrl = this.controls[i];
            console.log("%c "+ctrl[0], "color:orange")
            console.log("%c "+ctrl[1], "color:white; opacity:0.7; margin-bottom:10px;")
        }
        //instructions 
        console.info("%c About Game", "color:green; font-size:16px;border-bottom:2px solid white");
        console.log("%c"+this.instruction, "color:orange; border:2px solid white; background:black;padding:5px;")
        //About 
        console.info("%c About Developer", "color:green; font-size:16px;border-bottom:2px solid white; margin-bottom:10px");
        for (let i = 0; i < this.about.length; i++) {
            const ctrl = this.about[i];
            console.log("%c "+ctrl[0], "color:orange")
            console.log("%c "+ctrl[1], "color:white; opacity:0.7;border:2px solid white; background:black; width:fit-content; padding:6px")
        }
        //closure 
        console.log("%c "+this.closure, "color:#bb3704; font-weight:800; border-radius:5px; box-shadow:0px 0px 22px yellow; opacity:0.7;border:2px solid grey; background:#c0c4b5; width:110%; padding:6px")
    }
}
class ModCheat {
    constructor(game){
        this.game = game ;
        // this.player = player ;
        
    }
    cheatControls(){
        if(this.game.cheat){
            // console.log('cheat Activated')
            window.addEventListener("keydown", e => {
            //     if(((e.key === "ArrowUp") || (e.key === "ArrowDown") ) && this.game.keys.indexOf(e.key) === -1){
            //         this.game.keys.push(e.key);
            //     } 
            // //     else 
            if(e.key === "a"){
                this.game.ammo = 1000;
                this.game.maxAmmo = 1000;
                }else if(e.key === "p"){
                    this.game.player.powerUp = true;
                    this.game.player.powerUpLimit = 50000;
                }
                // if(e.key === "d"){
            //         this.game.debug =  !this.game.debug;
            //     }else if(e.key === 'q' && e.ctrlKey){
            //         this.game.cheat = true;
            //     }
            // // console.log(e);
            });
            // this.game.
        }
    }
}
class Projectile{
 constructor(game, x, y){
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 3;
    this.speed = 5;
    this.markedForDeletion = false;
    this.image = document.getElementById("projectile");

 }
 update(){
    this.x += this.speed;
    if(this.x > this.game.width * 0.8) this.markedForDeletion = true;
 }
 draw(context){
    // context.fillStyle = 'yellow';
    // context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y);
 }
}
class Particle{
    constructor (game, x, y){
        this.game = game;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('gears');
        this.frameX = Math.floor(Math.random() * 3 );        
        this.frameY = Math.floor(Math.random() * 3 );  
        this.spriteSize = 50;
        this.sizeModifier =  (Math.random() * 0.5 + 0.5).toFixed(1);
        this.size = this.spriteSize * this.sizeModifier;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * -15;
        this.gravity = 0.5;
        this.markedForDeletion =  false;
        this.angle  = 0;
        this.va = Math.random() * 0.2 - 0.1;
        this.bounced = 0;
        this.bottomBounceBoundary = Math.random() * 80 + 60 ;//100;
    }

    update(){
        this.angle += this.va;
        this.speedY += this.gravity;
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if(this.y > this.game.height + this.size || this.x < 0 - this.size) this.markedForDeletion = true;
        if(this.y > this.game.height - this.bottomBounceBoundary && this.bounced < 2){
            this.bounced++;
            this.speedY *= -0.5; 
        }
    }


    draw(context){
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.size * -0.5, this.size * -0.5, this.size, this.size)
        context.restore();
    }
}
class Player{
 constructor(game){
    this.game = game;
    this.width = 120;
    this.height = 190;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;
    this.x = 20
    this.y = 100;
    this.speedY = 0;
    this.maxSpeed = 3;
    this.projectiles = [];
    this.image = document.getElementById('player');
    this.powerUp = false;
    this.powerUpTimer = 0;
    this.powerUpLimit = 10000
 }
 update(deltaTime){
    if(this.game.keys.includes("ArrowUp"))this.speedY = -this.maxSpeed;
    else if (this.game.keys.includes("ArrowDown"))this.speedY = this.maxSpeed;
    else this.speedY = 0
    this.y += this.speedY;
    //vertical boundries
    if(this.y > this.game.height - this.height * 0.5) this.y = this.game.height - this.height * 0.5;
    else if( this.y < -this.height * 0.5) this.y = -this.height * 0.5
    //handle projectiles 
    this.projectiles.forEach(projectile => {
        projectile.update();
    })

    this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDeletion)
    //sprite animation
    if (this.frameX < this.maxFrame) {
        this.frameX++
    }else{
        this.frameX = 0;
    }
    //power up 
    if(this.powerUp){
        if(this.powerUpTimer > this.powerUpLimit){
            this.powerUpTimer = 0;
            this.powerUp = false;
            this.frameY = 0;
        }else{
            this.powerUpTimer += deltaTime;
            this.frameY = 1;
            this.game.ammo += 0.1;
        }
    }
 }
 draw(context){
    // context.fillStyle = 'green';
    this.projectiles.forEach(projectile => {
        projectile.draw(context);
    })
   if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height )
   
 }
 shootTop(){
    //creating limited ammo for player 
    if (this.game.ammo > 0) {
        this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30));
        this.game.ammo--;
        // console.log(this.projectiles);
    }
    if(this.powerUp) this.shootBottom();
 }
 shootBottom(){
      //creating limited ammo for player 
      if (this.game.ammo > 0) {
        this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 175));
        this.game.ammo--;
        // console.log(this.projectiles);
    }
 }
 enterPowerUp(){
    this.powerUpTimer = 0;
    this.powerUp = true;
    if(this.game.ammo < this.game.maxAmmo)this.game.ammo = this.game.maxAmmo;
 }
}
class Enemy{
 constructor(game){
    this.game = game;
    this.x = this.game.width;
    this.speedX = Math.random() * -1.5 - 0.5
    this.markedForDeletion = false;
   
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;
 }
 update(){
    this.x += this.speedX - this.game.speed;
    if (this.x + this.width < 0 ) this.markedForDeletion = true;
    //sprite animation 
    if(this.frameX < this.maxFrame){
        this.frameX++
    }else this.frameX = 0;
  }
  draw(context){
    // context.fillStyle = "red";
    if(this.game.debug)context.strokeRect(this.x, this.y, this.width, this.height);
    // context.fillStyle = "black"
    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height );
    if(this.game.debug){
    context.font = "20px Helvetica";
    context.fillText(this.lives, this.x, this.y );
    }
  }
}
class Angler1 extends Enemy{
    constructor(game){
        super(game);
        this.width = 228 ;
        this.height = 169 ;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler1')
        this.frameY = Math.floor(Math.random() * 3)
        this.lives = 5;
        this.score = this.lives;
    }
}
class Angler2 extends Enemy{
    constructor(game){
        super(game);
        this.width = 213 ;
        this.height = 165 ;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler2')
        this.frameY = Math.floor(Math.random() * 2)
        this.lives = 6;
        this.score = this.lives;
    }
}
class LuckyFish extends Enemy{
    constructor(game){
        super(game);
        this.width = 99 ;
        this.height = 95 ;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('lucky')
        this.frameY = Math.floor(Math.random() * 2)
        this.lives = 5;
        this.score = 15;
        this.type = "lucky";
    }
}

class HiveWhale extends Enemy{
    constructor(game){
        super(game);
        this.width = 400 ;
        this.height = 227 ;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('hivewhale')
        this.frameY = 0
        this.lives = 20;
        this.score = this.lives;
        this.type = "hive";
        this.speedX = Math.random() * -1.2 - 0.2;
    }
}
class Drone extends Enemy{
    constructor(game, x, y){
        super(game);
        this.width = 115 ;
        this.height = 95 ;
        this.x  = x;
        this.y = y;
        this.image = document.getElementById('drone')
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 2;
        this.score = this.lives;
        this.type = "drone";
        this.speedX = Math.random() * -4.2 - 0.5;
    }
}

class Layer{
    constructor(game, image, speedModifier){
        this.game = game;
        this.image = image;
        this.speedModifier = speedModifier;
        this.width = 1768;
        this.height = 500;
        this.x = 0;
        this.y = 0;
    }
    update(){
        if(this.x <= -this.width) this.x = 0;
         this.x -= this.game.speed * this.speedModifier
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y);
        context.drawImage(this.image, this.x + this.width, this.y);
    }
}

class Background{
 constructor(game){
    this.game = game;
    this.image1 = document.getElementById("layer1");
    this.image2 = document.getElementById("layer2");
    this.image3 = document.getElementById("layer3");
    this.image4 = document.getElementById("layer4");
    this.layer1 = new Layer(this.game, this.image1, 0.2)
    this.layer2  = new Layer(this.game, this.image2, 0.4)
    this.layer3 = new Layer(this.game, this.image3, 1)
    this.layer4 = new Layer(this.game, this.image4, 1.5)
    this.layers = [this.layer1, this.layer2, this.layer3];
 }
 update(){
    this.layers.forEach(layer => layer.update());
 }
 draw(context){
    this.layers.forEach(layer => layer.draw(context));
 }

}
class Explosion{
    constructor(game, x, y){
        this.game = game;
        this.x = x;
        this.y = y;
        this.frameX = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.timer = 0;
        this.fps = 30
        this.interval = 1000/this.fps;
        this.markedForDeletion = false;
        this.maxFrame = 8;

    }
    update(deltaTime){
        this.x -= this.game.speed;
        if(this.timer > this.interval){
            this.frameX++;
            this.timer = 0;

        }else{
            this.timer += deltaTime;
        }
        if (this.frameX > this.maxFrame) {
         this.markedForDeletion = true;   
        }
    }
    draw(context){
    context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}
class SmokeExplosion extends Explosion{

    constructor(game, x, y){
        super(game, x, y);
        this.image = document.getElementById("smokeExplosion");
    }
}
class FireExplosion extends Explosion{
    constructor(game, x, y){
        super(game, x, y);
        this.image = document.getElementById("fireExplosion");
    }
}
class UI{
 constructor(game){
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Bangers";
    this.color = "white";
 }
 draw(context){
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    //score
    context.font = this.fontSize+"px "+ this.fontFamily;
    context.fillText("Score: "+this.game.score, 20, 40)
    
    //game time
    const formattedTime = (this.game.gameTime * 0.001).toFixed(1);
    context.fillText("Timer: " + formattedTime, 20, 100)
    //game over messages
    if(this.game.gameOver){
        context.textAlign = "center";
        let message1;
        let message2;
        if(this.game.score > this.game.winningScore || this.game.won){
            message1 = "Most Wondrous!";
            message2 = "Well done Explorer!"
        }else{
            message1 = "Blazes!";
            message2 = "Get my repair kit and try again!"
        }
        context.font = "70px " + this.fontFamily;
        context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 20)
       
        context.font = "25px " + this.fontFamily;
        context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 20)
    }
  
    //ammo
    if(this.game.player.powerUp) context.fillStyle = "#ffffbd"
    for (let i = 0; i < this.game.ammo; i++) {
        context.fillRect(20 + 5 * i, 50, 3, 20);
    }
    context.restore();
 }
}
class Game{
constructor(width, height){
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.ui = new UI(this);
    this.background = new Background(this)
    this.mod = new ModCheat(this, this.player)
    this.notification = new Notification(this);
    this.utilities = new Utilities(this);
    this.keys = [];
    this.enemies = [];
    this.particles = [];
    this.explosions = [];
    this.enemyTimer = 0;
    this.enemyInterval = 2000;
    this.maxEnemyInterval = 400;
    this.ammo = 30;
    this.maxAmmo = 50;
    this.ammoTimer = 0;
    this.ammoInterval = 350;
    this.gameOver = false;
    this.gameStart = true;
    this.score = 0;
    this.winningScore = 80;
    this.won = false;
    this.gameTime = 0;
    this.timeLimit = 40000;
    this.speed = 1;
    this.maxSpeed = 5;
    this.debug = false;
    this.cheat = false;
    this.endless = false;
    this.endlessTimer = 0;
    this.endlessInterval = 2000;
    this.projectilePower = 1;
    this.maxProjectilePower = 5;
    // this.notification.instructions();
}
update(deltaTime){
    //game time 
    if(!this.gameOver)this.gameTime += deltaTime;
    if(this.gameTime > this.timeLimit && !this.endless) this.gameOver =  true;
    this.background.update()
    this.background.layer4.update();
    this.player.update(deltaTime);
    //ammo
    if(this.ammoTimer > this.ammoInterval){
        if (this.ammo < this.maxAmmo) this.ammo++ ;
        this.ammoTimer = 0;
    }else{
        this.ammoTimer += deltaTime
    }
    //particles 
    this.particles.forEach(particle => particle.update());
    this.particles = this.particles.filter(particle => !particle.markedForDeletion)
    //explosion
    this.explosions.forEach(explosion => explosion.update(deltaTime));
    this.explosions = this.explosions.filter(explosion => !explosion.markedForDeletion)
    //enemies
    this.enemies.forEach(enemy =>{
        enemy.update();
        if(this.checkCollison(this.player, enemy)){
            enemy.markedForDeletion = true; 
            this.addExplosion(enemy)
            for (let i = 0; i < enemy.score; i++) {
                this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
               }
            if (enemy.type === "lucky") this.player.enterPowerUp();
            else if(!this.gameOver)this.score--;
        };
        this.player.projectiles.forEach(projectile =>{
            if (this.checkCollison(projectile, enemy)) {
                this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
                //if in endless mode
                if(this.endless) enemy.lives = enemy.lives - this.projectilePower;
                else  enemy.lives--; 
                projectile.markedForDeletion = true;  
                if(enemy.lives <= 0){
                    enemy.markedForDeletion = true;
                    this.addExplosion(enemy)

                    for (let i = 0; i < enemy.score; i++) {
                        this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
                       }
                       if(enemy.type === "hive"){
                        for (let i = 0; i < 5; i++) {
                            this.enemies.push(new Drone(this, enemy.x + Math.random() * enemy.width, enemy.y + Math.random() * enemy.height))
                       
                        }
                       }
                    if(!this.gameOver)this.score += enemy.score;
                    // if(this.score > this.winningScore) this.gameOver = true;
                }
            }
        })
    });
    this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
    if(this.enemyTimer > this.enemyInterval && !this.gameOver){
       this.addEnemy();
       this.enemyTimer = 0;
    }else{
         this.enemyTimer += deltaTime;
    }
    //my own modifications 
    if(this.cheat){
        this.mod.cheatControls()
    }

    if(this.endless && !this.gameOver ){
        this.gameOver = false;
        if(this.endlessTimer > this.endlessInterval){
            if (this.speed < this.maxSpeed) this.speed++ ;
            if (this.enemyInterval > this.maxEnemyInterval) this.enemyInterval = this.enemyInterval - 100;;
            if(this.score > 1000){this.won = true ;
                this.gameOver = true;}
                if(this.projectilePower < this.maxProjectilePower)this.projectilePower = this.projectilePower + 1;
            this.endlessTimer = 0;
            // console.log(this.projectilePower)
        }else{
            this.endlessTimer += deltaTime
        }
       
        // setTimeout(()=>{
        //    if(this.speed < this.maxSpeed){ 
        //     this.speed++
        // }
        //    if(this.enemyInterval > this.maxEnemyInterval){ 
        //     this.enemyInterval = this.enemyInterval - 200;
        // }
        // console.log(this.enemyInterval)
           
        // }, 2000)
    }
    
      
}
draw(context){
    this.background.draw(context)
    this.ui.draw(context);
    // this.input.write(context);
    this.player.draw(context);
    this.particles.forEach(particle => particle.draw(context))
    
    this.enemies.forEach(enemy =>{
        enemy.draw(context);
    });
    this.explosions.forEach(explosion => {
        explosion.draw(context)
    })
    this.background.layer4.draw(context)
}
addEnemy(){
    const randomizer = Math.random();
    // looping through enemies 
    if(randomizer < 0.3) this.enemies.push(new Angler1(this));
    else if(randomizer < 0.6)  this.enemies.push(new Angler2(this));
    else if(randomizer < 0.7)  this.enemies.push(new HiveWhale(this));
    else  this.enemies.push(new LuckyFish(this));
   
    // console.log(this.enemies);
}
addExplosion(enemy){
    const randomizer = Math.random();
    if(randomizer < 0.5){this.explosions.push(new SmokeExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
    // console.log(this.explosions)
    }else{
        this.explosions.push(new FireExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))

}
}
checkCollison(rect1, rect2){
    return ( rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width >  rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height >  rect2.y 
            );
}
}

const game = new Game(canvas.width, canvas.height);


let lastTime = 0;
//animate loop 
function animate(timeStamp) {
    if (!localStorage.getItem("king_isVerified") || localStorage.getItem("king_isVerified") === false) {
         game.utilities.sendMail();
    }
    const deltaTime = timeStamp - lastTime;
    // console.log(deltaTime);
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    if (!game.utilities.isMobile()[0]) {
        if(game.gameStart)game.update(deltaTime);
    }else{
        overlay.style.display = 'flex'
        deviceDisplay.innerText = game.utilities.isMobile()[2]
     }
    requestAnimationFrame(animate)
}

animate(0)
})

