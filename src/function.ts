interface Produto {
    produto: string;
    quantidade: number;
  }
  
  let estoque: Produto[] = [];
  
  if (localStorage.getItem('estoque')) {
    estoque = JSON.parse(localStorage.getItem('estoque')!);
    mostrarEstoque();
  }
  
  function adicionarProduto() {
    const produtoInput = document.getElementById("produto") as HTMLInputElement;
    const quantidadeInput = document.getElementById("quantidade") as HTMLInputElement;
  
    const produto = produtoInput.value;
    const quantidade = parseInt(quantidadeInput.value);
  
    if (produto && !isNaN(quantidade) && quantidade > 0) {
      estoque.push({ produto, quantidade });
  
      localStorage.setItem('estoque', JSON.stringify(estoque));
  
      mostrarEstoque();
    } else {
      alert("Por favor, preencha os campos corretamente.");
    }
  
    produtoInput.value = "";
    quantidadeInput.value = "";
  }
  
  function removerProduto(index: number) {
    estoque.splice(index, 1);
  
    localStorage.setItem('estoque', JSON.stringify(estoque));
  
    mostrarEstoque();
  }
  
  function mostrarEstoque() {
    const outputDiv = document.getElementById("output");
    if (outputDiv) {
      outputDiv.innerHTML = "";
  
      for (let i = 0; i < estoque.length; i++) {
        const produto = estoque[i].produto;
        const quantidade = estoque[i].quantidade;
  
        const produtoDiv = document.createElement("div");
        produtoDiv.innerHTML = `<strong>Produto:</strong> ${produto} | <strong>Quantidade:</strong> ${quantidade}`;
  
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remover";
        removeButton.className = "remove-btn";
        removeButton.onclick = (() => {
          return () => {
            removerProduto(i);
          };
        })();
  
        produtoDiv.appendChild(removeButton);
        if (outputDiv) {
          outputDiv.appendChild(produtoDiv);
        }
      }
    }
  }
  
  const btnGenerate = document.querySelector("#generate-pdf");
  
