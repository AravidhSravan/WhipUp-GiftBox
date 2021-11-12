const inptField = document.getElementById('inptbox');
const count = document.getElementById('count1');
function Generategift(){
    var box1 = '<span><h3>Genetated Gifts</h3></span>';
    const gifts = parseInt(inptField.value);
    for(let i=0;i<gifts;i++)
    {
        box1 += '<img src="https://lh3.googleusercontent.com/proxy/2QC6wA1ZIdphuXWrnH0Zqtd2RLBBE-wrYfoRtK1jJzT8T20iDRZCVGuf8xpxv_z0gj86nvlEiAqKOciaav-KNp8o">'
    }
    inptField.value = ''
    count.innerHTML = box1;
}