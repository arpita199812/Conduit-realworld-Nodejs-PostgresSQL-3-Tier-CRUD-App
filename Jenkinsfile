pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'  // Use double backslashes for Windows paths
        PATH = "${NODE_HOME};${env.PATH}"  // Ensure Node.js is added to the PATH
    }

    stages {
        stage('Git Checkout') {
            steps {
                withCredentials([string(credentialsId: 'git-cred', variable: 'GITHUB_TOKEN')]) {
                    git url: "https://$GITHUB_TOKEN@github.com/arpita199812/Conduit-realworld-Nodejs-PostgresSQL-3-Tier-CRUD-App.git",
                        branch: 'main'
                }
            }
        }
        stage('Install Dependencies') {  // Renamed stage for clarity
            steps {
                bat 'npm install'
            }
        }
        stage('Dev') {
            steps {
                withCredentials([string(credentialsId: 'JWT_KEY', variable: 'JWT_KEY')]) {
                bat 'npx concurrently --names "Node,Vite" -c "green,blue" "npm run dev -w backend" "npm run dev -w frontend"'
                // Using npx to run locally installed packages like 'concurrently'
                }
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Start') {  // Capitalized for consistency
            steps {
                bat 'npm run start'
            }
        }
    }
}
