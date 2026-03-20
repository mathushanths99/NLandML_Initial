Rename-Item -Path "src\pages\DataMining" -NewName "AppsPage.jsx" -Force -ErrorAction SilentlyContinue
If (!(Test-Path "src\pages\DataMining")) { New-Item -ItemType Directory -Path "src\pages\DataMining" -Force }
If (!(Test-Path "src\pages\NeuralNetworks")) { New-Item -ItemType Directory -Path "src\pages\NeuralNetworks" -Force }

$pages = @("HomePage.jsx", "BasicsPage.jsx", "HowItPage.jsx", "TrainingPage.jsx", "TypesPage.jsx", "AppsPage.jsx", "ResourcesPage.jsx", "QuizPage.jsx")
foreach ($p in $pages) {
    if (Test-Path "src\pages\$p") {
        Move-Item -Path "src\pages\$p" -Destination "src\pages\DataMining\" -Force
    }
}

if (Test-Path "src\NeuroLearnAcademy.jsx") { Move-Item -Path "src\NeuroLearnAcademy.jsx" -Destination "src\pages\DataMining\" -Force }
if (Test-Path "src\NeuroLearnAcademy.css") { Move-Item -Path "src\NeuroLearnAcademy.css" -Destination "src\pages\DataMining\" -Force }

if (Test-Path "src\pages\nl_ml\home.jsx") { Move-Item -Path "src\pages\nl_ml\home.jsx" -Destination "src\pages\NeuralNetworks\Home.jsx" -Force }
if (Test-Path "src\pages\nl_ml") { Remove-Item "src\pages\nl_ml" -Recurse -Force }
