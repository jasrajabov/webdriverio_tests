pipeline {
    agent any
    node {
    env.NODEJS_HOME = "${tool 'Node 6.x'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    sh 'npm --version'
}
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