let tableadd = document.getElementById('tableadd')
function btnThHover(){
  document.getElementById('ItemAdd').style.display = 'inline-table'
}
function btnthRemove(){
  document.getElementById('ItemAdd').style.display = 'none'
}
function removeIconShow(e){
 e.childNodes[1].style.display = 'block'
}
function removeIconHide(e){ 
  e.childNodes[1].style.display = 'none'
}

function addItem(){
  let trsindex = tableadd.getElementsByTagName('tr')
   let tr = document.createElement('tr')
       tr.innerHTML = `
                        <td >${trsindex.length -1}</td>
                        <td colspan='3'><input placeholder='Enter a name'></td>
                        <td><input type='number' class='rate'></td>
                        <td><input type='number' class='quantity'></td>
                        <td><input type='text' disabled class='amount'></td>
                        <td class="text-end" class="removeBtn" onmouseover="removeIconShow(this)" onmouseleave="removeIconHide(this)">                         
                            <button type="button"  class="itemrem" onclick="removeItem(this)">__</button>
                        </td>
       `
       tableadd.appendChild(tr)
       
    // tableadd.innerHTML += `
    //     <tr>
    //                     <td >1</td>
    //                     <td colspan='3'><input placeholder='Enter a name'></td>
    //                     <td><input type='number'></td>
    //                     <td><input type='number'></td>
    //                     <td><input type='number'></td>
    //                     <td class="text-end" id="removeBtn" onmouseover="removeIconShow(this)" onmouseleave="removeIconHide(this)">                         
    //                         <button type="button"  id="itemrem" onclick="removeItem()">__</button>
    //                     </td>
    //     </tr>                
    // `
}
function removeItem(e){
  e.parentNode.parentNode.remove()
  total()
}

function total(){
  let rate = document.querySelectorAll('.rate')
 let quanti = document.querySelectorAll('.quantity')
 let amount = document.querySelectorAll('.amount')

  //  Total Gst net amount work Start
  let total =   document.getElementById('Total')  
  let gst   =   document.getElementById('GST')  
  let nAmount = document.getElementById('NAmount')  


  if(rate.length > 0 || total.value){
    
     for(let i = 0; i < rate.length; i++){
      let multi = Number(rate[i].value) * Number(quanti[i].value)
      amount[i].value = multi
     }

   
 let totalAmountStored = 0;
 
 for(let i = 0; i < amount.length; i++){
   totalAmountStored += Number(amount[i].value)
   console.log(totalAmountStored);
   }
   total.value = totalAmountStored
   gst.value = '10%'
   nAmount.value =  Number(total.value) + total.value * (10/100)
  //  console.log( nAmount.value );  
}
}
// function linetotal(e){
//   let classs = e.getAttribute('class')
//  let amount = e.parentNode.parentNode.childNodes[9].childNodes[0]      // amount input get 
//  let quanti;
//  let rate;

//    if(quanti || classs === 'quantity'){
//      quanti = e.value
//    }
//    else{
//     rate = e.value
//    }
//    console.log(quanti,rate);
   
//    if(quanti > 0 && rate > 0 ){
//     alert('yes')
//    }
   
   
// }

function styles(){
  let container = document.getElementById('container')
  let heading = document.getElementById('heading')
  let tHead = document.getElementById('tableheading')
  let cbtn = document.getElementById('cli')
  let select = document.getElementById('Select').value

  if(select === 'Style1'){
    heading.className = 'hbrown'
    tHead.className = 'thbrown'
    cbtn.className = 'cbrown'
    container.className = 'Cbrown'
  }
  else if(select === 'Style2'){
    heading.className = 'hblue'
    tHead.className = 'thblue'
    cbtn.className = 'cblue'
    container.className = 'Cblue'
  }
  else if(select === 'Style3'){
    heading.className = 'horange'
    tHead.className = 'thorange'
    cbtn.className = 'corange'
    container.className = 'Corange'
  }
  else if(select === 'Style4'){
    heading.className = 'hcyan'
    tHead.className = 'thcyan'
    cbtn.className = 'ccyan'
    container.className = 'Ccyan'

  }
  else if(select === 'Style5'){
    heading.className = 'hblack'
    tHead.className = 'thblack'
    cbtn.className = 'cblack'
    container.className = 'Cblack'
  }
  else if(select === 'Style6'){
    heading.className = 'hred'
    tHead.className = 'thred'
    cbtn.className = 'cred'
    container.className = 'Cred'
  }
  else if(select === 'Style7'){
    heading.className = 'hcoral'
    tHead.className = 'thcoral'
    cbtn.className = 'ccoral'
    container.className = 'Ccoral'
  }
  else if(select === 'Style8'){
    heading.className = 'hlightgr'
    tHead.className = 'thlightgr'
    cbtn.className = 'clightgr'
    container.className = 'Clightgr'
  }
  else if(select === 'Style9'){
    heading.className = 'hgrey'
    tHead.className = 'thgrey'
    cbtn.className = 'cgrey'
    container.className = 'Cgrey'
  }
  else if(select === 'Style10'){
    heading.className = 'hgreen'
    tHead.className = 'thgreen'
    cbtn.className = 'cgreen'
    container.className = 'Cgreen'
  }
  // console.log(select);
  
}
