pipeline {
    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'pnpm install --frozen-lockfile'
            }
        }
        stage('Pruebas móviles en BrowserStack') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'browserstack',
                                                  usernameVariable: 'BROWSERSTACK_USERNAME',
                                                  passwordVariable: 'BROWSERSTACK_ACCESS_KEY')]) {
                    sh 'pnpm test'
                }
            }
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
        cleanup {
            cleanWs()
        }
    }
}
