document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
document.querySelector('[data-reset]')?.addEventListener('click',()=>{document.querySelectorAll('input').forEach(item=>item.checked=false);document.querySelectorAll('[contenteditable]').forEach(item=>item.textContent='');});
