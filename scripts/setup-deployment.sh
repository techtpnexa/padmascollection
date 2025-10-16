#!/bin/bash

# Deployment Setup Script for Padma's Collection
# This script helps set up Vercel deployment and GitHub Actions

echo "🚀 Setting up deployment for Padma's Collection..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
else
    echo "✅ Vercel CLI is already installed"
fi

# Link project to Vercel
echo "🔗 Linking project to Vercel..."
echo "Please follow the prompts to link your project to Vercel"
vercel link

# Check if .vercel directory was created
if [ -d ".vercel" ]; then
    echo "✅ Project linked successfully!"
    
    # Display project info
    if [ -f ".vercel/project.json" ]; then
        echo "📋 Project Information:"
        echo "Project ID: $(cat .vercel/project.json | grep -o '"projectId":"[^"]*' | cut -d'"' -f4)"
        echo "Org ID: $(cat .vercel/project.json | grep -o '"orgId":"[^"]*' | cut -d'"' -f4)"
        echo ""
        echo "🔑 Add these to your GitHub repository secrets:"
        echo "VERCEL_PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*' | cut -d'"' -f4)"
        echo "VERCEL_ORG_ID=$(cat .vercel/project.json | grep -o '"orgId":"[^"]*' | cut -d'"' -f4)"
    fi
else
    echo "❌ Failed to link project. Please try again."
    exit 1
fi

# Create .gitignore entries for Vercel
echo "📝 Updating .gitignore..."
if ! grep -q ".vercel" .gitignore 2>/dev/null; then
    echo "" >> .gitignore
    echo "# Vercel" >> .gitignore
    echo ".vercel" >> .gitignore
    echo "✅ Added .vercel to .gitignore"
fi

# Test build
echo "🔨 Testing build..."
cd apps/web
if npm run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
fi

cd ..

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "Next steps:"
echo "1. Get your Vercel token from https://vercel.com/account/tokens"
echo "2. Add GitHub repository secrets:"
echo "   - VERCEL_TOKEN_PC=your_token_here"
echo "   - VERCEL_PROJECT_ID and VERCEL_ORG_ID (shown above)"
echo "3. Push to main branch to trigger deployment"
echo ""
echo "📖 Read DEPLOYMENT.md for detailed instructions"
