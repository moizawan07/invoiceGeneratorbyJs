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
                        <td><input type='number'></td>
                        <td><input type='number'></td>
                        <td><input type='number'></td>
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
}
function styles(){
  let heading = document.getElementById('heading')
  let tHead = document.getElementById('tableheading')
  let cbtn = document.getElementById('cli')
  let select = document.getElementById('Select').value

  if(select === 'Style1'){
    heading.className = 'hbrown'
    tHead.className = 'thbrown'
    cbtn.className = 'cbrown'
  }
  else if(select === 'Style2'){
    heading.className = 'hblue'
    tHead.className = 'thblue'
    cbtn.className = 'cblue'
  }
  else if(select === 'Style3'){
    heading.className = 'horange'
    tHead.className = 'thorange'
    cbtn.className = 'corange'
  }
  else if(select === 'Style4'){
    heading.className = 'hcyan'
    tHead.className = 'thcyan'
    cbtn.className = 'ccyan'

  }
  else if(select === 'Style5'){
    heading.className = 'hblack'
    tHead.className = 'thblack'
    cbtn.className = 'cblack'
  }
  else if(select === 'Style6'){
    heading.className = 'hred'
    tHead.className = 'thred'
    cbtn.className = 'cred'
  }
  else if(select === 'Style7'){
    heading.className = 'hcoral'
    tHead.className = 'thcoral'
    cbtn.className = 'ccoral'
  }
  else if(select === 'Style8'){
    heading.className = 'hlightgr'
    tHead.className = 'thlightgr'
    cbtn.className = 'clightgr'
  }
  else if(select === 'Style9'){
    heading.className = 'hgrey'
    tHead.className = 'thgrey'
    cbtn.className = 'cgrey'
  }
  else if(select === 'Style10'){
    heading.className = 'hgreen'
    tHead.className = 'thgreen'
    cbtn.className = 'cgreen'
  }
  console.log(select);
  
}
