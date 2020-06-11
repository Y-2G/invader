'use strict'

import {M_Base} from './m_base';
import {Utility} from '../util/utility';

// ゲームのフィールドクラス
export class M_Space extends M_Base {
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = Utility.getSpaceProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
    }
}

export class M_Field extends M_Base{
    constructor(size, position) {
        super(size, position);
    }

    resize() {
        const prop  = Utility.getFieldProp();
        this.setWidth(prop.w);
        this.setHeight(prop.h);
        this.setLeft(prop.x);
        this.setTop(prop.y);
    }
}