$(function(){
    let distance=$('#dist')
    let time=$('#time')
    let button=$('#but')
    let ansdiv=$('#ans')
    let showbtn=$('#show')
    let ratediv=$('#rates')

    button.click(function(){
        $.post('/calc',{
            distance: distance.val(),
            time: time.val()
        },function(data){
            ansdiv.text("Fair:" + data.fair)
        })
    })

    showbtn.click(function(){
        $.get('/rates',function(data){
            let string=`
            Fixed Rate :Rs.  ${data.fixed}
            <br>
    MinKm: ${data.minKm}
    <br>
    perKm: ${data.perKm}
    <br>
    freeMin: ${data.freeMin}<br>
    perMin: ${data.perMin}<br>
            `
            ratediv.html(string)
        })
    })
})