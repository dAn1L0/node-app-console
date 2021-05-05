# Notas:

# Uso:
```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es el número de la tabla de multiplicar    [número] [requerido]
  -l, --listar   Muestra la tabla de la multiplicación en consola
                                                     [booleano] [defecto: false]
  -h, --hasta    Límite de multiplicación                 [número] [defecto: 10]
```
# Ejemplo
```
$ node app -b 5 -l -h 15

```


# Salida consola:

```
==================
    Tabla del: 5
==================
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
5 x 11 = 55
5 x 12 = 60
5 x 13 = 65
5 x 14 = 70
5 x 15 = 75
Archivo tabla-5.txt creado!
```