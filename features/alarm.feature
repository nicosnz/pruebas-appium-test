Feature: Alarma

  Background:
    Given que estoy en la pestaña de alarmas

  Scenario: Prender una alarma que está apagada
    Given la primera alarma está apagada
    When prendo la primera alarma
    Then la primera alarma debería estar prendida

  Scenario: Apagar una alarma que está prendida
    Given la primera alarma está prendida
    When apago la primera alarma
    Then la primera alarma debería estar apagada
