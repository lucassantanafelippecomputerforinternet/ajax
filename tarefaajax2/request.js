function acionarRequest(){

    let pedido = new XMLHttpRequest();

    pedido.onload = function(){
        let txtDados = lerXML(this);
        document.getElementById("texto").innerHTML = txtDados;
    }

    pedido.open("POST","livros.xml");
    pedido.send();
}

function lerXML(xml){
    let xmlDoc = xml.responseXML;
    let dadosXml = xmlDoc.getElementsByTagName("livro");
    let txtDados = "Lista de livros<br>";

    for(let i = 0; i < dadosXml.length; i ++){
        txtDados = txtDados + dadosXml[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + " :";
        txtDados = txtDados + dadosXml[i].getElementsByTagName("Editora")[0].childNodes[0].nodeValue + " :";
        txtDados = txtDados + dadosXml[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue + " :";
        txtDados = txtDados + dadosXml[i].getElementsByTagName("npages")[0].childNodes[0].nodeValue + " :";
    }
    return(txtDados);
}