'usestrict'

class Main {
    constructor() {
        this.manager = new GameManager();
    }

    start(){
        // ゲームスタート
        this.manager.start();

        const field = document.querySelector('#js-field');
        
        // Player生成
        const width  = 50;
        const height = 50;
        const left   = (field.clientWidth * 0.5) - (width * 0.5)
        const top    = field.clientHeight * 0.8;
        const player = new Player(field, width, height, left, top);
        this.manager.addItem(player);
        player.createElement();

        // keydownイベント設定
        const body = document.querySelector('body');
        body.addEventListener('keydown', e => {
            switch(e.keyCode) {
                case 32: // スペースキー入力
                    const bw = 10;
                    const bh = 20;
                    const bl = player.left + (player.width * 0.5) - (bw * 0.5);
                    const bt = player.top - (bh * 2);
                    const bullet = new Bullet(field, bw, bh, bl, bt, -5);
                    this.manager.addItem(bullet);
                    bullet.createElement();
                    break;
                case 37:　// 左キー入力
                    player.move(-10, 0);
                    break;
                case 39: // 右キー入力
                    player.move(10, 0);
                    break;
                default:
                    break;
            }
        });

        // Enemy生成
        this.enemyTimer = setInterval(() => {
            const eLeft = getEnemyLeft();
            const enemy = new Enemy(field, 50, 50, eLeft, 10, 0.5);
            enemy.createElement();
            this.manager.addItem(enemy);
        }, 3000);
    }

    stop() {
        // ゲームオーバー
        this.manager.stop();
        clearInterval(this.enemyTimer);
    }
}

// min以上、max未満の整数を取得する
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Enemyの出現位置を取得する
function getEnemyLeft() {
    const field  = document.querySelector('#js-field');
    const piece  = field.clientWidth / 5;
    const index  = getRandomInt(0, 5);
    // TODO: Enemyの幅調整値(25)を動的に取得できるようにする
    return (piece * index) + (piece * 0.5) - 25;
}

const main = new Main();

const startBtn = document.querySelector('#js-start-btn');
const resetBtn = document.querySelector('#js-reset-btn');
const stopBtn  = document.querySelector('#js-stop-btn');

startBtn.addEventListener('click', e => {
    buttonControl(true);
    main.start();
});

resetBtn.addEventListener('click', e => {
    buttonControl(true);
    location.reload();
});

stopBtn.addEventListener('click', e => {
    buttonControl(false);
    main.stop();
});

function buttonControl(isStart) {
    if(isStart) {
        startBtn.disabled = true;
        startBtn.style.display = 'none';
    
        resetBtn.disabled = true;
        resetBtn.style.display = 'none';
    
        stopBtn.disabled = false;
        stopBtn.style.display = 'block';
    } else {
        startBtn.disabled = false;
        startBtn.style.display = 'block';
    
        resetBtn.disabled = false;
        resetBtn.style.display = 'block';
    
        stopBtn.disabled = true;
        stopBtn.style.display = 'none';
    }
}