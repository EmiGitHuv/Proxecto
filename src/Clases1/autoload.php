<?php


 function autoload_d43b05cfc5b7df1b7b4756ee3bb516c4($class)
{
    $classes = array(
        'Clases\Clases1\ClasesOperacionsServiceCustom3' => __DIR__ .'/ClasesOperacionsServiceCustom3.php'
    );
    if (!empty($classes[$class])) {
        include $classes[$class];
    };
}

spl_autoload_register('autoload_d43b05cfc5b7df1b7b4756ee3bb516c4');

// Do nothing. The rest is just leftovers from the code generation.
{
}
