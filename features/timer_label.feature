Feature: Etiquetar un timer

  Background:
    Given que tengo un timer corriendo

  Scenario: Agregar una etiqueta a un timer
    When le pongo la etiqueta "Pasta" al timer
    Then el timer debería mostrar la etiqueta "Pasta"
