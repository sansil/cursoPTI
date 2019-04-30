# Clase 2

## Conceptos importantes en la programación con arduino

#### Tipo de datos

Todos los valores que aparecen en un programa tienen un tipo, que es utilizado internamente por el computador y tienen un asociados ciertas operaciones que se le pueden aplicar como veremos más adelante.

Alguno de los tipo de datos que utilizaremos en el lenguaje de programación arduino son:

- Enteros

  - **byte**: número sin signo que ocupa hasta 8 bits.
  - **int** (entero): Almacena un valor entero de 16 bits con un rango de 32767 a -32768.

- Coma flotante (decimales)

  - **float**: Los números de coma flotante tienen una mayor resolución que el entero y sirve para representar los números decimales. Ejemplo: 0.18

- Textos

  - **char**: Un char representa un carácter que ocupa 1 byte de memoria. Los caracteres simples se representan con comillas. Ejemplo: "a".

  - **string**: Es una secuencia de char, osea de multiples caracteres. Ejemplo: "Hola Mundo!"

#### Operadores lógicos

Un operador, es un símbolo que indica al compilador que se lleve a cabo ciertas manipulaciones matemáticas o lógicas.

Los operadores son símbolos que representan una operación como las básicas de suma, resta, multiplicación y división, (+, -, \*, /) existen las booleanas (true y false) para las operaciones de comparación como AND, O, NOT, o las de comparación ==, !=, =, que son muy utilizados en las instrucciones de tipo if.

Alguno de los operadores utilizados en Arduino son:

- **Aritméticos**
  Los operadores aritméticos que se incluyen en el entorno de programación son suma, resta, multiplicación, división, módulo y asignación. Estos devuelven la suma, diferencia, producto, cociente o resto (respectivamente) de dos operandos.

  - **+, -, \*, /**

- **Operadores de comparación**. Las comparaciones de una variable o constante con otra se utilizan con frecuencia en las estructuras condicionales del tipo if, while, etc.. para testear si una condición es verdadera.

  - **==, !=, <, >, <=, >=**

- **Booleanos**. Los operadores lógicos o booleanos son usualmente una forma de comparar dos expresiones y devuelve un VERDADERO o FALSO dependiendo del operador. Existen tres operadores lógicos:

  - **AND (&&)**
  - **OR (||)**
  - **NOT (!)**

## Arduino blocks

En las siguientes clases utilizaremos la herramienta **Arduino blocks** que es una interfaz web que nos permitirá programar nuestro arduino de forma gráfica usando bloques.

Entremos al siguiente Link:

[Arduino blocks](http://www.arduinoblocks.com/web/project/editordemo)

## Proyecto buzzer

### Buzzer

Un buzzer pasivo o un altavoz son dispositivos que permiten convertir una señal eléctrica en una onda de sonido.

<img src="../../../assets/img/buzzer.jpg" alt="arduino 1 img" width="150"/>

#### Comportamiento

Los buzzer son transductores piezoeléctricos. Los materiales piezoeléctricos tiene la propiedad especial de variar su volumen al ser atravesados por corrientes eléctricas.

<img src="../../../assets/img/buzzer-funcionamiento.png" alt="arduino 1 img" width="400"/>

Un buzzer aprovecha este fenómeno para hacer vibrar una membrana al atravesar el material piezoeléctrico con una señal eléctrica.

## Proyecto Fotoresistencia LDR

### Fotoresistencia LDR

Es un sensor cuya resistencia varía sensiblemente con la cantidad de luz percibida. Puede también ser llamado fotoconductor, célula fotoeléctrica o resistor dependiente de la luz, cuyas siglas, LDR, se originan de su nombre en inglés light-dependent resistor.

<img src="../../../assets/img/ldr.jpg" alt="arduino 1 img" width="150"/>

#### Comportamiento

- Mas luz = menor resistencia eléctrica
- Menos luz = mayor resistencia eléctrica
