<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1b368898d091a867805db711a59070f7
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'L' => 
        array (
            'Laminas\\Escaper\\' => 16,
        ),
        'F' => 
        array (
            'Fluent\\Cors\\' => 12,
        ),
        'C' => 
        array (
            'CodeIgniter\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/src',
        ),
        'Laminas\\Escaper\\' => 
        array (
            0 => __DIR__ . '/..' . '/laminas/laminas-escaper/src',
        ),
        'Fluent\\Cors\\' => 
        array (
            0 => __DIR__ . '/..' . '/agungsugiarto/codeigniter4-cors/src',
        ),
        'CodeIgniter\\' => 
        array (
            0 => __DIR__ . '/..' . '/codeigniter4/framework/system',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1b368898d091a867805db711a59070f7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1b368898d091a867805db711a59070f7::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1b368898d091a867805db711a59070f7::$classMap;

        }, null, ClassLoader::class);
    }
}
