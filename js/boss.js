'usestrict'

class Boss extends GameObject {
    constructor(field, width, height, left, top, distance) {
        super(field, width, height, left, top);
        this.distance = distance;
        this.type     = 'boss';
        this.health   = 100;
    }

    update() {
        super.update();
        if(this.top > document.documentElement.clientHeight * 0.8) {
            this.dispose();
        }
    }

    dispose() {
        this.distance = 0;
        this.element.setAttribute('src', '../img/explosion.svg');
        setInterval(() => super.dispose(), 500);
    }
}