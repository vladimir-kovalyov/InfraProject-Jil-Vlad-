@Library('jenkins_shared') _

pipeline {
    agent any

    tools {nodejs "Node-Views"}

    stages {
         stage("Using curl example") {
            steps {
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc"
                    final String response = sh(script: "curl -s -o public/teaching.txt $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md"
                    final String response = sh(script: "curl -s -o public/idc.txt $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
                    final String response = sh(script: "curl -s -o public/milestones.txt $url", returnStdout: true).trim()
                    echo response
                }
            }
        } 
         stage('Install dependencies') {
            steps {
                sh 'npm install'
            } 
         }

         stage('Run Tests') {
                    steps {
                        sh 'npm test'
                    }
        }
        stage('Linting') {
                    steps {
                        sh 'npx eslint'
                        echo "Linting Complete"
                    }
        }  
    }
}    