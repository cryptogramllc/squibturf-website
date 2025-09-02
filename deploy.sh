#!/bin/bash

# SquibTurf Website Deployment Script
# This script builds and deploys the website to AWS S3 and CloudFront

set -e

echo "🚀 Starting SquibTurf website deployment..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

echo "📦 Building the website..."
npm run build

echo "☁️  Deploying to S3 bucket: squibturf.com"
aws s3 sync out/ s3://squibturf.com --delete

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id E15TPT2PCVMI6Q --paths "/*"

echo "✅ Deployment completed successfully!"
echo "🌐 Your website is available at:"
echo "   - S3 Website: http://squibturf.com.s3-website-us-east-1.amazonaws.com"
echo "   - CloudFront: https://dx7s7qf9t5kxk.cloudfront.net"
echo "   - Custom Domain: https://squibturf.com (once DNS is configured)"
echo ""
echo "📝 Next steps:"
echo "   1. Wait for domain registration to complete (can take up to 15 minutes)"
echo "   2. Configure Route 53 hosted zone for squibturf.com"
echo "   3. Update CloudFront distribution with custom domain"
echo "   4. Request SSL certificate from AWS Certificate Manager"
