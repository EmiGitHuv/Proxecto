<?php
function modelo_cabecera($title, $depart) {// Función para a cabeceira das páxina con atributo, que vai ser o título da páxina.
echo <<<EOT
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!--JavaScript local-->
    <script type="text/javascript" src="../libs/js/js.js"></script>
    <script type="text/javascript" src="../libs/js/moment.js"></script>
    <!--CSS local-->
    <link href="../libs/css/estilos.css" rel="stylesheet" type="text/css">
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--Fontawesome CDN-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <!-- Bootstrap Datepicker -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script type="text/javascript" src="../libs/js/jquery.ui.datepicker-es.js"></script>
    <title>$title</title> 
</head>
<body>
    <div class="d-flex flex-row bg-primary text-white" style=" margin:0; padding:0">
        <div style = "width: 65%;"><h1 class="display-4">Lavandería "A Grela" - $depart</h1></div>   
        <div style="font-size: 32px; font-weight: lighter; margin:0; padding:0">
            <label id="lb_data_act" style="margin:0; padding:0"></label><label id="lb_dif_data" style="background-color:red"></label>
            <label id="lb_data_prod" style="margin:0; padding:0"></label>
            <input id="bt_dif_data-" class="btn btn-primary" type="button" value="<<"/>
            <input type="text" class="dateselect"  id="data_prod"  style="width: 160px;"/>
            <input id="bt_dif_data+" class="btn btn-primary" type="button" value=">>"/>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
EOT;
                    if ($depart<>'Principal'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="index.php"><i class="fas fa-home"></i> Principal</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Lavadoras'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="Lavadoras.php"><i class="fas fa-home"></i> Lavadoras</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Tuneis de lavado'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="Tuneis_lavado.php"><i class="fas fa-home"></i> Tuneis de lavado</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Maq. de alisado'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="Maq_alisado.php"><i class="fas fa-home"></i> Maq. de alisado</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Costura'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="Costura.php"><i class="fas fa-home"></i> Costura</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Peso carros'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="Peso _carros.php"><i class="fas fa-home"></i> Peso carros</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
                 </ul>
            </div>
        </div>
    </nav>
EOT;
}

function modelo_centro_de_paxina()
{
    echo <<<EOT
    <body>
        <div class="container">
            <h2 class="display-4 ">Control de acceso</h2>
            <p>Benvido a páxina principal!!!</p>
        </div>
    </body>
EOT;
}

function modelo_pe_de_paxina() {
echo <<<EOT
        <footer class="py-5" style="position: fixed; bottom: 0; width: 100%;">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footeer>
EOT;
}
?>