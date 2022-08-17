<?php


 function autoload_112c85372a03b8d084e1d3922d31877f($class)
{
    $classes = array(
        'Clases\Clases1\ClasesOperacionsServiceCustom15' => __DIR__ .'/ClasesOperacionsServiceCustom15.php'
    );
    if (!empty($classes[$class])) {
        include $classes[$class];
    };
}

spl_autoload_register('autoload_112c85372a03b8d084e1d3922d31877f');

// Do nothing. The rest is just leftovers from the code generation.
{
}
