<?php


 function autoload_8799c9a86c78e812c2db0798e8ebf60a($class)
{
    $classes = array(
        'Clases\Clases1\ClasesOperacionsServiceCustom9' => __DIR__ .'/ClasesOperacionsServiceCustom9.php'
    );
    if (!empty($classes[$class])) {
        include $classes[$class];
    };
}

spl_autoload_register('autoload_8799c9a86c78e812c2db0798e8ebf60a');

// Do nothing. The rest is just leftovers from the code generation.
{
}
