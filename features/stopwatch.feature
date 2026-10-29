Feature: Prender y apagar el cronómetro

  Background:
    Given que estoy en la pestaña de cronómetro

  Scenario: Prender el cronómetro
    Given que el cronómetro está detenido
    When prendo el cronómetro
    Then el cronómetro debería estar corriendo

  Scenario: Apagar el cronómetro
    Given que el cronómetro está corriendo
    When apago el cronómetro
    Then el cronómetro debería estar detenido
