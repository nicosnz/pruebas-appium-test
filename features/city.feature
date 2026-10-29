Feature: Agregar y quitar una ciudad del reloj mundial

  Background:
    Given que estoy en la pestaña de reloj

  Scenario: Agregar Abidjan a la lista de relojes mundiales
    Given que Abidjan no está en la lista de relojes mundiales
    When agrego la ciudad Abidjan
    Then Abidjan debería estar en la lista de relojes mundiales

  Scenario: Quitar Abidjan de la lista de relojes mundiales
    Given que Abidjan está en la lista de relojes mundiales
    When quito la ciudad Abidjan
    Then Abidjan no debería estar en la lista de relojes mundiales
