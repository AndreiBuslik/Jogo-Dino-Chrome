let dino = document.querySelector('.dino');
let background = document.querySelector('.background');
let position = 0;
let isJumping = false;
const wd = window.screen.width;
let gameOver = false;


function handleKeyUp(event){

    if(event.keyCode === 32){

        if(!isJumping){

            jump();

        }

    }

    if(event.keyCode === 13){

        position = 0;
        isJumping = false;
        let h1 = document.querySelector('.gameOver');
        console.log(h1);
        h1.remove();
        gameOver = false;
        dino = document.createElement('div');
        dino.classList.add('dino');
        background = document.createElement('div');
        background.classList.add('background');
        background.appendChild(dino);
        document.body.appendChild(background);
        console.log(background);
        console.log(document.body.innerHTML);
        dino.style.bottom = position + 'px';
        //creatCactus();

    }

}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {

        if(position >= 150){

            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if(position <= 0){

                    clearInterval(downInterval);
                    isJumping = false;

                }

                else{

                    position -= 20;
                    dino.style.bottom = position + 'px';

                }

            }, 20);

        }

        else{
            
            position += 20;
            dino.style.bottom = position + 'px';
        
        }

    }, 20);

}

function creatCactus(){

    if(gameOver){

        return;

    }

    const cactus = document.createElement('div');
    let cactusPosition = wd;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
    console.log(cactus);
    let leftInterval = setInterval(() => {

        if(cactusPosition < - 60){

            clearInterval(leftInterval);
            background.removeChild(cactus);

        }

        else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){

            document.body.innerHTML = '<h1 class="gameOver">Fim de jogo</h1>';
            gameOver = true;


        }

        else{

            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';

        }

    }, 20);

    setTimeout(creatCactus, randomTime);

}

creatCactus();
document.addEventListener('keyup', handleKeyUp);