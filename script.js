<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechShop Pro | Produtos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="Assets/css/style.css">
</head>
<body>
    
    <header>
        <div class="header-content">
            <h1 class="logo">TechShop <span class="pro">Pro</span></h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="produtos.html" class="active">Produtos</a></li>
                    <li><a href="promocoes.html"><i class="fas fa-percent"></i> Promoções</a></li>
                    <li><a href="favoritos.html" class="nav-icon-link"><i class="fas fa-heart"></i> Favoritos <span id="contador-favoritos" class="badge">0</span></a></li>
                    <li><a href="carrinho.html" class="nav-icon-link"><i class="fas fa-shopping-cart"></i> Carrinho</a></li>
                    <li><a href="registo.html"><i class="fas fa-user"></i> Registo</a></li>
                    <li><a href="contacto.html"><i class="fas fa-phone-alt"></i> Contacte-nos</a></li>
                </ul>
            </nav>
        </div>
    </header>

<main>
    <section class="catalogo-layout">
        
        <div class="coluna-esquerda">
            <h2 class="titulo-pagina">Catálogo de Produtos</h2>
            
            <aside class="sidebar-filtros">
                <h3><i class="fas fa-filter"></i> Filtros</h3>
                
                <div class="filtro-grupo">
                    <label>Pesquisar Nome:</label>
                    <input type="text" id="barra-pesquisa" onkeyup="filtrarProdutos()" placeholder="Procurar...">
                </div>

                <div class="filtro-grupo">
                    <label>Categoria:</label>
                    <select id="filtro-categoria" onchange="filtrarProdutos()">
                        <option value="todos">Todas</option>
                        <option value="perifericos">Periféricos</option>
                        <option value="hardware">Hardware</option>
                        <option value="monitores">Monitores</option>
                    </select>
                </div>

                <div class="filtro-grupo">
                    <label>Preço Máximo: <span id="preco-max-label">2000€</span></label>
                    <input type="range" id="filtro-preco" min="0" max="2000" step="10" value="2000" oninput="atualizarPrecoLabel(this.value)">
                </div>
            </aside>
        </div>

        <div class="produtos-grid" id="grelha-produtos">
            
            <article class="produto-card" data-categoria="perifericos">
                <button class="btn-favorito" onclick="adicionarFavorito('Rato Logitech G Pro', 129.90, 'Assets/img/rato.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/rato.jpg" alt="Rato Logitech G Pro">
                <div class="produto-info">
                    <h3 class="produto-titulo">Rato Logitech G Pro</h3>
                    <p class="preco">129,90€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Rato Logitech G Pro', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="perifericos">
                <button class="btn-favorito" onclick="adicionarFavorito('Teclado Mecânico RGB HyperX', 89.90, 'Assets/img/teclado.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/teclado.jpg" alt="Teclado Mecânico RGB HyperX">
                <div class="produto-info">
                    <h3 class="produto-titulo">Teclado Mecânico RGB HyperX</h3>
                    <p class="preco">89,90€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Teclado Mecânico RGB HyperX', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="monitores">
                <button class="btn-favorito" onclick="adicionarFavorito('Monitor Gaming LG', 120.00, 'Assets/img/Monitor 144Hz.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/Monitor 144Hz.jpg" alt="Monitor Gaming LG">
                <div class="produto-info">
                    <h3 class="produto-titulo">Monitor Gaming LG UltraGear 27''</h3>
                    <p class="preco">120,00€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Monitor Gaming LG', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="hardware">
                <button class="btn-favorito" onclick="adicionarFavorito('Epson Impressora', 79.99, 'Assets/img/Impressora.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/Impressora.jpg" alt="Epson Impressora">
                <div class="produto-info">
                    <h3 class="produto-titulo">Epson Impressora WorkForce WF-2930DWF</h3>
                    <p class="preco">79,99€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Epson Impressora', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="perifericos">
                <button class="btn-favorito" onclick="adicionarFavorito('Suporte HEADSET', 9.99, 'Assets/img/Suporte Headsets.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/Suporte Headsets.jpg" alt="Suporte HEADSET">
                <div class="produto-info">
                    <h3 class="produto-titulo">Suporte HEADSET SWISSTEN</h3>
                    <p class="preco">9,99€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Suporte HEADSET', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="hardware">
                <button class="btn-favorito" onclick="adicionarFavorito('Portátil MSI', 1199.00, 'Assets/img/Portátil MSI 15.6 Cyborg 15 B13WFKG-600XPT.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/Portátil MSI 15.6 Cyborg 15 B13WFKG-600XPT.jpg" alt="Portátil MSI">
                <div class="produto-info">
                    <h3 class="produto-titulo">Portátil MSI 15.6" Cyborg 15</h3>
                    <p class="preco">1199,00€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Portátil MSI', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

            <article class="produto-card" data-categoria="hardware">
                <button class="btn-favorito" onclick="adicionarFavorito('Desktop MSI MAG', 1699.00, 'Assets/img/Computador Desktop MSI MAG Infinite S3 14th AI Gaming 14NVP5-3253EU Preto.jpg')">
                    <i class="far fa-heart"></i>
                </button>
                <img src="Assets/img/Computador Desktop MSI MAG Infinite S3 14th AI Gaming 14NVP5-3253EU Preto.jpg" alt="Desktop MSI">
                <div class="produto-info">
                    <h3 class="produto-titulo">Desktop MSI MAG Infinite S3</h3>
                    <p class="preco">1699,00€</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho('Desktop MSI MAG', 89.90);">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </article>

        </div> 
    </section>
</main>

    <footer>
        <p>&copy; 2026 TechShop - Trabalho Final UC 00604</p>
    </footer>
    
    <script src="script.js"></script> 
    
    <script>
function adicionarProduto(nome) {
    // Exibe o alerta com o nome do produto
    alert(nome + " foi adicionado ao seu carrinho!");
}
</script>
</body>
</html>