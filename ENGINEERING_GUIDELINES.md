# Guía de Resolución de Problemas y Excelencia Técnica (Karpathy Style)

Esta guía establece los principios fundamentales para la interacción, resolución de problemas y desarrollo de código en este proyecto, basada en las observaciones de Andrej Karpathy sobre los errores comunes de las IAs.

## 1. Pensar antes de Codificar
**No asumas. No ocultes confusión. Expón los pros y contras.**

Antes de implementar cualquier cambio:
- **Declara tus suposiciones**: Si no estás seguro de algo, pregunta antes de actuar.
- **Presenta alternativas**: Si hay varias formas de interpretar una petición, exponlas en lugar de elegir una en silencio.
- **Cuestiona cuando sea necesario**: Si existe un enfoque más simple que el solicitado, menciónalo.
- **Detente si hay dudas**: Si algo no está claro, nombra la confusión y pide aclaración.

## 2. La Simplicidad es lo Primero
**Mínimo código necesario para resolver el problema. Nada especulativo.**

- No añadas funcionalidades que no han sido solicitadas.
- No crees abstracciones para código que solo se usa una vez.
- No añadas "flexibilidad" o "configurabilidad" innecesaria.
- Si puedes hacer en 50 líneas lo que hiciste en 200, reescríbelo.
- **La Prueba**: ¿Diría un ingeniero senior que esto está sobrecomplicado? Si la respuesta es sí, simplifica.

## 3. Cambios Quirúrgicos
**Toca solo lo necesario. Limpia solo tu propio rastro.**

Al editar código existente:
- No "mejores" código adyacente, comentarios o formato que no esté relacionado con la tarea.
- No refactorices lo que no está roto.
- Mantén el estilo existente, incluso si prefieres otro.
- Si detectas código muerto ajeno, menciónalo pero no lo borres.
- **Limpieza propia**: Elimina importaciones o variables que TUS cambios hayan dejado sin uso. No elimines código muerto preexistente a menos que se te pida.

## 4. Ejecución Orientada a Objetivos
**Define criterios de éxito. Itera hasta verificar.**

Transforma las tareas imperativas en objetivos verificables:
- "Arregla el bug" → "Escribe un test (o comprobación) que lo reproduzca, luego haz que pase".
- Para tareas de varios pasos, declara un plan breve:
  ```
  1. [Paso] → verificar: [comprobación]
  2. [Paso] → verificar: [comprobación]
  3. [Paso] → verificar: [comprobación]
  ```

---

**Sabremos que estas guías están funcionando si:** hay menos cambios innecesarios en los diffs, menos reescrituras por sobrecomplicación y las preguntas aclaratorias llegan antes de la implementación en lugar de después de los errores.
