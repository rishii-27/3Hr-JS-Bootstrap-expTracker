var form = document.getElementById('myform');
// console.log(form)
var amountid = document.getElementById('inlineFormInputGroupUsername');

var expid = document.getElementById('inlineFormSelectPref');


form.addEventListener('submit', addItem)
function addItem(e) {
    e.preventDefault();
    exptype = expid.value;
    amountval = amountid.value

    createbtn = document.createElement('button')
    createbtn.appendChild(document.createTextNode('Delete'))

    const expobj = {
        type: exptype,
        amountobj: amountval
    }
    console.log(expobj.type)

    localStorage.setItem(amountval * 2.5, JSON.stringify(expobj))


    let row = document.createElement('tr')
    let exptd = document.createElement('td')
    exptd.innerText = exptype
    let amttd = document.createElement('td')
    amttd.innerText = amountval
    let actiontd = document.createElement('td')
    actiontd.append(createbtn)

    row.append(exptd)
    row.append(amttd)
    row.append(actiontd)

    let box = document.querySelector('.box')
    box.appendChild(row)
}

