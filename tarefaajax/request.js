function acionarRequest(){

    let pedido = new XMLHttpRequest();

    pedido.onload = function(){
        let txtDados = lerXML(this);
        document.getElementById("texto").innerHTML = txtDados;
    }

    pedido.open("POST","funcionarios.xml");
    pedido.send();
}

function lerXML(xml){
    let xmlDoc = xml.responseXML;
    let dadosXml = xmlDoc.getElementsByTagName("funcionario");
    let txtDados = "Lista de funcionários<br>";

    for(let i = 0; i < dadosXml.length; i ++){
        txtDados = txtDados + dadosXml[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + " :";
        txtDados = txtDados + dadosXml[i].getElementsByTagName("cargo")[0].childNodes[0].nodeValue + " :";
        txtDados = txtDados + dadosXml[i].getElementsByTagName("salario")[0].childNodes[0].nodeValue + " :";
    }
    return(txtDados);
}