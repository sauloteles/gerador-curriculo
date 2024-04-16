import { jsPDF } from "jspdf"; 

const btn = document.querySelector('.input__sbt')
const dadosCurriculo = document.getElementsByTagName('input');
console.log(dadosCurriculo)
function createPdf(){
    const doc = new jsPDF();
    let opt = {
        margin: 0,
        filename: "curriculo'.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: "a4", orientation: "portrait" },
      };
      
    doc.save('curriculo.pdf'); 
    console.log('pdf criado');
};
html2pdf()
btn.addEventListener('click', createPdf);
