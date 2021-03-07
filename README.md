# Numerical-Linked-List

## Description

Lista enlazada desarrollada con TypeScript.
Esta version de la lista enlazada es una version generica, es decir que se puede implementar almacenando distintos tipos de datos, no solo numericos, hasta objetos y arreglos. Variara un poco en sus metodos miembros. Recomiendo mucho leer las referencias de la [lista numerica](https://github.com/FacuConci21/Numerical-Linked-List/tree/master) y saber que hace antes que usar esta lista generica.

## Instalacion

Para ver el proyecto en si, podes clonar el repositorio y luego de eso:

```bash
# instalacion
$ npm install

# ejecucion
$ npm test

```

Este ultimo compilara los archivos \*.ts y ejecutara el `index.js` resultante.

Pero no es necesario eso, con descargar los archivos List.ts y ListNode.ts podes hacer lo que se te cante.

## Stay in touch

- Author (this project) - [Facundo Conci](https://www.linkedin.com/in/facundo-ignacio-conci-caceres/)

## References

- Constructor:

El constructor puede recibir un solo parametro numerico o un arreglo literal de numeros.<br/>
Si envias un arreglo de numeros tiene que estar precedido por un valor `undefined`.

```
const list = new List();
const list = new List(1);
const list = new List(undefined, [1,3,2,4,5,6,7]);
```

- Members:

Retornan el primer y ultimo elemento de la lista, ambos retornaran `undefined` si la lista esta vacia.
Ambos retornaran el mismo elemento si solo contiene un elemento.

```
list.first; list.last;
```

Retorna `true` si la lista esta vacia, `false` si contiene almenos un elemento.

```
list.isEmpty;
```

Retorna la cantidad de elementos de la lista.

```
list.size;
```

- Functions Members:

```
printList(): void
```

Muestra la lista por consola.

```
find(value: number): string
```

Busca un nodo por su atributo `value` y retorna sus valores en formato _string_.

```
findNode(value: number): ListNode | undefined
```

Busca un nodo por su atributo `value` y lo retorna; _undefined_ si no lo encuentra.

```
insert(nodeToInsert: ListNode, index: number, options: {isLast?: boolean, isHead?: boolean}): void
```

Inserta un nuevo elemento en la lista en una posicion determinada por `index`. El parametro `options` tiene los miembros `isLast` e `isHead`, ambos seteados por defecto en _false_. El primero, debes enviarlo como _true_ si queres que el nuevo elemento sea el ultimo en nodo en la lista.
El segundo debes enviarlo como _true_ si queres que sea el primer nodo en la lista, es decir la cabeza.
Los dos en _true_ seran ignorados.

```
remove(value: number): void
```

Busca un nodo por su atributo `value` y lo remueve de la lista, quedando desreferenciado.

- Private Function Members:

Son metodos privados que utiliza la clase internamente para realizar sus operaciones.

```
removeHead(): void
```

Remueve la cabeza, lo utiliza el metodo `remove()` para el caso en que el nodo que se desea eliminar se el primer nodo. Queda en manos del programador controlar que los nodos esten correctamente cargados, puesto que eliminar la cabeza de la lista puede generar incongruencias en las referencias de los nodos.

```
log(): string
```

Genera un _string_ con todos los datos de los nodos de la lista. Empleado en el metodo `printList()`

```
end(): number
```

Funcion recursiva que retorna el indice del arreglo `nodes` de la lista que perteneza al ultimo nodo.

```
search(value: number, index: number = 0): number
```

Funcion recursiva que busca un nodo en base a su atributo `value` y retorna el indice en donde se encuentra. El parametro `index` sirve para especificar apartir de donde quiere empezar la busque, por defecto es 0(cero), comienza desde el principio de `nodes`.

Ambos, `end()` y `search()`, retornan -1 si no encontraron el elemento.
