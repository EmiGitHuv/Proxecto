<?php


 function autoload_812c6c1f43c8ca1b61ca457f707f84da($class)
{
    $classes = array(
        'Clases\Clases1\ClasesOperacionsServiceCustom2' => __DIR__ .'/ClasesOperacionsServiceCustom2.php'
    );
    if (!empty($classes[$class])) {
        include $classes[$class];
    };
}

spl_autoload_register('autoload_812c6c1f43c8ca1b61ca457f707f84da');

// Do nothing. The rest is just leftovers from the code generation.
{
}
