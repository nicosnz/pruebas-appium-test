Feature: Iniciar, pausar y eliminar un timer

  Background:
    Given que estoy en la pestaña de timer

  Scenario: Configurar e iniciar un timer de 10 segundos
    Given que no hay ningún timer
    When configuro un timer de 10 segundos y lo inicio
    Then el timer debería estar corriendo

  Scenario: Pausar y eliminar el timer
    Given que el timer está corriendo
    When pauso el timer
    And elimino el timer
    Then no debería haber ningún timer
