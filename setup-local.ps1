# Shyara Tech Solutions - Local Development Setup Script
# This script sets up the local development environment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Shyara Tech Solutions - Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
    
    # Check if version is 18 or higher
    $majorVersion = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    if ($majorVersion -lt 18) {
        Write-Host "⚠ Warning: Node.js version 18 or higher is recommended" -ForegroundColor Yellow
    }
} catch {
    Write-Host "✗ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Check if npm is available
Write-Host ""
Write-Host "Checking for npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not available" -ForegroundColor Red
    Write-Host "npm should come with Node.js. Please reinstall Node.js." -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Get the script directory (project root)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host ""
Write-Host "Project directory: $scriptPath" -ForegroundColor Cyan
Write-Host ""

# Check if package.json exists
if (-not (Test-Path "package.json")) {
    Write-Host "✗ package.json not found in current directory" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Check if node_modules exists
$nodeModulesExists = Test-Path "node_modules"

if ($nodeModulesExists) {
    Write-Host "node_modules directory found." -ForegroundColor Yellow
    $response = Read-Host "Do you want to reinstall dependencies? (y/N)"
    if ($response -eq 'y' -or $response -eq 'Y') {
        Write-Host ""
        Write-Host "Removing existing node_modules..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
        if (Test-Path "package-lock.json") {
            Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue
        }
    } else {
        Write-Host "Skipping dependency installation." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "Setup Complete!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "To start the development server, run:" -ForegroundColor Yellow
        Write-Host "  npm run dev" -ForegroundColor White
        Write-Host ""
        $response = Read-Host "Do you want to start the dev server now? (y/N)"
        if ($response -eq 'y' -or $response -eq 'Y') {
            npm run dev
        }
        exit 0
    }
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
Write-Host ""

try {
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "Setup Complete!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
        Write-Host ""
        
        # Check for .env file
        if (-not (Test-Path ".env")) {
            Write-Host "⚠ .env file not found" -ForegroundColor Yellow
            Write-Host "Create a .env file with the following variables:" -ForegroundColor Yellow
            Write-Host "  VITE_SUPABASE_URL=your_supabase_url" -ForegroundColor Gray
            Write-Host "  VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key" -ForegroundColor Gray
            Write-Host ""
        }
        
        Write-Host "To start the development server, run:" -ForegroundColor Yellow
        Write-Host "  npm run dev" -ForegroundColor White
        Write-Host ""
        Write-Host "The application will be available at:" -ForegroundColor Yellow
        Write-Host "  http://localhost:8080" -ForegroundColor White
        Write-Host ""
        
        $response = Read-Host "Do you want to start the dev server now? (y/N)"
        if ($response -eq 'y' -or $response -eq 'Y') {
            Write-Host ""
            Write-Host "Starting development server..." -ForegroundColor Cyan
            Write-Host ""
            npm run dev
        } else {
            Write-Host ""
            Write-Host "Setup complete! Run 'npm run dev' when you are ready to start developing." -ForegroundColor Green
        }
    } else {
        Write-Host ""
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        Write-Host "Please check the error messages above and try again." -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host ""
    Write-Host "✗ An error occurred during installation" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

