require('moment-timezone');
var express = require('express');
var router = express.Router();
var moment = require('moment');

var chkbrowser = require('../module/getheader');
const quickzoom2 = require('../module/schema/qz_timetable');

router.get('/', async function (req, res) {
    var today = moment().tz("Asia/Seoul");
    var thismonday = today.clone().startOf('isoWeek');
    var highlight = today.diff(thismonday, 'days');

    await quickzoom2.findOne({class: 'yhs210'}).then(data => {
        res.render('quickzoom2', {
            data: data,
            htday: highlight
        });
    }).catch(err => {
        console.log(err);
    });
});

router.get('/quickzoom2', function (req, res) {
    res.redirect('/');
})

router.get('/goto', function (req, res) {
    if (!req.query.id || !req.query.pwd) {
        res.status(404);
        res.redirect('/404');
    } else {
        res.redirect(`${chkbrowser(req) ? "us" : "tg"}://zoom.us/join?confno=${req.query.id}&pwd=${req.query.pwd}`);
    }
})

router.get('/lang', function (req, res){
    quickzoom2.find({class: 'yhs210'}, (err, data) => {
        if (err) res.send('데이터베이스 연결에 실패하였습니다. 관리자에게 문의하세요.');
        else {
            res.render('qz2_foreign',{
                data: data
            });
        }
    })
})

module.exports = router;