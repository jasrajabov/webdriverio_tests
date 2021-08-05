pipeline {
    agent any
    stages {
        // stage('Setup Parameters') {
        //     steps {
        //         script {
        //             properties([
        //                 parameters([
        //                     choices: [
        //                         'end_to_end',
        //                         'SIT_regression',
        //                         'UAT_regression',
        //                         'generateReport'
        //                     ]
        //                 ])
        //             ])
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'nodeJS', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
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