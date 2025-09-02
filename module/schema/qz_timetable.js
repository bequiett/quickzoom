const mongoose = require('mongoose');

const quickzoom2db = new mongoose.Schema({
    class: {type:String, required: true},
    timetable: {
        1: {type: Array, required: true},
        2: {type: Array, required: true},
        3: {type: Array, required: true},
        4: {type: Array, required: true},
        5: {type: Array, required: true},
        6: {type: Array, required: true},
        7: {type: Array, required: true}
    },
    links: {
        "언매A": {type: String},
        "언매B": {type: String},
        "수학": {type: String},
        "기하": {type: String},
        "물리": {type: String},
        "화학": {type: String},
        "생명": {type: String},
        "지구": {type: String},
        "영어A": {type: String},
        "영어B": {type: String},
        "제2외국어": {type: String},
        "일본어": {type: String},
        "중국어": {type: String},
        "체육": {type: String},
        "미술": {type: String},
        "창체": {type: String},
        "과연": {type: String},
        "종례": {type: String}
    },
    update: {type: String}
});

module.exports = mongoose.model('tablelists', quickzoom2db);