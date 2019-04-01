# Clase - 1

## Hola Mundo - Destello de un Led

En lugar del clásico **“hola mundo”** que es el primer programa que se hace cuando se aprende un lenguaje de programación, en Arduino el equivalente es el proyecto blink.

<img src="../../../assets/img/arduino1.png" alt="arduino 1 img" width="300"/>

Para esto lo primero que haremos será abrir el IDE de arduino y cargar el progrma **"Blink"** que se ecnuentra en **Archivo -> Ejemplos -> Basics -> Blink**.

<img src="../../../assets/img/blinkRoute.png" alt="arduino 1 img" width="600"/>

El primer programa o sketch será hacer parpadear el led integrado que lleva Arduino.

### Código

```arduino{9}
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

::: tip Pregunta
Que pasa si cambiamos el valor dentro de la función **"delay"**?
:::

### Usando el protoboard y componentes del Kit

Ahora armaremos la sigueinte configuración usando el kit.

<img src="../../../assets/img/blinkProto.png" alt="arduino 1 img" width="500"/>

::: danger Importante!
El led es un componente electrónico que permite el paso de la corriente en un solo sentido, por lo tanto ten en cuenta como lo conectas!
:::

## Pensando como programador

### Que es un Programa?

Un programa o algoritmo es una lista de instrucciones claras, ordenadas, objetivas
y precisas que describen un procedimiento para la solución de un problema. La
programación es una herramienta para la creación de programas informáticos que
realiza procedimientos de manera eficaz y eficiente, escritos en un lenguaje de
programación que la computadora interpreta y ejecuta.
Existen diversos lenguajes de programación que permiten a través de la lógica y el
análisis sistémico de los problemas secuenciar órdenes para procesar datos y en
base a ellos realizar ciertas funciones.

### Probando con Scratch

Scrtach es un programa gratuito y de software libre que posibilita introducirnos en el mundo de
la programación de forma intuitiva, a través de una interfaz amigable