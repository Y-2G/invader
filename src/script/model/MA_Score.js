'use strict'

// スコアを管理するクラス
export class MA_Score {
    constructor() {
        this._score = 0;
    }

    changeScore(score) {
        this._score += score;
    }

    get score() {
        return this._score;
    }
}