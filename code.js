function funcMatriz() {

    let inputNome = document.querySelector('.nomeProduto');
    let inputMarca = document.querySelector('.marca');
    let inputValor = document.querySelector('.valor');
    let inputFornecedor = document.querySelector('.fornecedor');
    const arrayProdutos = [];

    class Produto {

            constructor( inputNome,inputMarca,inputValor, inputFornecedor, ) {
            this.inputNome = inputNome;
            this.inputMarca = inputMarca;
            this.inputValor = inputValor;
            this.inputFornecedor = inputFornecedor; 
        }

    }

 function quantidadeTotalProd() {

     const quantidadeTotal = !arrayProdutos.length ? swal(`Você não possui nenhum produto cadastrado.`,{icon: "info"}) : 
    swal(`Você tem ${arrayProdutos.length} produtos cadastrados.`,{icon: "info"});
    
 }

 function valorTotalProdutos() {

    const somaValorTotalReduce = arrayProdutos.reduce((acumulador, objProp ) => {
        return  Number(acumulador) + Number(objProp.inputValor); 
    },0);

    const inputValorTotal = !arrayProdutos.length ? swal(`Ainda não há nenhum produto cadastrado.`) : 
    swal(`O valor total do(s) produto(s) cadastrado(s) até o momento é de R$${somaValorTotalReduce}`, {icon: "info"});

 }
    
 function adicionarProduto() {

    if (inputNome.value === '' || inputMarca.value === ''|| inputValor.value ==='' || inputFornecedor.value === '') {

      return swal("Por favor, verificar se há algum campo vazio.",{timer:1000,icon:"warning",});  
                
                }  else if ( isNaN(inputValor.value)) {

                     swal("Este campo somente aceita valores.",{icon:"error",});
                     inputValor.focus(); 
                     inputValor.style.borderColor = 'red';
                     
                } else {
                        inputValor.blur();
                        const prodDados = new Produto(inputNome.value,inputMarca.value,inputValor.value,inputFornecedor.value);
                        arrayProdutos.push(prodDados);
                        swal("Produto cadastrado com sucesso!", {buttons: false, timer: 1000,icon: "success",});

     }   
}

function produtoAcima5k () {

        if (!arrayProdutos.length) { 
            return swal(`Você não possui nenhum produto cadastrado.`,{icon: "info"});
        
        } else {

        const prodCincoMaisMilFilter = arrayProdutos.filter( objProp => { let filterCincoMil;
            return filterCincoMil = objProp.inputValor ? objProp.inputValor > 5000 : delete objProp.inputValor; 
        }).map( objProp => { return ` ${objProp.inputNome} -  R$${objProp.inputValor}` });
            
        const prodCincoMaisMilFilter2 = arrayProdutos.filter(objProp => objProp.inputValor > 5000);
            
            
        // Criando e manipulando uma tabela HTML com JS:
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.setAttribute('border', 0.8);
        table.appendChild(tbody);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Produtos com valor acima de R$5.000,00 :";

        row_1.appendChild(heading_1);
        thead.appendChild(row_1);
            
        console.log(prodCincoMaisMilFilter2);
            
        //  For que torna dinâmica a criação de linhas das tabela, que será de acordo com o tamanho de dados do vetor de produtos:
        for (let i = 0 ; i < prodCincoMaisMilFilter2.length ; i++  ) {

        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = prodCincoMaisMilFilter2[i].inputValor;
    
        row_2.appendChild(row_2_data_1);
        tbody.appendChild(row_2);
        }              

        swal({icon:"info",content: table,});
    } 

}
  


function relacaoGeral() {

    if (!arrayProdutos.length) {
        return swal("Ainda não há nenhum produto cadastrado.",{icon: "info"});

    } else {
        // Criando e manipulando uma tabela HTML com JS:

        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.setAttribute('border', 0.8);
        table.appendChild(tbody);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Produto";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Marca";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Valor";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Fornecedor";
        
        
        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        thead.appendChild(row_1);
        
        
        // For que torna dinâmica a criação de linhas das tabela, que será de acordo com o tamanho de dados do vetor de produtos:

        for (let i = 0 ; i < arrayProdutos.length ; i++  ) {

        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        let row_2_data_2 = document.createElement('td');
        let row_2_data_3 = document.createElement('td');
        let row_2_data_4 = document.createElement('td');

        row_2_data_1.innerHTML = arrayProdutos[i].inputNome;
        row_2_data_2.innerHTML = arrayProdutos[i].inputMarca;
        row_2_data_3.innerHTML = `R$ ${arrayProdutos[i].inputValor}`;
        row_2_data_4.innerHTML = arrayProdutos[i].inputFornecedor;
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        tbody.appendChild(row_2);
        }              
        
        swal({icon:"info",content: table,});

    }

}

  document.addEventListener('click', evento => {

        const elementoHTML =  evento.target;

        if(elementoHTML.classList.contains('adicionar_produto') ) {return adicionarProduto()};

        if(elementoHTML.classList.contains('total_prod') ) {return  quantidadeTotalProd()};

        if(elementoHTML.classList.contains('valor_total') ) {return valorTotalProdutos()};

        if(elementoHTML.classList.contains('relacao_geral') ) {return relacaoGeral()};

        if(elementoHTML.classList.contains('valor_acima_5k') ) {return produtoAcima5k()};

});

}
funcMatriz();
