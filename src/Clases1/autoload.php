<?php


 function autoload_d5b072ca138e2e1edc45d0aff1fcdd60($class)
{
    $classes = array(
        'Clases\Clases1\ClasesOperacionsServiceCustom' => __DIR__ .'/ClasesOperacionsServiceCustom.php'
    );
    if (!empty($classes[$class])) {
        include $classes[$class];
    };
}

spl_autoload_register('autoload_d5b072ca138e2e1edc45d0aff1fcdd60');

// Do nothing. The rest is just leftovers from the code generation.
{
}
