import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './js/header.js';
import './js/footer.js';
import './js/calculator.js';
import "./js/dinosaur.js";
import "./js/cactus.js";
import "./js/ground.js";
import "./js/player.js";
import "./js/score.js";
import "./js/football.js";
import "./js/footer_modal.js";
import "./js/guessTheNumber.js";
import "./js/header_modal.js";
import "./js/leap_year.js";
import "./js/ourTeam.js";
import "./js/scientist.js";
import "./js/stone_game.js";
import "./js/timeCalculator.js";
import { findMax } from "./js/three_numbers.js";

document.querySelectorAll(".num11, .num22, .num33").forEach(input => {
    input.addEventListener("input", findMax);
})