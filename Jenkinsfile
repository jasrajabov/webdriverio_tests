pipeline {
    agent any
    stages {
        stage('Setup Parameters') {
            steps {
                script {
                    properties([
                        parameters([
                            choices: [
                                'end_to_end',
                                'SIT_regression',
                                'UAT_regression',
                                'generateReport'
                            ]
                        ])
                    ])
                }
            }
        }
        stage('Tests') {
            steps {
                sh 'npm run end_to_end'
            }
        }
    }
}