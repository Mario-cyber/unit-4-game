$(document).ready(function () {
    // Define you counters 'wins', 'loses', 'total score (ts)':
    let wins = 0
    let loses = 0
    let ts = 0

    // define a target numebr between 19 and 120 | target number: tn
    // bases on the function  Math.floor(Math.random() * (max - min + 1) + min) gotten form stack overflow


    let tn = Math.floor(Math.random() * (102) + 19);
    console.log('target number: ' + tn);

    // generate random number between 1 and 12

    $('.btn').on('click', function () {
        let id = $(this).attr('id');
        crystal()
        console.log(id)
    })

    function crystal() {
        let crysNum = Math.ceil(Math.random() * 12);
        ts = ts + crysNum;
        console.log(crysNum);
        console.log('total score: ' + ts);
        compare();
    }
    // game dynamics

    //conditionals in place but mechanica re not working  
    function compare() {

        if (ts < tn) {
            return true
        } else if (ts === tn) {
            wins++
            ts = 0
            tn = 0
            console.log('wins: ' + wins)
        } else {
            loses++
            ts = 0
            tn = Math.floor(Math.random() * (102) + 19);
            console.log('target number: ' + tn);
            console.log('loses: ' + loses)
            const conf = confirm('game over, do you want to play again?')
        };

    }



    // don not mess with these!! these close up the JQuery space
})