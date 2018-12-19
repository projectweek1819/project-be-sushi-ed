import { Game } from "./index";
import * as PIXI from 'pixi.js'
import Coords from "./Coords";

export default class Ui {
  _parent: HTMLElement;
  _pa: PIXI.Application;
  _game: Game;

  constructor(parent: HTMLElement, game: Game) {
    this._parent = parent;
    this._pa = new PIXI.Application();
    this._game = game;
  }

  init() {
    this._parent.appendChild(this._pa.view);
  }

  testDraw() {
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 170;
    this._pa.stage.addChild(rectangle);
  }

  draw() {
    this._game.Cell(new Coords(5, 4));
  }
}